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
    { label: 'Resume', href: '/#resume' },
  ],
  profile: {
    name: '徐旻睿', englishName: 'RAE', university: 'University of Westminster',
    degree: 'BA Television Production', graduation: '2027届本科毕业生',
    availability: '2027 CAMPUS RECRUITMENT · OPEN TO OPPORTUNITIES',
    roles: ['Content Operations', 'Brand Content Operations', 'Social Media Operations', 'Marketing Operations'],
    focus: ['Content Operations', 'Brand Communication', 'Video Production'],
    intro: '以内容运营为核心，将电视制作训练形成的选题、叙事与影像能力，应用于品牌账号、短视频和数字内容场景。关注受众需求、内容表达与数据反馈，也重视真实执行中的协作与复盘。',
    portrait: '/images/portrait.jpg', portraitAlt: '徐旻睿个人形象照',
  },
  stats: [
    { value: '≈90%', label: 'Follower Growth', note: '实习期间账号累计粉丝规模近似增长' },
    { value: '24', label: 'Videos Produced', note: '实习期间参与制作' },
    { value: '30K+', label: 'Top Video Views', note: '单条最高播放，最近观察时仍在增长' },
  ],
  featuredProjects: [
    {
      index: '01', slug: 'scada-content-operations', category: 'CONTENT OPERATIONS', title: 'SCADA Content Operations', chineseTitle: '中控 SCADA 官方账号运营',
      summary: '面向工业自动化专业受众，参与官方抖音账号从选题、脚本、制作到发布与数据复盘的内容工作流。',
      image: '/projects/scada-content-operations/cover.jpg', imageAlt: '中控 SCADA 官方账号视频内容拼图',
      metrics: [{ label: '粉丝规模增长', value: '≈90%' }, { label: '参与制作', value: '24 条' }, { label: '最高播放', value: '30K+' }], tags: ['账号运营', '内容策略', '短视频', '数据复盘'],
    },
    {
      index: '02', slug: 'ai-video-production', category: 'AI CONTENT PRODUCTION', title: 'AI Video Production', chineseTitle: 'AI 工业宣传视频制作',
      summary: '将创意策划、脚本、AI 视觉素材生成与筛选、剪辑和后期包装衔接为完整制作流程。',
      image: '/projects/ai-video-production/cover.jpg', imageAlt: '九条 AI 工业宣传视频画面拼图', metrics: [{ label: '完成内容', value: '9 条' }],
      tags: ['创意策划', '视频脚本', 'AI 视觉', '后期制作'],
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
  },
  caseStudies: {
    'scada-content-operations': {
      slug: 'scada-content-operations', number: '01', kicker: 'CORE INTERNSHIP PROJECT · CONTENT OPERATIONS', title: 'SCADA Content Operations', subtitle: '中控 SCADA 官方账号运营',
      intro: '中控 SCADA 官方账号面向工业自动化领域专业受众，通过短视频传播软件知识、产品功能及应用场景。我在实习期间参与内容策划、制作、运营协同与复盘，不将账号阶段性增长归因于某一个人或单一动作。',
      cover: '/projects/scada-content-operations/cover.jpg', coverAlt: '中控 SCADA 官方账号短视频内容拼图',
      supportingImage: '/projects/scada-content-operations/results.jpg', supportingImageAlt: '中控 SCADA 官方账号部分视频及互动数据截图', supportingLabel: '阶段性内容表现截图 · 点击查看大图',
      metrics: [{ label: 'Follower Growth', value: '≈90%' }, { label: 'Videos Produced', value: '24' }, { label: 'Top Video Views', value: '30K+' }],
      sections: [
        { title: '项目背景', englishTitle: 'Project Overview', content: '2026 年 4 月 16 日至 8 月 14 日，在中控技术股份有限公司担任线上 SCADA 业务 To-C 业务转化实习生。账号在实习前已运营约 10 个月，累计粉丝 2,000 多人。' },
        { title: '我的职责', englishTitle: 'My Responsibilities', content: '围绕官方抖音账号与相关推广内容，在明确协作边界的前提下推进工作。', bullets: ['参与执行：选题策划、视频脚本与文案、拍摄与剪辑、封面制作、发布及数据监测。', '协同推进：外包剪辑沟通与成片质量把控、达人合作沟通及产品推广支持、发布会与直播回顾内容制作。', '整理交接：运营 SOP 梳理与工作交接。', '分析与建议：根据账号表现整理运营优化方案，提出选题、定位、审核与发布节奏建议。'] },
        { title: '问题与分析', englishTitle: 'Challenges · Problem → Analysis', content: '实习期间，账号曾出现流量波动及部分内容表现不佳的问题。结合内容表现进行分析，但不把观察结果直接视为已验证的因果关系。', bullets: ['部分选题可能未充分匹配工程师的真实使用需求。', '泛娱乐内容整体表现一般，更具体的工业软件问题可能更容易触达目标受众。', '部分视频存在平台审核与限制词风险。', '发布节奏与官方账号内容定位仍有优化空间。'] },
        { title: '策略与实际执行', englishTitle: 'Strategy & Execution', content: '以“问题观察—选题与脚本—素材准备—制作协同—封面与发布—数据记录—复盘”为执行路径。建议与已执行工作分开记录。', bullets: ['实际执行：围绕软件知识、产品功能与应用场景推进选题、脚本、拍摄、剪辑、发布及复盘。', '提出建议：聚焦工程师使用痛点，加强专业教学内容，优化脚本及发布前审核。', '提出建议：区分官方账号与个人 IP 账号的内容定位，建立相对固定的发布节奏。', '持续调整：依据发布后的数据反馈讨论后续选题，但不认定任何单项策略是增长的唯一原因。'] },
        { title: '表现与结果', englishTitle: 'Performance & Results', content: '实习期间参与制作 24 条视频；常规视频平均播放约 3,500；单条最高播放 30,000+，截至最近一次观察仍在持续获得播放；单条最高点赞 460+、最高收藏 150+。账号累计粉丝从 2,000 多人增至 3,800 多人。' },
        { title: '项目复盘', englishTitle: 'Reflection', content: '这段实践让我建立了从内容生产到数据复盘的完整视角，也更重视区分事实、建议与推断：专业受众需要更具体的问题切口，内容策略需要经过持续验证，团队成果也应明确协作边界。' },
      ],
      videos: [
        { title: '孙工教学：如何查看已使用的位号数量', url: 'https://v.douyin.com/0y9BvrzbSNA/', source: '中控 SCADA 官方抖音账号', image: '/projects/scada-content-operations/cover.jpg', imageAlt: '中控 SCADA 官方账号视频内容封面' },
        { title: '孙工教学：多屏显示如何开启和关闭？', url: 'https://v.douyin.com/hUDRTNm9bBs/', source: '中控 SCADA 官方抖音账号', image: '/projects/scada-content-operations/cover.jpg', imageAlt: '中控 SCADA 官方账号视频内容封面' },
      ], tags: ['内容策略', '账号运营', '短视频', '文案', '数据复盘', '协作执行'],
    },
    'ai-video-production': {
      slug: 'ai-video-production', number: '02', kicker: 'AI-ASSISTED CONTENT PRODUCTION', title: 'AI Video Production', subtitle: '9 条 AI 工业宣传视频内容制作',
      intro: '围绕工业传播场景完成 9 条 AI 辅助视频内容，将创意概念、脚本、视觉素材、剪辑与交付连接成清晰流程。页面仅呈现已确认的工作内容，不补写工具、效率或传播成果。',
      cover: '/projects/ai-video-production/cover.jpg', coverAlt: '九条 AI 工业宣传视频画面拼图',
      supportingImage: '/projects/ai-video-production/workflow.png', supportingImageAlt: 'AI 工业宣传视频剪辑与后期制作工作流界面', supportingLabel: 'AI 视频制作工作流 · 点击查看大图', metrics: [{ label: '内容交付', value: '9 条视频' }],
      sections: [
        { title: '项目概览', englishTitle: 'Project Overview', content: '围绕工业传播需求制作 9 条 AI 辅助视频内容，重点是将内容表达与视觉制作衔接为可交付成片。' },
        { title: '创意概念', englishTitle: 'Creative Concept', content: '根据工业传播语境确定选题与表达切口，并将技术信息转化为适合视频呈现的内容方向。' },
        { title: 'AI 制作流程', englishTitle: 'AI Production Workflow', content: '依次推进内容选题、脚本撰写、AI 视觉素材生成、画面筛选、剪辑与后期包装。' },
        { title: '视觉筛选', englishTitle: 'Selected Visuals', content: '依据脚本信息与整体画面风格筛选可用视觉素材，保证进入剪辑环节的画面具备基本一致性。' },
        { title: '我的职责', englishTitle: 'My Responsibilities', content: '参与创意策划与视频脚本，完成 AI 视觉素材生成与筛选，并推进视频剪辑和后期包装。' },
        { title: '项目复盘', englishTitle: 'Reflection', content: 'AI 视觉需要服务于脚本与信息表达。素材生成只是制作环节之一，画面判断、节奏组织与后期整合仍决定最终内容是否清晰。' },
      ], tags: ['创意策划', '视频脚本', 'AI 视觉素材', '画面筛选', '视频剪辑', '后期包装'],
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
    summary: '面向中控 SCADA 官方抖音账号与相关推广场景，参与内容运营、短视频制作、数据监测、外部协作与 SOP 交接。账号阶段性表现属于团队与业务共同作用的结果。',
    workflow: ['官方账号内容运营与选题策划', '视频脚本、文案、拍摄与剪辑', '外包剪辑沟通与成片质量把控', '封面制作、发布与数据监测分析', 'AI 工业视频内容制作', '运营 SOP 整理与交接', '达人合作与产品推广支持', '发布会及直播回顾内容制作'],
  },
  about: {
    paragraphs: [
      '现就读于 University of Westminster BA Television Production，2027 届本科毕业生。电视制作训练让我熟悉从创意到成片的流程，也形成了对镜头、节奏、叙事与受众表达的敏感度。',
      '求职方向为内容运营、品牌内容运营、新媒体运营、市场运营与内容策划。希望将内容策略、项目执行、数据复盘与视觉制作能力放进真实的品牌和业务场景。',
    ], capabilities: ['内容策划', '短视频脚本', '账号运营', '品牌传播', '数据复盘', '摄影与后期', 'AI 内容制作'],
  },
  contact: { email: '13868826077@163.com', resumePath: '/resume.pdf', note: '欢迎通过邮箱联系，或下载 PDF 简历了解更多经历。' },
} as const

export const allProjectSlugs = [
  ...Object.keys(portfolioData.caseStudies), 'student-film-projects',
  ...portfolioData.studentFilms.map((film) => film.slug), portfolioData.photography.slug,
]
