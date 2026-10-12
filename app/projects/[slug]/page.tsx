import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ImageLightbox } from '../../components/image-lightbox'
import { ArrowIcon, SiteFooter, SiteHeader } from '../../components/site-chrome'
import { allProjectSlugs, portfolioData, type CaseStudy, type StudentFilm } from '../../data/portfolio'

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return allProjectSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = (portfolioData.caseStudies as Record<string, CaseStudy>)[slug]
  const film = portfolioData.studentFilms.find((item) => item.slug === slug)

  if (caseStudy) return { title: `${caseStudy.title}｜徐旻睿作品集`, description: caseStudy.intro, openGraph: { images: [caseStudy.cover] } }
  if (film) return { title: `${film.chineseTitle}｜徐旻睿作品集`, description: `${film.typeZh}；职责：${film.roleZh}`, openGraph: { images: [film.image] } }
  if (slug === 'student-film-projects') return { title: 'Student Film Projects｜徐旻睿作品集', description: 'University of Westminster Television Production 学生影视作品。' }
  if (slug === 'photography') return { title: 'Photography｜徐旻睿作品集', description: portfolioData.photography.intro, openGraph: { images: [portfolioData.photography.images[0].src] } }
  return {}
}

function Breadcrumb({ current }: { current: string }) {
  return <div className="project-breadcrumb"><Link href="/#projects">PROJECTS</Link><span>/</span><span>{current}</span></div>
}

