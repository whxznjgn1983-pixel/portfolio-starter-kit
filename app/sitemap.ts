import { allProjectSlugs } from './data/portfolio'

export const baseUrl = 'https://portfolio-starter-kit-ten-beta-68.vercel.app'

export default function sitemap() {
  const lastModified = new Date().toISOString().split('T')[0]
  return [
    { url: baseUrl, lastModified },
    ...allProjectSlugs.map((slug) => ({ url: `${baseUrl}/projects/${slug}`, lastModified })),
  ]
}
