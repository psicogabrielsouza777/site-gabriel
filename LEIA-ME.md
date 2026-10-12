# Site — Gabriel Souza | Psicologia + Neuropsicologia

No ar em: https://www.gabrielsouzapsico.blog

Site estático (HTML + CSS + JavaScript puro). Não precisa instalar nada.

## Estrutura

```
gabriel-site/
├── index.html        → Página inicial
├── servicos.html     → Serviços (avaliação neuropsicológica e ABA)
├── avaliacao.html    → Como funciona a avaliação
├── sobre.html        → Sobre o Gabriel (trajetória e formação)
├── duvidas.html      → Dúvidas frequentes
├── css/style.css     → Todo o visual do site
├── js/main.js        → Menu, animações, formulário e dados de contato
├── sitemap.xml       → Lista das páginas para o Google
├── robots.txt        → Autoriza o Google e indica o sitemap
└── img/              → Fotos
```

## Como abrir no VS Code

1. Descompacte o arquivo e abra a pasta `gabriel-site` no VS Code (Arquivo → Abrir Pasta).
2. Instale a extensão **Live Server** (Ritwick Dey).
3. Clique com o botão direito em `index.html` → **Open with Live Server**.

## Onde alterar os dados de contato

No início de `js/main.js`, bloco `CONFIG`:

```js
const CONFIG = {
  whatsapp: "5511978045188",
  whatsappLabel: "(11) 97804-5188",
  instagram: "@psico.gabrielsouza",
  crp: "CRP 06/178480"
};
```

Alterando ali, o número, o Instagram e o CRP mudam em todas as páginas.

## Para publicar

Qualquer hospedagem de site estático funciona (Hostinger, Netlify, Vercel, GitHub Pages):
basta enviar o conteúdo da pasta `gabriel-site` mantendo a mesma estrutura.

## Observações

- O formulário abre o WhatsApp com a mensagem pronta — não guarda dados em servidor.
- Para trocar uma foto, substitua o arquivo em `img/` mantendo o mesmo nome.

## Google

- `sitemap.xml` lista as 5 páginas. Ao criar uma página nova, adicione um bloco `<url>` para ela e atualize `<lastmod>`.
- No Google Search Console, envie o endereço `https://www.gabrielsouzapsico.blog/sitemap.xml` em **Sitemaps**.
