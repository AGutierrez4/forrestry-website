---
inclusion: always
---

# Security Best Practices - Funnel Studio

**Purpose**: Mandatory security guidelines for all development work on Funnel Studio.

**Status**: Active - Always Enforced  
**Created**: February 7, 2026  
**Last Updated**: February 7, 2026

---

## 🚨 CRITICAL RULES - NEVER VIOLATE THESE

### Rule #1: NEVER Commit Secrets to Git

**What are secrets?**
- API keys (Google Gemini, OpenAI, etc.)
- Database credentials
- JWT secrets
- Service role keys
- OAuth client secrets
- Encryption keys
- Any password or token

**How to prevent:**
```bash
# ALWAYS check before committing
git status
git diff

# If you see .env files, STOP!
git reset HEAD .env
git reset HEAD backend/.env
```

**If you accidentally commit a secret:**
1. **STOP** - Don't push if you haven't already
2. **REVOKE** the secret immediately (API dashboard, database, etc.)
3. **REMOVE** from Git history:
```bash
git filter-branch --force --index-filter \
"git rm --cached --ignore-unmatch .env" \
--prune-empty --tag-name-filter cat -- --all
```
4. **GENERATE** new secrets
5. **FORCE PUSH** (if already pushed): `git push origin --force --all`

---

### Rule #2: .gitignore FIRST, Always

**Correct order for new projects:**
```bash
# 1. Create .gitignore FIRST
echo ".env" >> .gitignore
echo ".env.*" >> .gitignore
echo "!.env.example" >> .gitignore
echo "backend/.env" >> .gitignore
git add .gitignore
git commit -m "Add .gitignore"

# 2. THEN create .env files
touch .env
touch backend/.env

# 3. Verify they're ignored
git status  # Should NOT show .env files
```

**For existing projects:**
```bash
# If .env is already tracked, remove it
git rm --cached .env
git rm --cached backend/.env
git commit -m "Remove .env from tracking"
```

---

### Rule #3: Use .env.example for Documentation

**What to commit:**
```bash
# .env.example (SAFE - commit this)
VITE_API_URL=http://localhost:3002/api
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

**What to NEVER commit:**
```bash
# .env (NEVER commit this)
VITE_API_URL=https://funnel-studio-6bgk.vercel.app/api
VITE_SUPABASE_URL=https://kdjzsmnuuidrbaehtxju.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

### Rule #4: NEVER Use VITE_ Prefix for Secrets

**Problem:**
```javascript
// ❌ WRONG - This gets bundled into frontend JavaScript
VITE_API_KEY=AIzaSyD9UAYElVP0-qlukqzQzni8D4QAidlCyy0
// Anyone can extract it from your website source code!
```

**Solution:**
```javascript
// ✅ CORRECT - API key only in backend
// Frontend .env
VITE_API_URL=https://your-backend.vercel.app/api

// Backend .env
API_KEY=AIzaSyD9UAYElVP0-qlukqzQzni8D4QAidlCyy0

// Frontend calls backend, backend calls Gemini
```

**Rule of thumb:**
- `VITE_` prefix = Public, bundled into frontend (URLs, feature flags)
- No prefix = Private, backend only (API keys, secrets)

---

### Rule #5: Use Strong, Random Secrets

**❌ NEVER use these:**
```bash
JWT_SECRET=development_jwt_secret_key_change_in_production
JWT_SECRET=mysecret
JWT_SECRET=12345
```

**✅ ALWAYS generate random secrets:**
```bash
# Generate strong secret (32+ characters)
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Example output:
# 7f3d9e8a2b1c4f6e5d8a9b2c3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f
```

**Where to use strong secrets:**
- JWT_SECRET
- JWT_REFRESH_SECRET
- ENCRYPTION_KEY
- SESSION_SECRET
- Any authentication/encryption key

---

## 🔒 ENVIRONMENT VARIABLE MANAGEMENT

### Development (.env files)

