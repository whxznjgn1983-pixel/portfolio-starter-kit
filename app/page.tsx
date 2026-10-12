import Image from 'next/image'
import Link from 'next/link'
import { portfolioData, type FeaturedProject } from './data/portfolio'
import { ArrowIcon, SiteFooter, SiteHeader } from './components/site-chrome'

function ProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <article className={`featured-card featured-card-${project.index}`}>
      <Link href={`/projects/${project.slug}`} className="featured-link" aria-label={`查看项目：${project.title}`}>
        <div className={`featured-media ${project.secondaryImage ? 'featured-media-split' : ''}`}>
          <div className="featured-image">
            <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 800px) 100vw, 50vw" className="project-card-image" />
          </div>
          {project.secondaryImage ? (
            <div className="featured-image">
              <Image src={project.secondaryImage} alt={project.secondaryImageAlt ?? ''} fill sizes="(max-width: 800px) 50vw, 25vw" className="project-card-image" />
            </div>
          ) : null}
          <span className="project-number">{project.index}</span>
          <span className="project-open">VIEW CASE <ArrowIcon /></span>
        </div>

        <div className="featured-copy">
          <div className="featured-title-row">
            <div>
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-chinese-title">{project.chineseTitle}</p>
            </div>
            <ArrowIcon />
          </div>
          <p className="project-summary">{project.summary}</p>
          <div className="project-card-footer">
            <ul className="tag-list" aria-label={`${project.title} 相关能力`}>
              {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            {project.metrics[0] ? (
              <p className="card-metric"><strong>{project.metrics[0].value}</strong><span>{project.metrics[0].label}</span></p>
            ) : null}
          </div>
        </div>
      </Link>
    </article>
  )
}

export default function Home() {
  const { profile, stats, featuredProjects, scadaPerformance, experience, about, contact } = portfolioData

  return (
    <>
      <a className="skip-link" href="#content">跳至主要内容</a>
      <SiteHeader />

      <main id="content">
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-topline"><span>PORTFOLIO / 2027</span><span>CONTENT · BRAND · SOCIAL</span></div>
          <div className="hero-content">
            <p className="eyebrow">{profile.availability}</p>
            <h1>{profile.name}<span>{profile.englishName}</span></h1>
            <p className="hero-role">{profile.roles.join(' / ')}</p>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">查看项目 <ArrowIcon /></a>
              <a className="text-link" href={contact.resumePath} download>下载简历 / Download Resume ↓</a>
            </div>
          </div>
          <div className="education-card">
            <span>EDUCATION</span><strong>{profile.university}</strong><p>{profile.degree}</p><small>{profile.graduation}</small>
          </div>
          <dl className="stats-grid">
            {stats.map((stat) => <div key={stat.label}><dd>{stat.value}</dd><dt>{stat.label}</dt><p>{stat.note}</p></div>)}
          </dl>
          <p className="stats-methodology">{scadaPerformance.methodology}</p>
        </section>

        <section className="home-performance" aria-labelledby="performance-heading">
          <div className="performance-heading">
            <p className="eyebrow">SCADA / PERFORMANCE SNAPSHOT</p>
            <h2 id="performance-heading">真实数据，<br />清晰口径。</h2>
            <p>{scadaPerformance.headline.note}</p>
          </div>
          <div className="performance-mini-grid">
            {[...scadaPerformance.reach, ...scadaPerformance.engagement].map((metric) => (
              <div key={metric.label}>
                <span>{metric.label}</span><strong>{metric.value}</strong>
                {'note' in metric && metric.note ? <p>{metric.note}</p> : null}
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>项目与内容实践</h2>
            <p>从商业账号运营、AI 视频制作到学生影视与摄影，用真实素材呈现策划、制作与执行能力。</p>
          </div>
          <div className="featured-grid">
            {featuredProjects.map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-heading light-heading"><p className="eyebrow">02 / EXPERIENCE</p><h2>经历与工作方式</h2></div>
          <div className="experience-grid">
            <div className="experience-lead"><span>{experience.period}</span><h3>{experience.company}</h3><p>{experience.role}</p><small>{experience.englishRole}</small></div>
            <div className="experience-body">
              <p>{experience.summary}</p>
              <ol>{experience.workflow.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}</ol>
            </div>
          </div>
        </section>

        <section className="about-section section-shell" id="about">
          <div className="about-portrait">
            <Image src={profile.portrait} alt={profile.portraitAlt} fill sizes="(max-width: 900px) 100vw, 40vw" className="media-cover" />
            <span>ABOUT / RAE</span>
          </div>
          <div className="about-content">
            <div className="section-heading"><p className="eyebrow">03 / ABOUT ME</p><h2>把内容做清楚，也把过程讲清楚。</h2></div>
            <div className="about-copy">
              {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="capability-grid">{about.capabilities.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="resume-section" id="resume">
          <p className="eyebrow">04 / RESUME & CONTACT</p>
          <h2>寻找内容运营、品牌内容运营、<br />新媒体运营与市场运营机会。</h2>
          <div className="resume-actions">
            <a className="primary-button light-button" href={contact.resumePath} download>下载简历 / Download Resume ↓</a>
            <a className="email-link" href={`mailto:${contact.email}`}>{contact.email} <ArrowIcon /></a>
          </div>
          <p className="contact-note">{contact.note}</p>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
