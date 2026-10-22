/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/resume.pdf',
        destination: '/RaeResume.pdf',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
