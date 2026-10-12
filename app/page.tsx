import Image from 'next/image'
import { portfolioData, type Project } from './data/portfolio'

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

function ProjectMedia({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        className="project-image"
        src={project.image}
        alt={project.imageAlt}
        width={1200}
        height={800}
      />
    )
  }

  return (
    <div className="media-placeholder" role="img" aria-label={`${project.title} 图片待补充`}>
      <span className="placeholder-index">{project.index}</span>
      <div>
        <p>PROJECT MEDIA</p>
        <strong>图片待补充</strong>
        <small>{project.expectedImages.join(' · ')}</small>
      </div>
    </div>
  )
}

function ProjectArticle({ project }: { project: Project }) {
  return (
    <article className="project-card" id={project.id}>
      <div className="project-meta">
        <span>{project.index}</span>
        <span>{project.category}</span>
        <span>{project.status}</span>
      </div>

      <ProjectMedia project={project} />

      <div className="project-copy">
        <div>
          <p className="eyebrow">{project.eyebrow}</p>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
        </div>

        {project.metrics.length > 0 ? (
          <dl className="project-metrics">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="project-details">
          {project.sections.map((section) => (
            <section key={section.title}>
              <h4>{section.title}</h4>
              <p>{section.content}</p>
            </section>
          ))}
        </div>

        <ul className="tag-list" aria-label={`${project.title} 相关能力`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function Home() {
  const { profile, navigation, stats, projects, experience, about, contact } =
    portfolioData

  return (
    <>
      <a className="skip-link" href="#content">
        跳至主要内容
      </a>

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="返回首页">
          XMR<span>®</span>
        </a>
        <nav aria-label="主要导航">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href={`mailto:${contact.email}`}>
          联系我 <ArrowIcon />
        </a>
      </header>

      <main id="content">
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-topline">
            <span>PORTFOLIO / 2027</span>
            <span>CONTENT · BRAND · SOCIAL</span>
          </div>

          <div className="hero-content">
            <p className="eyebrow">{profile.availability}</p>
            <h1>
              徐旻睿
              <span>{profile.englishName}</span>
            </h1>
            <p className="hero-role">{profile.roles.join(' / ')}</p>
            <p className="hero-intro">{profile.intro}</p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                查看项目 <ArrowIcon />
              </a>
              <a className="text-link" href={contact.resumePath} download>
                下载简历 / Download Resume ↓
              </a>
            </div>
          </div>

          <div className="education-card">
            <span>EDUCATION</span>
            <strong>{profile.university}</strong>
            <p>{profile.degree}</p>
            <small>{profile.graduation}</small>
          </div>

          <dl className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd>{stat.value}</dd>
                <dt>{stat.label}</dt>
                <p>{stat.note}</p>
              </div>
            ))}
          </dl>
        </section>

        <section className="section-shell" id="projects">
          <div className="section-heading">
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>项目与内容实践</h2>
            <p>以公开、可验证的信息呈现项目。图片缺失处均为明确占位，不代替真实案例素材。</p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <ProjectArticle project={project} key={project.id} />
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-heading light-heading">
            <p className="eyebrow">02 / EXPERIENCE</p>
            <h2>经历与工作方式</h2>
          </div>

          <div className="experience-grid">
            <div className="experience-lead">
              <span>{experience.period}</span>
              <h3>{experience.company}</h3>
              <p>{experience.role}</p>
            </div>
            <div className="experience-body">
              <p>{experience.summary}</p>
              <ol>
                {experience.workflow.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="about-section section-shell" id="about">
          <div className="section-heading">
            <p className="eyebrow">03 / ABOUT</p>
            <h2>把内容做清楚，<br />也把过程讲清楚。</h2>
          </div>
          <div className="about-copy">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="capability-grid">
              {about.capabilities.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="resume-section" id="resume">
          <p className="eyebrow">04 / RESUME & CONTACT</p>
          <h2>寻找内容运营、品牌内容运营、<br />新媒体运营与市场运营机会。</h2>
          <div className="resume-actions">
            <a className="primary-button light-button" href={contact.resumePath} download>
              下载简历 / Download Resume ↓
            </a>
            <a className="email-link" href={`mailto:${contact.email}`}>
              {contact.email} <ArrowIcon />
            </a>
          </div>
          <p className="contact-note">{contact.note}</p>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed for 2027 Campus Recruitment</span>
        <a href="#home">回到顶部 ↑</a>
      </footer>
    </>
  )
}