**Frontend `.env`:**
```bash
# Public variables (bundled into frontend)
VITE_API_URL=http://localhost:3002/api
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here

# ❌ NEVER put API keys here with VITE_ prefix
```

**Backend `.env`:**
```bash
# Private variables (server-side only)
API_KEY=your_gemini_api_key_here
JWT_SECRET=your_strong_random_secret_here
JWT_REFRESH_SECRET=your_strong_random_secret_here
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
PORT=3002
NODE_ENV=development
```

---

### Production (Vercel Environment Variables)

**How to set:**
1. Go to Vercel Dashboard
2. Select your project
3. Settings → Environment Variables
4. Add each variable:
   - Key: `API_KEY`
   - Value: `your_actual_key_here`
   - Environment: Production (or all)

**Benefits:**
- ✅ Encrypted at rest
- ✅ Never in Git
- ✅ Easy to rotate
- ✅ Separate per environment (dev/staging/prod)

**Never:**
- ❌ Hardcode secrets in code
- ❌ Put secrets in vercel.json
- ❌ Put secrets in package.json scripts

---

## 🛡️ SECURITY CHECKLIST FOR NEW FEATURES

Before implementing any new feature, verify:

### Authentication & Authorization
- [ ] Does this endpoint require authentication?
- [ ] Is JWT token validated?
- [ ] Are user permissions checked?
- [ ] Can users only access their own data?

### Input Validation
- [ ] Are all inputs validated with Zod schemas?
- [ ] Are file uploads restricted (type, size)?
- [ ] Are SQL queries parameterized (using Supabase client)?
- [ ] Are user inputs sanitized before display?

### API Security
- [ ] Is rate limiting applied?
- [ ] Are error messages generic (no sensitive info)?
- [ ] Is CORS configured correctly?
- [ ] Are security headers set?

### Data Protection
- [ ] Is sensitive data encrypted at rest?
- [ ] Is data transmitted over HTTPS?
- [ ] Are passwords hashed (via Supabase Auth)?
- [ ] Is PII handled according to GDPR?

---

## 🔐 SUPABASE SECURITY RULES

### Row Level Security (RLS)

**Always enable RLS:**
```sql
ALTER TABLE your_table ENABLE ROW LEVEL SECURITY;
```

**Always create policies:**
```sql
-- Users can only see their own data
CREATE POLICY "Users can view own data" ON your_table
FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can insert own data" ON your_table
FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "Users can update own data" ON your_table
FOR UPDATE USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can delete own data" ON your_table
FOR DELETE USING (auth.uid()::text = user_id::text);
```

### Key Types

**Anon Key** (Public):
- ✅ Safe to use in frontend
- ✅ Respects RLS policies
- ✅ Can be in VITE_ variables
- ❌ Cannot bypass RLS

**Service Role Key** (Private):
- ❌ NEVER use in frontend
- ❌ NEVER commit to Git
- ✅ Only use in backend when necessary
- ⚠️ Bypasses ALL RLS policies

---

## 🚦 CODE REVIEW SECURITY CHECKLIST

Before merging any PR, verify:

### Secrets & Configuration
- [ ] No API keys in code
- [ ] No hardcoded credentials
- [ ] No secrets in comments
- [ ] .env files not committed
- [ ] .env.example updated if needed

### Authentication
- [ ] Protected routes use auth middleware
- [ ] JWT tokens validated properly
- [ ] Refresh tokens handled securely
- [ ] Logout clears all tokens

### Data Access
- [ ] RLS policies in place
- [ ] Users can't access other users' data
- [ ] Admin routes require admin role
- [ ] Database queries use parameterization

### Input/Output
- [ ] All inputs validated
- [ ] User input sanitized
- [ ] Error messages don't leak info
- [ ] File uploads restricted

---

## 🔄 SECRET ROTATION SCHEDULE

