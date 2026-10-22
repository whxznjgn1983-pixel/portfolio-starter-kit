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

function PerformanceDashboard() {
  const performance = portfolioData.scadaPerformance
  return (
    <section className="performance-dashboard" aria-labelledby="dashboard-title">
      <div className="dashboard-headline">
        <p className="eyebrow">PERFORMANCE DASHBOARD</p>
        <strong>{performance.headline.value}<span aria-hidden="true">↗</span></strong>
        <h2 id="dashboard-title">{performance.headline.label}</h2>
        <p>{performance.headline.note}</p>
      </div>
      <div className="follower-comparison" aria-label="粉丝规模前后对比">
        {performance.followerComparison.map((item, index) => (
          <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong><p>{item.note}</p>{index === 0 ? <b aria-hidden="true">→</b> : null}</div>
        ))}
      </div>
      <div className="reach-comparison">
        {performance.reach.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong><p>{item.note}</p></div>)}
      </div>
      <div className="engagement-row">
        {performance.engagement.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}
      </div>
      <p className="dashboard-methodology"><span>DATA NOTE</span>{performance.methodology}</p>
    </section>
  )
}

function ImprovementTimeline() {
  const steps = portfolioData.scadaPerformance.improvementTimeline
  return (
    <section className="improvement-section" aria-labelledby="improvement-title">
      <div className="module-heading">
        <p className="eyebrow">PROACTIVE STRATEGY OPTIMIZATION</p>
        <h2 id="improvement-title">从发现问题到沉淀方法</h2>
        <p>这套路径呈现我主动推动改进的实际行动，不将账号增长简化归因于单一策略。</p>
      </div>
      <ol className="improvement-timeline">
        {steps.map((step, index) => (
          <li key={step.label}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{step.label}</p>
            <h3>{step.title}</h3>
            <div>{step.description}</div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function TeamContribution() {
  const contributions = portfolioData.scadaPerformance.teamContributions
  return (
    <section className="team-contribution" aria-labelledby="contribution-title">
      <div className="module-heading">
        <p className="eyebrow">MY CONTRIBUTION TO THE TEAM</p>
        <h2 id="contribution-title">我为团队带来的价值</h2>
        <p>用已发生的工作行为说明贡献，同时保留拍摄、剪辑与业务协作中的团队边界。</p>
      </div>
      <div className="contribution-grid">
        {contributions.map((item, index) => (
          <article key={item.label}>
            <span>0{index + 1}</span>
            <p>{item.label}</p>
            <h3>{item.title}</h3>
            <div>{item.description}</div>
          </article>
        ))}
      </div>
    </section>
  )
}

function VideoCards({ project }: { project: CaseStudy }) {
  if (!project.videos?.length) return null
  const isAiProject = project.slug === 'ai-video-production'
  return (
    <section className="representative-videos" aria-labelledby="representative-videos-heading">
      <div className="video-section-heading">
        <p className="eyebrow">{isAiProject ? 'SELECTED AI VIDEOS' : 'REPRESENTATIVE VIDEOS'}</p>
        <h2 id="representative-videos-heading">{isAiProject ? 'AI 视频代表作品' : '官方账号代表视频'}</h2>
        <p>点击前往抖音官方页面观看。视频未下载或重新托管。</p>
      </div>
      <div className="external-video-grid">
        {project.videos.map((video) => (
          <a key={video.url} href={video.url} target="_blank" rel="noreferrer" className="external-video-card" aria-label={`在抖音观看：${video.title}`}>
            <div className="external-video-image"><Image src={video.image} alt={video.imageAlt} fill sizes="(max-width: 760px) 100vw, 50vw" className="media-contain" /><span className="play-icon" aria-hidden="true">▶</span></div>
            <div><span>{video.source}</span><h3>{video.title}</h3><p>{isAiProject ? '观看视频' : '前往官方视频'} <ArrowIcon /></p></div>
          </a>
        ))}
      </div>
      <p className="video-role-note">
        {isAiProject
          ? '本人独立负责 AI 视频的技术研究、创意构思、脚本撰写、画面生成与优化、剪辑包装及成片交付；团队主要审核产品核心理念与专业信息是否准确。'
          : '本人负责相关内容的选题、脚本、发布与运营监测，并参与视频制作；拍摄、剪辑与业务工作包含团队协作，不将视频表现归因于个人单独贡献。'}
      </p>
    </section>
  )
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
        <div className="case-body-intro">
          <p className="eyebrow">PROJECT BREAKDOWN</p>
          <p>{project.slug === 'ai-video-production' ? '从自主研究、创意开发到成片交付，完整拆解独立制作流程与团队的产品审核边界。' : '已知信息直接展示；未提供的数据与项目因果关系不作推断。'}</p>
        </div>
        <div className="case-sections">
          {project.sections.map((section, index) => (
            <article className="case-section" key={section.englishTitle}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><p>{section.englishTitle}</p><h3>{section.title}</h3></div>
              <div className="case-section-content"><p>{section.content}</p>{section.bullets?.length ? <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}</div>
            </article>
          ))}
        </div>

        {project.slug === 'scada-content-operations' ? <><ImprovementTimeline /><TeamContribution /><PerformanceDashboard /></> : null}

        {project.supportingImage && project.supportingImageAlt ? (
          <figure className="case-supporting">
            <figcaption><span>VISUAL EVIDENCE</span><strong>{project.supportingLabel}</strong></figcaption>
            <ImageLightbox src={project.supportingImage} alt={project.supportingImageAlt} contain className="supporting-image" sizes="(max-width: 900px) 100vw, 88vw" />
          </figure>
        ) : null}

        <ul className="tag-list case-tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <VideoCards project={project} />
      </section>
      <NextProject />
    </>
  )
}

function FilmCard({ film }: { film: StudentFilm }) {
  return (
    <article className={`film-card film-${film.accent}`}>
      <Link href={`/projects/${film.slug}`} aria-label={`查看学生作品：${film.chineseTitle}`}>
        <div className="film-image"><Image src={film.image} alt={film.imageAlt} fill sizes="(max-width: 800px) 100vw, 50vw" className="media-contain" /></div>
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
      <section className="collection-note"><span>NOTE</span><p>现有页面只呈现已确认的项目类型与职责。两部作品均提供 B 站观看链接；未提供的内容、主题与制作细节继续保留待补充。</p></section>
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
        <a className="film-video-link" href={film.videoUrl} target="_blank" rel="noreferrer" aria-label={`在 B 站观看 ${film.englishTitle}`}>
          <div className="film-video-preview"><Image src={film.image} alt={`${film.englishTitle} 完整作品封面`} fill sizes="(max-width: 760px) 100vw, 75vw" className="media-contain" /><span className="play-icon" aria-hidden="true">▶</span></div>
          <div><span>FULL FILM · BILIBILI</span><strong>观看完整作品</strong><p>{film.englishTitle} · {film.chineseTitle} <ArrowIcon /></p></div>
        </a>
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
        {photography.images.map((photo, index) => <figure className={`photo-item photo-item-${index + 1} photo-${photo.orientation}`} key={photo.src}><ImageLightbox src={photo.src} alt={photo.alt} contain className="gallery-image" sizes="(max-width: 800px) 100vw, 65vw" /><figcaption><span>0{index + 1}</span><span>PHOTOGRAPHY</span></figcaption></figure>)}
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
