// https://www.paulie.dev/posts/2023/09/how-to-create-excerpts-with-astro/

import MarkdownIt from 'markdown-it'
const parser = new MarkdownIt()

export const createExcerpt = (body) => {
  return parser
    .render(body)
    .split('\n')
    .slice(0, 6)
    .map((str) => {
      return str.replace(/<\/?[^>]+(>|$)/g, '').split('\n')
    })
    .flat()
    .join(' ')
}
