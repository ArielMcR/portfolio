// Roda depois do `vite build`: renderiza o App em HTML (versão em português) dentro de dist/index.html
// e gera o dist/sitemap.xml. Assim o Google e as prévias de link (LinkedIn, WhatsApp) leem o conteúdo
// direto do HTML, sem depender de JavaScript.
import { build } from 'vite'
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

// Endereço publicado no GitHub Pages (o mesmo do canonical no index.html)
const SITE_URL = 'https://arielmcr.github.io/portfolio/'

const root = process.cwd()
const ssrOutDir = path.join(root, 'dist-ssr')
const indexPath = path.join(root, 'dist', 'index.html')

await build({
  logLevel: 'warn',
  // o gsap publica módulos ESM sem "type": "module", então o Node não consegue importá-lo direto
  ssr: { noExternal: ['gsap'] },
  build: {
    ssr: 'src/entry-server.jsx',
    outDir: ssrOutDir,
    emptyOutDir: true,
  },
})

try {
  const { render } = await import(pathToFileURL(path.join(ssrOutDir, 'entry-server.js')).href)
  const template = await fs.readFile(indexPath, 'utf8')
  const placeholder = '<!--app-html-->'
  if (!template.includes(placeholder)) {
    throw new Error(`dist/index.html não tem o marcador ${placeholder} dentro de #root`)
  }
  const appHtml = await render()
  await fs.writeFile(indexPath, template.replace(placeholder, appHtml))

  const today = new Date().toISOString().slice(0, 10)
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`
  await fs.writeFile(path.join(root, 'dist', 'sitemap.xml'), sitemap)

  console.log(`prerender: ${(appHtml.length / 1024).toFixed(1)} KB de HTML em dist/index.html, sitemap.xml gerado`)
} finally {
  await fs.rm(ssrOutDir, { recursive: true, force: true })
}
