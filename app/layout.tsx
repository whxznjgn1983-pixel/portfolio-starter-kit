import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: '徐旻睿｜内容运营作品集',
  description: '徐旻睿的个人作品集，面向 2027 届校园招聘，关注内容运营、品牌内容运营、新媒体运营与市场运营。',
  openGraph: {
    title: '徐旻睿｜内容运营作品集',
    description: '2027届｜内容运营、品牌内容运营、短视频策划',
    url: baseUrl,
    siteName: '徐旻睿 Portfolio',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: '徐旻睿 2027 内容运营作品集' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '徐旻睿｜内容运营作品集',
    description: '2027届｜内容运营、品牌内容运营、短视频策划',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
