export const baseUrl = 'https://portfolio-starter-kit-ten-beta-68.vercel.app'

export default function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
    },
  ]
}
