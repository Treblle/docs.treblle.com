import { getCollection } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'
import type { OGImageOptions } from 'node_modules/astro-og-canvas/dist/types'

// Get all entries from the `docs` content collection.
const entries = await getCollection('docs')

// Map the entry array to an object with the page ID as key and the
// frontmatter data as value.
const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]))

export const { getStaticPaths, GET } = OGImageRoute({
  // Pass down the documentation pages.
  pages,
  // Define the name of the parameter used in the endpoint path, here `slug`
  // as the file is named `[...slug].ts`.
  param: 'slug',
  // Define a function called for each page to customize the generated image.
  getImageOptions: (_path, page: (typeof pages)[number]): OGImageOptions => {
    return {
      // Use the page title and description as the image title and description.
      title: page.data.title,
      description: page.data.description,
      // Customize various colors and add a border.
      bgGradient: [[24, 24, 27]],
      border: {
        color: [63, 63, 70],
        width: 20,
        side: "block-end"
      },
      padding: 120,
      logo: {
        path: './src/assets/logo-black.svg',
        size: [100]
      }
    }
  },
})