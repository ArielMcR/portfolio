// Usado só no build (scripts/prerender.mjs) para gerar o HTML da página já preenchido,
// assim buscadores e prévias de link enxergam o conteúdo sem precisar rodar JavaScript.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import i18n from './utils/i18n.js'

export async function render() {
  await i18n.changeLanguage('pt')
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
