import Link from 'next/link'
import { portfolioData } from '../data/portfolio'

export function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

export function SiteHeader() {
  const { brand, navigation, contact } = portfolioData

  return (
    <header className="site-header">
      <Link className="wordmark" href="/#home" aria-label="返回首页">
        {brand}
      </Link>
      <nav aria-label="主要导航">
        {navigation.map((item) => (
          'download' in item
            ? <a key={item.label} href={item.href} download={item.download}>{item.label}</a>
            : <Link key={item.label} href={item.href}>{item.label}</Link>
        ))}
      </nav>
      <a className="header-contact" href={`mailto:${contact.email}`}>
        联系我 <ArrowIcon />
      </a>
    </header>
  )
}

export function SiteFooter() {
  const { profile } = portfolioData

  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>Designed for 2027 Campus Recruitment</span>
      <Link href="/#home">回到首页 ↑</Link>
    </footer>
  )
}