function Metrics({ items }: { items: readonly { label: string; value: string }[] }) {
  if (!items.length) return null
  return <dl className="case-metrics">{items.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
}

function CaseStudyPage({ project }: { project: CaseStudy }) {
  return (
    <>
      <section className="case-hero">
        <Breadcrumb current={project.title} />
        <div className="case-hero-copy">
          <p className="eyebrow">{project.number} / {project.kicker}</p>
          <h1>{project.title}</h1><h2>{project.subtitle}</h2><p>{project.intro}</p>
        </div>
        <div className="case-cover">
          <Image src={project.cover} alt={project.coverAlt} fill priority sizes="100vw" className="media-contain" />
        </div>
        <Metrics items={project.metrics} />
      </section>

      <section className={`case-body ${project.slug === 'ai-video-production' ? 'workflow-case' : ''}`}>
        <div className="case-body-intro"><p className="eyebrow">PROJECT BREAKDOWN</p><p>已知信息直接展示；未提供的数据与项目因果关系不作推断。</p></div>
        <div className="case-sections">
          {project.sections.map((section, index) => (
            <article className="case-section" key={section.englishTitle}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><p>{section.englishTitle}</p><h3>{section.title}</h3></div>
              <p>{section.content}</p>
            </article>
          ))}
        </div>

        {project.supportingImage && project.supportingImageAlt ? (
          <figure className="case-supporting">
            <figcaption><span>VISUAL EVIDENCE</span><strong>{project.supportingLabel}</strong></figcaption>
            <ImageLightbox src={project.supportingImage} alt={project.supportingImageAlt} contain className="supporting-image" sizes="(max-width: 900px) 100vw, 88vw" />
          </figure>
        ) : null}

        <ul className="tag-list case-tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      </section>
      <NextProject />
    </>
  )
}

function FilmCard({ film }: { film: StudentFilm }) {
  return (
    <article className={`film-card film-${film.accent}`}>
      <Link href={`/projects/${film.slug}`} aria-label={`查看学生作品：${film.chineseTitle}`}>
        <div className="film-image"><Image src={film.image} alt={film.imageAlt} fill sizes="(max-width: 800px) 100vw, 48vw" className="media-cover" /></div>
        <div className="film-card-copy"><p>{film.index} · {film.typeEn}</p><h2>{film.chineseTitle}</h2><h3>{film.englishTitle}</h3><dl><div><dt>类型</dt><dd>{film.typeZh}</dd></div><div><dt>我的职责</dt><dd>{film.roleZh}</dd></div></dl><span>VIEW PROJECT <ArrowIcon /></span></div>
      </Link>
    </article>
  )
}

function StudentFilmsPage() {
  return (
    <>
      <section className="collection-hero"><Breadcrumb current="STUDENT FILM PROJECTS" /><p className="eyebrow">03 / FILM & DOCUMENTARY</p><h1>Student Film<br />Projects</h1><p>University of Westminster · BA Television Production</p></section>
      <section className="film-grid">{portfolioData.studentFilms.map((film) => <FilmCard film={film as StudentFilm} key={film.slug} />)}</section>
      <section className="collection-note"><span>NOTE</span><p>现有页面只呈现已确认的项目类型与职责。节目内容、纪录片主题及成片链接将在资料补充后更新。</p></section>
      <NextProject />
    </>
  )
}

function FilmDetailPage({ film }: { film: StudentFilm }) {
  return (
    <>
      <section className={`film-detail-hero film-${film.accent}`}>
        <Breadcrumb current={film.englishTitle} />
        <div className="film-detail-copy"><p className="eyebrow">{film.index} / {film.typeEn}</p><h1>{film.chineseTitle}</h1><h2>{film.englishTitle}</h2><dl><div><dt>TYPE</dt><dd>{film.typeZh} / {film.typeEn}</dd></div><div><dt>MY ROLE</dt><dd>{film.roleZh}<br /><span>{film.roleEn}</span></dd></div></dl></div>
        <div className="film-detail-image"><Image src={film.image} alt={film.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 58vw" className="media-contain" /></div>
      </section>
      <section className="film-detail-body">
        {film.sections.map((section, index) => <article key={section.englishTitle}><span>{String(index + 1).padStart(2, '0')}</span><div><p>{section.englishTitle}</p><h3>{section.title}</h3></div><p>{section.content}</p></article>)}
        <div className="video-placeholder"><span>FUTURE UPDATE</span><strong>视频播放链接待补充</strong><p>Video link coming soon</p></div>
      </section>
      <nav className="film-project-nav" aria-label="学生作品导航"><Link href="/projects/student-film-projects">← 返回 Student Film Projects</Link></nav>
    </>
  )
}

function PhotographyPage() {
  const photography = portfolioData.photography
  return (
    <>
      <section className="collection-hero photo-hero"><Breadcrumb current="PHOTOGRAPHY" /><p className="eyebrow">04 / VISUAL PRACTICE</p><h1>{photography.title}</h1><h2>{photography.subtitle}</h2><p>{photography.intro}</p></section>
      <section className="photo-gallery" aria-label="摄影作品画廊">
        {photography.images.map((photo, index) => <figure className={`photo-item photo-item-${index + 1} photo-${photo.orientation}`} key={photo.src}><ImageLightbox src={photo.src} alt={photo.alt} className="gallery-image" sizes="(max-width: 800px) 100vw, 65vw" /><figcaption><span>0{index + 1}</span><span>PHOTOGRAPHY</span></figcaption></figure>)}
      </section>
      <NextProject />
    </>
  )
}

function NextProject() {
  return <section className="next-project"><p className="eyebrow">KEEP EXPLORING</p><Link href="/#projects">返回精选项目 <ArrowIcon /></Link></section>
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const caseStudy = (portfolioData.caseStudies as Record<string, CaseStudy>)[slug]
  const film = portfolioData.studentFilms.find((item) => item.slug === slug)

  let content
  if (caseStudy) content = <CaseStudyPage project={caseStudy} />
  else if (slug === 'student-film-projects') content = <StudentFilmsPage />
  else if (film) content = <FilmDetailPage film={film as StudentFilm} />
  else if (slug === 'photography') content = <PhotographyPage />
  else notFound()

  return <><a className="skip-link" href="#project-content">跳至项目内容</a><SiteHeader /><main id="project-content">{content}</main><SiteFooter /></>
}
