# Agent Operating Principles - Funnel Studio Project

**Purpose**: This document defines the mandatory operating principles and methodology for AI agents working on the Funnel Studio project.

**Status**: Active - Always Enforced  
**Created**: February 5, 2026  
**Last Updated**: February 5, 2026

---

## 🚨 CRITICAL DIRECTIVE

### "SLOW DOWN"

**Never rush into code changes.** Speed is not the priority - precision and quality are.

**"Haste makes waste."** Taking time to understand the problem deeply prevents breaking the application and wasting more time fixing mistakes.

### The Cautionary Tale: Commit `9ed5f3a`

**What Happened**: Agent rushed in without proper analysis, applied "quick fixes" without understanding root cause, and completely broke the application.

**User Response**: "I'm very disappointed with you. You stopped making plans, you stopped using RLM, you stopped reviewing files to understand. And you just started going guns blazing like Leeroy Jenkins and completely murdered my app."

**Lesson**: This must never happen again. Always follow the RLM methodology.

---

## 📋 THE RLM METHODOLOGY (REQUIRED PROCESS)

RLM (Recursive Language Model) is a deep analysis methodology that ensures thorough understanding before action.

### The Six-Step Process

#### **Step 1: Read and Understand**
- Read ALL relevant files completely
- Don't skim - read thoroughly
- Understand the full context
- Trace code flows from start to finish
- Identify all dependencies and relationships

#### **Step 2: Create Analysis Document**
- Create comprehensive `*_RLM_ANALYSIS.md` document
- Document the problem statement clearly
- Analyze code flows and identify root causes
- Check for interference from other systems
- Document findings in phases (Phase 1, Phase 2, etc.)
- Include file paths, line numbers, and code snippets

#### **Step 3: Review Working Code**
- Compare working state vs broken state
- Use git history to find last working commit
- Identify exactly what changed
- Don't guess - read the actual code
- Save reference code before making changes

#### **Step 4: Make Clear Plan**
- Design the solution completely before coding
- List all files that need changes
- Specify exact changes with line numbers
- Consider edge cases and error handling
- Assess risks and impact
- Create implementation order

#### **Step 5: Ask for Approval**
- Present the analysis findings
- Show the complete plan
- Explain reasoning clearly
- Ask: "Should I proceed with this plan?"
- **WAIT for explicit approval**
- Never assume approval

#### **Step 6: Execute with Precision**
- Follow the approved plan exactly
- Make changes in the specified order
- Test after each change
- Document what was done
- Create `*_COMPLETE.md` summary document
- Commit with clear, descriptive messages

---

## 🎯 WHEN TO USE RLM

### Always Use RLM For:
- ✅ Any bug fix or issue investigation
- ✅ Any feature that touches multiple files
- ✅ Any time you're unsure of the root cause
- ✅ When user says "analyze" or "investigate"
- ✅ **ALWAYS when something is broken**
- ✅ When removing or refactoring major features
- ✅ When debugging unexpected behavior
- ✅ When user reports "something isn't working"

### Simple Tasks That Don't Require Full RLM:
- ✅ Single-line text changes (like button labels)
- ✅ Simple CSS/styling updates
- ✅ Adding comments or documentation
- ✅ Updating configuration values

**When in doubt, use RLM.** It's better to over-analyze than to break something.

---

## 📝 DOCUMENTATION STANDARDS

### Analysis Documents
- **Naming**: `[FEATURE]_RLM_ANALYSIS.md`
- **Location**: Project root (for visibility)
- **Structure**:
  - Problem Statement
  - Phase 1: Initial Investigation
  - Phase 2: Root Cause Analysis
  - Phase 3: Solution Design
  - Phase 4: Implementation Plan
  - Phase 5: Risk Assessment
  - Summary and Next Steps

### Completion Documents
- **Naming**: `[FEATURE]_COMPLETE.md`
- **Location**: Project root
- **Contents**:
  - What was implemented
  - Files changed
  - Testing results
  - Commit hashes
  - User guide (if applicable)

### Reference Code Preservation
- **Before removing code**, save it to `[FEATURE]_ORIGINAL_CODE.md`
- Include full file contents, not just snippets
- Document why it's being removed
- Provide commit hash of last working state
- Example: `REFINEMENT_ENGINE_ORIGINAL_CODE.md`

### Commit Messages
- Be descriptive and specific
- Include context about why the change was made
- Reference analysis documents
- Format: `[type]: [brief description] - [detailed explanation]`
- Example: `Fix: Implement asset click functionality - Dashboard assets now clickable and loadable`

---

## ❌ FORBIDDEN BEHAVIORS

### Never Do These Things:

1. **❌ Apply "Quick Fixes" Without Analysis**
   - No matter how simple it seems
   - No matter how confident you are
   - Always analyze first

2. **❌ Make Assumptions About Root Causes**
   - Don't guess
   - Read the actual code
   - Trace the full flow
   - Verify your understanding

3. **❌ Skip the Analysis Document**
   - Even for "small" bugs
   - Documentation is mandatory
   - It helps you think clearly
   - It provides a record for future reference

4. **❌ Proceed Without User Approval**
   - On major changes (multi-file, feature removal, refactoring)
   - When the solution is complex
   - When there are multiple approaches
   - Always ask: "Should I proceed?"

5. **❌ Rush - Even If It Seems Simple**
   - Simple-looking problems often have complex causes
   - Taking time prevents mistakes
   - Quality over speed, always

6. **❌ Delete Code Without Saving Reference**
   - Always save original code first
   - Document why it's being removed
   - Provide path back if needed

7. **❌ Ignore TypeScript Errors**
   - Always run `getDiagnostics` after changes
   - Fix errors before committing
   - Don't assume "it will work"

---

## 🔧 TECHNICAL STANDARDS

### Package Requirements
- ✅ Always use `@google/genai` package
- ❌ Never use `@google/generative-ai` (wrong package)

### Database Standards
- ✅ Use `brand_vault` table name
- ❌ Never use `assets` table name (wrong table)
- ✅ Verify table names in Supabase before queries

### Design System
- **Brand Color**: `#00FF30` (neon forest green)
- **Text on Brand Color**: `#000000` (black, not white)
- **Dark Mode Background**: `#000000` (true black)
- **Border Color**: `border-brand-border`
- **Surface Color**: `bg-brand-surface`

### Code Quality
- Work with precision and caution
- Test after every change
- Use TypeScript strictly
- Handle errors gracefully
- Provide user-friendly error messages

---

## 🔄 ERROR RECOVERY PROCESS

### When Errors Occur:

1. **Stop and Assess**
   - Don't try to fix it immediately
   - Understand what went wrong first

2. **Compare States**
   - Working files vs error files
   - What was deleted or changed?
   - Use git diff to see exact changes

3. **Find Last Working State**
   - Use git history
   - Identify the commit where it worked
   - Document the commit hash

4. **Analyze the Difference**
   - What code was removed?
   - What code was added?
   - What changed between working and broken?

5. **Don't Guess - Read Code**
   - Read the actual implementation
   - Trace the full flow
   - Understand the dependencies

6. **Document the Failure**
   - What went wrong?
   - Why did it go wrong?
   - How to prevent it in the future?
   - Add to this document if it's a new lesson

7. **Create Recovery Plan**
   - How to restore functionality?
   - What needs to be fixed?
   - Get user approval before proceeding

---
