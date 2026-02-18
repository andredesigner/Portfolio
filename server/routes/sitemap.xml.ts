import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const siteUrl = config.public.siteUrl || 'http://localhost:3000'

  const projects = (await serverQueryContent(event, '/projects').find()) as unknown as Array<{
    slug: string
  }>

  const urls = [
    `${siteUrl}/`,
    ...projects.map((project) => `${siteUrl}/projects/${project.slug}`)
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
  </url>`
  )
  .join('\n')}
</urlset>`

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return xml
})
