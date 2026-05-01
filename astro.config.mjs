import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'

export default defineConfig({
  site: 'https://www.forrestry.ai',
  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    sitemap(),
    mdx(),
  ],
})