### Quarterly (Every 90 Days)
- [ ] Rotate API keys (Gemini, etc.)
- [ ] Review and rotate service role keys
- [ ] Audit access logs

### Semi-Annually (Every 6 Months)
- [ ] Rotate JWT secrets (requires user re-login)
- [ ] Review and update security policies
- [ ] Audit user permissions

### Annually (Every Year)
- [ ] Full security audit
- [ ] Penetration testing (if budget allows)
- [ ] Review and update this document

**Set calendar reminders for these!**

---

## 🚨 INCIDENT RESPONSE PLAN

### If API Key is Exposed

**Immediate Actions (Within 1 Hour):**
1. **REVOKE** the key in the service dashboard
2. **GENERATE** a new key
3. **UPDATE** production environment variables
4. **DEPLOY** with new key
5. **MONITOR** for unusual activity

**Follow-up Actions (Within 24 Hours):**
1. **REMOVE** key from Git history
2. **NOTIFY** team members
3. **DOCUMENT** the incident
4. **REVIEW** how it happened
5. **UPDATE** processes to prevent recurrence

### If Database is Compromised

**Immediate Actions:**
1. **ROTATE** all database credentials
2. **REVIEW** access logs
3. **IDENTIFY** affected data
4. **NOTIFY** affected users (if PII exposed)
5. **CONTACT** Supabase support

**Follow-up Actions:**
1. **AUDIT** all database policies
2. **STRENGTHEN** RLS policies
3. **IMPLEMENT** additional monitoring
4. **DOCUMENT** the incident
5. **REPORT** to authorities (if required by GDPR)

---

## 📚 SECURITY RESOURCES

### Tools
- **GitHub Secret Scanning**: Enable in repo settings
- **npm audit**: Run weekly (`npm audit`)
- **Snyk**: Automated dependency scanning
- **OWASP ZAP**: Security testing tool

### Documentation
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Supabase Security](https://supabase.com/docs/guides/platform/security)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8725)
- [GDPR Compliance](https://gdpr.eu/checklist/)

### Commands
```bash
# Check for secrets in Git history
git log -p | grep -i "api_key\|secret\|password"

# Audit npm dependencies
npm audit

# Check what's being committed
git diff --cached

# Remove file from Git history
git filter-branch --force --index-filter \
"git rm --cached --ignore-unmatch FILE_PATH" \
--prune-empty --tag-name-filter cat -- --all
```

---

## ✅ SECURITY QUICK REFERENCE

### Before Every Commit
```bash
git status          # Check what's staged
git diff --cached   # Review changes
# Look for: .env files, API keys, passwords, secrets
```

### Before Every Deploy
```bash
npm audit                    # Check dependencies
grep -r "TODO.*security" .   # Check security TODOs
grep -r "FIXME.*security" .  # Check security FIXMEs
```

### Monthly Maintenance
```bash
npm audit fix        # Fix vulnerabilities
npm outdated         # Check for updates
git log --all --grep="security"  # Review security commits
```

---

## 🎯 GOLDEN RULES SUMMARY

1. **NEVER commit secrets** - Use .env.example instead
2. **.gitignore FIRST** - Before creating .env files
3. **VITE_ = Public** - Never use for secrets
4. **Strong secrets** - Generate random, 32+ characters
5. **RLS always** - Enable on all Supabase tables
6. **Validate inputs** - Use Zod schemas
7. **Rate limit** - Especially AI endpoints
8. **Rotate regularly** - Quarterly for API keys
9. **Monitor logs** - Weekly review
10. **When in doubt, ask** - Security is not optional

---

## 📝 DOCUMENT MAINTENANCE

This document should be updated when:
- New security vulnerabilities are discovered
- New services or APIs are integrated
- Security incidents occur
- Best practices evolve
- Team feedback suggests improvements

**Last Updated**: February 7, 2026  
**Next Review**: May 7, 2026 (Quarterly)

---

*Security is everyone's responsibility. When in doubt, ask. It's better to be safe than sorry.*
