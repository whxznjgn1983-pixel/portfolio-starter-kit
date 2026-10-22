export type Metric = { label: string; value: string; note?: string }
export type ContentSection = { title: string; englishTitle: string; content: string; bullets?: readonly string[] }
export type ExternalVideo = { title: string; url: string; source: string; image: string; imageAlt: string }

export type FeaturedProject = {
  index: string; slug: string; category: string; title: string; chineseTitle: string; summary: string
  image: string; imageAlt: string; secondaryImage?: string; secondaryImageAlt?: string
  metrics: Metric[]; tags: string[]
}

export type CaseStudy = {
  slug: string; number: string; kicker: string; title: string; subtitle: string; intro: string
  cover: string; coverAlt: string; supportingImage?: string; supportingImageAlt?: string; supportingLabel?: string
  metrics: Metric[]; sections: ContentSection[]; videos?: ExternalVideo[]; tags: string[]
}

export type StudentFilm = {
  slug: string; index: string; chineseTitle: string; englishTitle: string; typeZh: string; typeEn: string
  roleZh: string; roleEn: string; image: string; imageAlt: string; accent: 'red' | 'blue'; videoUrl: string
  sections: ContentSection[]
}

// 网站的文字、数字、图片路径与视频链接集中在这里。
// 后续维护时优先修改本文件；真实图片统一放在 public/projects 对应目录中。
export const portfolioData = {
  brand: 'RAE',
  navigation: [
    { label: 'Home', href: '/#home' }, { label: 'Projects', href: '/#projects' },
    { label: 'Experience', href: '/#experience' }, { label: 'About', href: '/#about' },
    { label: 'Resume', href: '/RaeResume.pdf', download: 'RaeResume.pdf' },
  ],
  profile: {
    name: '徐旻睿', englishName: 'RAE', university: 'University of Westminster',
    degree: 'BA Television Production', graduation: '2027届本科毕业生',
    availability: '2027 CAMPUS RECRUITMENT · OPEN TO OPPORTUNITIES',
    roles: ['Content Operations', 'Brand Content Operations', 'Social Media Operations', 'Marketing Operations'],
    focus: ['Content Operations', 'Content Strategy', 'Visual Production'],
    intro: '我具备影视制作专业背景与真实科技企业账号运营经验，能够将内容创意、用户需求、运营数据与实际业务目标结合，并把工作方法沉淀为可复用的流程。',
    portrait: '/images/portrait.jpg', portraitAlt: '徐旻睿个人形象照',
  },
  stats: [
    { value: '24', label: 'Videos Produced', note: '实习期间累计参与制作' },
    { value: '3,800+', label: 'Followers at Internship End', note: '实习结束时的账号累计粉丝规模' },
    { value: '30K+', label: 'Top Video Views', note: '单条最高播放，最近观察时仍在增长' },
  ],
  featuredProjects: [
    {
      index: '01', slug: 'scada-content-operations', category: 'CONTENT OPERATIONS', title: 'SCADA Content Operations', chineseTitle: '中控 SCADA 官方账号运营',
      summary: '作为官方账号视频内容的主要负责人，推进选题、脚本、制作、发布与数据复盘，并主动落实内容策略优化。',
      image: '/projects/scada-content-operations/cover.jpg', imageAlt: '中控 SCADA 官方账号视频内容拼图',
      metrics: [{ label: '参与制作', value: '24 条' }, { label: '实习结束粉丝', value: '3,800+' }, { label: '最高播放', value: '30K+' }], tags: ['内容负责', '账号运营', '策略优化', '数据复盘'],
    },
    {
      index: '02', slug: 'ai-video-production', category: 'INDEPENDENT AI WORKFLOW', title: 'AI Video Production', chineseTitle: 'AI 视频独立制作与工作流探索',
      summary: 'Independently developed and executed an end-to-end AI video production workflow. 独立完成从技术研究、创意策划到成片交付的完整流程。',
      image: '/projects/ai-video-production/cover.jpg', imageAlt: '九条 AI 工业宣传视频画面拼图', metrics: [{ label: '完成内容', value: '9 条' }],
      tags: ['自主研究', '全流程独立制作', '创意与技术问题解决', 'AI 视觉'],
    },
    {
      index: '03', slug: 'student-film-projects', category: 'FILM & DOCUMENTARY', title: 'Student Film Projects', chineseTitle: 'SHOW YOUR MONEYBAG · MAY RAIN',
      summary: 'University of Westminster 学习期间参与的综艺与访谈纪录片作品，负责摄影及后期制作。',
      image: '/projects/student-film-projects/007-behind-the-scenes.png', imageAlt: 'SHOW YOUR MONEYBAG《007暗箱操作》后期制作界面',
      secondaryImage: '/projects/student-film-projects/may-rain.png', secondaryImageAlt: 'MAY RAIN《五月雨》后期制作界面',
      metrics: [{ label: '学生作品', value: '2 项' }], tags: ['Camera', 'Cinematography', 'Post-production'],
    },
    {
      index: '04', slug: 'photography', category: 'INDEPENDENT PRACTICE', title: 'Photography', chineseTitle: '独立摄影服务与影像实践',
      summary: '通过真实拍摄展示视觉审美、构图判断、现场执行和独立项目交付能力。',
      image: '/projects/photography/photo-01.jpg', imageAlt: '建筑前的自行车与手捧鲜花的人物摄影作品',
      metrics: [{ label: '累计服务', value: '约 25 单' }], tags: ['摄影', '视觉表达', '独立执行'],
    },
  ] satisfies FeaturedProject[],
  scadaPerformance: {
    headline: { value: '≈90%', label: 'Follower Growth During Internship', note: '实习期间账号累计粉丝规模增长约 90%（近似估算）' },
    followerComparison: [
      { label: '实习前', value: '2,000+', note: '账号已运营约 10 个月' },
      { label: '实习结束时', value: '3,800+', note: '约 4 个月实习周期结束时' },
    ],
    reach: [
      { label: 'Average Views', value: '3.5K', note: '常规视频平均播放约值' },
      { label: 'Top Video Views', value: '30K+', note: '单条最高；最近观察时仍在增长' },
    ],
    engagement: [
      { label: 'Peak Likes', value: '460+' }, { label: 'Peak Saves', value: '150+' }, { label: 'Total Followers', value: '3,800+' },
    ],
    methodology: '增长幅度以“2,000 多人”和“3,800 多人”为近似基准计算，因此 ≈90% 不是精确增长率，也不是同比数据。以上为账号在实习周期内的阶段性累计结果，不代表全部增长由个人独立创造。',
    improvementTimeline: [
      { label: 'Identified the Problem', title: '主动识别问题', description: '从流量低迷和内容表现波动中，识别选题与工程师真实需求之间的偏差。' },
      { label: 'Developed the Strategy', title: '独立制定方案', description: '撰写账号运营优化方案，重新聚焦专业教学与工程师使用场景。' },
      { label: 'Executed the Changes', title: '在内容中落实', description: '在自己负责的选题、脚本、发布与审核环节中落实调整。' },
      { label: 'Monitored Performance', title: '持续监测复盘', description: '结合播放表现、用户评论与粉丝变化，持续调整后续选题。' },
      { label: 'Standardized the Workflow', title: '沉淀运营 SOP', description: '在实习结束前完成流程整理与交接，后续实习生已使用该 SOP。' },
    ],
    teamContributions: [
      { label: 'Content Ownership', title: '内容责任与独立执行', description: '作为官方账号视频内容的主要负责人，承担选题研究、脚本撰写、发布与反馈分析，并在较少日常指导下推进内容工作。' },
      { label: 'Proactive Optimization', title: '主动发现与解决问题', description: '在账号表现不理想时主动分析问题，提出并落实内容优化方案，而非只执行既定任务。' },
      { label: 'Workflow Standardization', title: '流程标准化', description: '主动整理运营 SOP 并完成交接。后续实习生已使用该 SOP，支持账号内容工作持续进行。' },
    ],
  },
  caseStudies: {
    'scada-content-operations': {
      slug: 'scada-content-operations', number: '01', kicker: 'CORE INTERNSHIP PROJECT · CONTENT OPERATIONS', title: 'SCADA Content Operations', subtitle: '中控 SCADA 官方账号运营',
      intro: '中控 SCADA 官方账号面向工业自动化专业受众。实习期间，我是账号视频内容的主要负责人，负责内容选题、脚本、发布与运营策略调整，同时与团队、拍摄与外包剪辑人员协作。账号阶段性表现属于团队与业务共同作用的结果。',
      cover: '/projects/scada-content-operations/cover.jpg', coverAlt: '中控 SCADA 官方账号短视频内容拼图',
      supportingImage: '/projects/scada-content-operations/results.jpg', supportingImageAlt: '中控 SCADA 官方账号部分视频及互动数据截图', supportingLabel: '阶段性内容表现截图 · 点击查看大图',
      metrics: [{ label: 'Follower Growth', value: '≈90%' }, { label: 'Videos Produced', value: '24' }, { label: 'Top Video Views', value: '30K+' }],
      sections: [
        { title: '项目背景', englishTitle: 'Project Overview', content: '2026 年 4 月 16 日至 8 月 14 日，在中控技术股份有限公司担任线上 SCADA 业务 To-C 业务转化实习生。账号在实习前已运营约 10 个月，累计粉丝 2,000 多人。' },
        { title: '我的职责', englishTitle: 'My Responsibilities', content: '作为官方账号视频内容的主要负责人，我推进从选题到发布与复盘的内容工作，并对协作环节准确标注团队贡献。', bullets: ['独立负责：选题研究、脚本与文案撰写、视频发布、数据监测及内容方向分析。', '参与制作：视频拍摄、剪辑、后期制作及 AI 工业视频内容。', '协同推进：对接外包剪辑并把控成片质量，参与达人合作、产品推广、发布会与直播回顾内容工作。', '主动推动：分析账号问题，制定并落实运营优化方案，整理标准化 SOP 并完成交接。'] },
        { title: '问题与分析', englishTitle: 'Challenges · Problem → Analysis', content: '实习期间，账号曾出现流量波动及部分内容表现不佳的问题。结合内容表现进行分析，但不把观察结果直接视为已验证的因果关系。', bullets: ['部分选题可能未充分匹配工程师的真实使用需求。', '泛娱乐内容整体表现一般，更具体的工业软件问题可能更容易触达目标受众。', '部分视频存在平台审核与限制词风险。', '发布节奏与官方账号内容定位仍有优化空间。'] },
        { title: '策略与实际执行', englishTitle: 'Strategy & Execution', content: '优化建议并非只停留在文档中，而是在后续由我负责的内容工作中得到实际采用。', bullets: ['增加工程师真实使用痛点相关选题，强化专业教学内容。', '减少与官方账号定位不匹配的泛娱乐与 Vlog 内容。', '优化视频脚本、限制词检查与发布前审核。', '调整内容选题和发布节奏，结合用户评论及数据反馈持续复盘。', '不将某项策略认定为粉丝增长的唯一原因。'] },
        { title: '表现与结果', englishTitle: 'Performance & Results', content: '实习期间参与制作 24 条视频；常规视频平均播放约 3,500；单条最高播放 30,000+，截至最近一次观察仍在持续获得播放；单条最高点赞 460+、最高收藏 150+。账号累计粉丝从 2,000 多人增至 3,800 多人。' },
        { title: '项目复盘', englishTitle: 'Reflection', content: '这段实践让我建立了从内容生产到数据复盘的完整视角，也更重视区分事实、建议与推断：专业受众需要更具体的问题切口，内容策略需要经过持续验证，团队成果也应明确协作边界。' },
      ],
      videos: [
        { title: '孙工教学：如何查看已使用的位号数量', url: 'https://v.douyin.com/0y9BvrzbSNA/', source: '中控 SCADA 官方抖音账号', image: '/projects/scada-content-operations/cover.jpg', imageAlt: '中控 SCADA 官方账号视频内容封面' },
        { title: '孙工教学：多屏显示如何开启和关闭？', url: 'https://v.douyin.com/hUDRTNm9bBs/', source: '中控 SCADA 官方抖音账号', image: '/projects/scada-content-operations/cover.jpg', imageAlt: '中控 SCADA 官方账号视频内容封面' },
      ], tags: ['内容策略', '账号运营', '短视频', '文案', '数据复盘', '协作执行'],
    },
    'ai-video-production': {
      slug: 'ai-video-production', number: '02', kicker: 'AI VIDEO PRODUCTION · INDEPENDENT WORKFLOW DEVELOPMENT', title: 'AI Video Production', subtitle: 'AI 视频独立制作与工作流探索',
      intro: '在中控 SCADA 实习期间，独立探索 AI 视频在工业软件内容传播中的应用，自主研究生成工具与制作方法，完成从创意策划、脚本撰写、AI 视觉素材生成到剪辑包装的完整制作流程。团队主要负责审核视频内容与产品核心理念的一致性。这一经历体现了我在新技术应用、自主学习、内容创意和独立项目交付方面的综合能力。',
      cover: '/projects/ai-video-production/cover.jpg', coverAlt: '九条 AI 工业宣传视频画面拼图',
      supportingImage: '/projects/ai-video-production/workflow.png', supportingImageAlt: 'AI 工业宣传视频剪辑与后期制作工作流界面', supportingLabel: 'AI 视频制作工作流 · 点击查看大图', metrics: [{ label: '内容交付', value: '9 条视频' }],
      sections: [
        { title: '项目概述', englishTitle: 'Project Overview', content: '实习期间独立完成 9 条 AI 工业视频，并在实际制作中建立从技术研究、创意开发到成片交付的完整工作流。' },
        { title: '自主技术探索', englishTitle: 'Independent Research', content: '在没有现成完整制作流程的情况下，独立研究 AI 视频生成工具、生成方法及其在工业软件内容传播中的实际应用方式。' },
        { title: '创意与脚本策划', englishTitle: 'Creative Development', content: '独立完成视频选题、创意构思、脚本撰写与画面生成提示词设计，把内容概念拆解为可执行的视觉段落。' },
        { title: 'AI 视频生成与制作流程', englishTitle: 'AI Production Workflow', content: '独立生成、筛选和优化 AI 视觉素材。根据实际生成效果反复调整提示词、生成方法与视觉呈现，直到素材能够支撑脚本表达。' },
        { title: '剪辑与后期包装', englishTitle: 'Post-production', content: '独立完成素材组接、视频剪辑、节奏调整与后期包装，将生成画面整合为可交付的完整内容。' },
        { title: '产品理念审核', englishTitle: 'Product Alignment', content: '团队主要审核视频表达是否符合产品核心理念与专业信息，避免产品理解或传播方向出现偏差。创意、技术探索与制作全流程由我独立负责。' },
        { title: '核心能力', englishTitle: 'Key Competencies', content: '这一项目主要体现了我在新技术应用、自主学习与独立交付方面的能力。', bullets: ['Independent Research｜自主研究 AI 工具、生成方法与应用方式。', 'End-to-End Production｜独立完成从创意、脚本、AI 画面到剪辑包装的全流程。', 'Creative Problem-Solving｜根据画面生成效果持续调整方法，将创意转化为可交付内容。'] },
      ],
      videos: [
        { title: '中控 SCADA 让数据看得见', url: 'https://v.douyin.com/LmTZfLR13rw/', source: '中控SCADA咨询号', image: '/projects/ai-video-production/cover.jpg', imageAlt: '中控 SCADA 让数据看得见 AI 视频封面' },
        { title: '为什么有些项目你连参与的机会都没有？', url: 'https://v.douyin.com/kU-vIfV8WJU/', source: '中控SCADA咨询号', image: '/projects/ai-video-production/cover.jpg', imageAlt: '为什么有些项目你连参与的机会都没有 AI 视频封面' },
      ], tags: ['Independent Research', 'End-to-End Production', 'Creative Problem-Solving', 'AI Visual Production', 'Post-production'],
    },
  } satisfies Record<string, CaseStudy>,
  studentFilms: [
    {
      slug: '007-behind-the-scenes', index: 'PROJECT 01', chineseTitle: '《007暗箱操作》', englishTitle: 'SHOW YOUR MONEYBAG', typeZh: '综艺节目', typeEn: 'Entertainment Programme',
      roleZh: '摄影、后期制作', roleEn: 'Camera Operator · Post-production', image: '/projects/student-film-projects/007-behind-the-scenes.png', imageAlt: 'SHOW YOUR MONEYBAG《007暗箱操作》在 Final Cut Pro 中的后期制作界面', accent: 'red', videoUrl: 'https://b23.tv/TAIvvbx',
      sections: [
        { title: '项目概览', englishTitle: 'Project Overview', content: 'University of Westminster BA Television Production 学生综艺作品。节目内容与制作背景待补充。' },
        { title: '我的职责', englishTitle: 'My Role', content: '担任摄影与后期制作，已确认职责为 Camera Operator 与 Post-production。' },
        { title: '制作过程', englishTitle: 'Production Process', content: '具体拍摄方案与制作细节待补充；当前不对节目规则、剧情或其他职责进行扩展。' },
        { title: '最终成果', englishTitle: 'Final Outcome', content: '完整作品已提供 B 站观看链接；不添加未经确认的项目成果或传播数据。' },
      ],
    },
    {
      slug: 'may-rain', index: 'PROJECT 02', chineseTitle: '《五月雨》', englishTitle: 'MAY RAIN', typeZh: '访谈纪录片', typeEn: 'Interview Documentary',
      roleZh: '拍摄及后期制作全流程', roleEn: 'Cinematography · Post-production', image: '/projects/student-film-projects/may-rain.png', imageAlt: 'MAY RAIN《五月雨》在 Final Cut Pro 中的后期制作界面', accent: 'blue', videoUrl: 'https://b23.tv/0pJ4UgN',
      sections: [
        { title: '项目概览', englishTitle: 'Project Overview', content: 'University of Westminster BA Television Production 访谈纪录片学生作品。纪录片主题、人物与创作背景待补充。' },
        { title: '我的职责', englishTitle: 'My Role', content: '负责拍摄与后期制作的完整执行过程，重点体现从摄影到成片的执行能力与纪录片影像表达。' },
        { title: '制作过程', englishTitle: 'Production Process', content: '已确认范围为拍摄及后期制作，不扩展为前期策划、采访统筹、导演或制片职责。具体制作细节待补充。' },
        { title: '最终成果', englishTitle: 'Final Outcome', content: '完整作品已提供 B 站观看链接；主题与人物介绍仍保留待补充。' },
      ],
    },
  ] satisfies StudentFilm[],
  photography: {
    slug: 'photography', title: 'Photography', subtitle: '独立摄影服务与影像实践',
    intro: '以真实影像展示视觉审美、构图判断与现场执行能力。累计完成约 25 单独立摄影服务。以下作品不添加未经确认的地点、客户或创作背景。',
    images: [
      { src: '/projects/photography/photo-01.jpg', alt: '建筑前的自行车与手捧鲜花的人物摄影作品', orientation: 'landscape' },
      { src: '/projects/photography/photo-02.jpg', alt: '雨中撑透明伞并手捧鲜花的人物摄影作品', orientation: 'landscape' },
      { src: '/projects/photography/photo-03.jpg', alt: '乡野场景中两位人物的纵向摄影作品', orientation: 'portrait' },
    ],
  },
  experience: {
    period: '2026.04.16 — 2026.08.14', company: '中控技术股份有限公司', role: '线上 SCADA 业务 To-C 业务转化实习生', englishRole: 'Online SCADA To-C Business Conversion Intern',
    summary: '作为中控 SCADA 官方账号视频内容的主要负责人，我不仅推进内容制作，也主动分析账号问题、制定并落实优化方案，最后将方法整理为 SOP 完成交接。账号阶段性表现属于团队与业务共同作用的结果。',
    workflow: ['负责官方账号视频内容策划与统筹', '独立开展选题研究及脚本撰写', '根据用户需求与数据反馈调整内容方向', '参与拍摄、剪辑及后期制作', '对接外包剪辑并把控成片质量', '负责视频发布与数据监测', '主动制定并执行运营优化方案', '整理标准化运营 SOP 并完成交接', '参与 AI 视频、达人合作与发布会内容工作'],
  },
  about: {
    paragraphs: [
      'I create content with both creativity and strategy. 现就读于 University of Westminster BA Television Production，预计 2027 年毕业。专业训练让我掌握影视内容制作、摄影与后期创作，也建立了对镜头、节奏和叙事的敏感度。',
      '在中控技术实习期间，我从单纯关注视频制作，转向思考内容如何匹配用户需求、服务业务目标，以及如何通过数据反馈持续优化。我主要负责企业官方账号视频内容，主动推动策略调整，并通过运营 SOP 沉淀可复用的工作方法。',
      '我希望将影视制作能力、内容策略思维与 AI 辅助生产能力结合，在内容营销、品牌传播与市场运营领域持续发展。',
    ], capabilities: ['内容责任与独立执行', '策略制定与落地', '数据监测与复盘', '跨团队协作', '流程标准化', '视觉制作', 'AI 辅助内容生产'],
  },
  contact: { email: '13868826077@163.com', resumePath: '/RaeResume.pdf', note: '欢迎通过邮箱联系，或下载 PDF 简历了解更多经历。' },
} as const

export const allProjectSlugs = [
  ...Object.keys(portfolioData.caseStudies), 'student-film-projects',
  ...portfolioData.studentFilms.map((film) => film.slug), portfolioData.photography.slug,
]
