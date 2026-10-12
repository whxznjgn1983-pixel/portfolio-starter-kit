export type Metric = { label: string; value: string }
export type ContentSection = { title: string; englishTitle: string; content: string }

export type FeaturedProject = {
  index: string
  slug: string
  category: string
  title: string
  chineseTitle: string
  summary: string
  image: string
  imageAlt: string
  secondaryImage?: string
  secondaryImageAlt?: string
  metrics: Metric[]
  tags: string[]
}

export type CaseStudy = {
  slug: string
  number: string
  kicker: string
  title: string
  subtitle: string
  intro: string
  cover: string
  coverAlt: string
  supportingImage?: string
  supportingImageAlt?: string
  supportingLabel?: string
  metrics: Metric[]
  sections: ContentSection[]
  tags: string[]
}

export type StudentFilm = {
  slug: string
  index: string
  chineseTitle: string
  englishTitle: string
  typeZh: string
  typeEn: string
  roleZh: string
  roleEn: string
  image: string
  imageAlt: string
  accent: 'red' | 'blue'
  sections: ContentSection[]
}

// 网站的文字、数字与图片路径集中在这里。
// 后续维护时，优先修改本文件；真实图片统一放在 public/projects 对应目录中。
export const portfolioData = {
  navigation: [
    { label: 'Home', href: '/#home' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Experience', href: '/#experience' },
    { label: 'About', href: '/#about' },
    { label: 'Resume', href: '/#resume' },
  ],
  profile: {
    name: '徐旻睿', englishName: 'XUMINRUI', university: 'University of Westminster',
    degree: 'BA Television Production', graduation: '2027届',
    availability: '2027 CAMPUS RECRUITMENT · OPEN TO OPPORTUNITIES',
    roles: ['内容运营', '品牌内容运营', '新媒体运营', '市场运营'],
    focus: ['内容策划', '短视频制作', '品牌表达'],
    intro: '从电视节目制作训练出发，将选题、叙事与影像能力延伸到品牌账号和数字内容场景。关注内容如何被看见、被理解，并在真实执行中持续复盘。',
    portrait: '/images/portrait.jpg', portraitAlt: '徐旻睿个人形象照',
  },
  stats: [
    { value: '24', label: '条视频', note: '参与制作与发布' },
    { value: '≈1,200', label: '新增粉丝', note: '账号阶段性累计结果' },
    { value: '25,000', label: '最高播放', note: '单条视频最高播放约值' },
  ],
  featuredProjects: [
    {
      index: '01', slug: 'scada-content-operations', category: 'CONTENT OPERATIONS',
      title: 'SCADA Content Operations', chineseTitle: '中控 SCADA 官方账号运营',
      summary: '从选题、文案到拍摄协同、发布与数据复盘，参与官方账号完整的短视频内容工作流。',
      image: '/projects/scada-content-operations/cover.jpg', imageAlt: '中控 SCADA 官方账号视频内容拼图',
      metrics: [{ label: '发布内容', value: '24 条' }, { label: '新增粉丝', value: '约 1,200' }, { label: '最高播放', value: '约 2.5 万' }],
      tags: ['账号运营', '短视频', '数据复盘'],
    },
    {
      index: '02', slug: 'ai-video-production', category: 'AI CONTENT PRODUCTION',
      title: 'AI Video Production', chineseTitle: 'AI 工业宣传视频制作',
      summary: '将内容选题、脚本、AI 视觉素材与后期剪辑衔接为可交付的工业传播内容。',
      image: '/projects/ai-video-production/cover.jpg', imageAlt: '九条 AI 工业宣传视频画面拼图',
      metrics: [{ label: '完成内容', value: '9 条' }], tags: ['创意策划', '脚本', 'AI 视觉', '后期制作'],
    },
    {
      index: '03', slug: 'student-film-projects', category: 'FILM & DOCUMENTARY',
      title: 'Student Film Projects', chineseTitle: '学生影视作品',
      summary: 'University of Westminster Television Production 学习期间参与的综艺与访谈纪录片项目。',
      image: '/projects/student-film-projects/007-behind-the-scenes.png', imageAlt: '《007暗箱操作》后期制作界面',
      secondaryImage: '/projects/student-film-projects/may-rain.png', secondaryImageAlt: '《五月雨》后期制作界面',
      metrics: [{ label: '学生作品', value: '2 项' }], tags: ['摄影执行', '镜头语言', '后期制作'],
    },
    {
      index: '04', slug: 'photography', category: 'INDEPENDENT PRACTICE', title: 'Photography',
      chineseTitle: '独立摄影服务与影像实践',
      summary: '通过真实拍摄展示视觉审美、现场执行与从沟通到成片交付的独立项目能力。',
      image: '/projects/photography/photo-01.jpg', imageAlt: '建筑前的自行车与手捧鲜花的人物摄影作品',
      metrics: [{ label: '累计服务', value: '约 25 单' }], tags: ['摄影', '视觉表达', '独立执行'],
    },
  ] satisfies FeaturedProject[],
  caseStudies: {
    'scada-content-operations': {
      slug: 'scada-content-operations', number: '01', kicker: 'CORE INTERNSHIP PROJECT · CONTENT OPERATIONS',
      title: 'SCADA Content Operations', subtitle: '中控 SCADA 官方账号运营',
      intro: '参与中控 SCADA 官方账号的短视频内容运营，覆盖选题、文案、拍摄、剪辑协同、封面、发布和数据复盘。以下数据为项目阶段性汇总，不将账号增长归因于某一单独动作。',
      cover: '/projects/scada-content-operations/cover.jpg', coverAlt: '中控 SCADA 官方账号短视频内容拼图',
      supportingImage: '/projects/scada-content-operations/results.jpg', supportingImageAlt: '中控 SCADA 官方账号部分视频及互动数据截图',
      supportingLabel: '阶段性内容表现截图 · 点击查看大图',
      metrics: [{ label: '参与发布', value: '24 条视频' }, { label: '账号新增', value: '约 1,200 粉丝' }, { label: '单条最高', value: '约 2.5 万播放' }],
      sections: [
        { title: '项目背景', englishTitle: 'Project Overview', content: '项目发生于官方账号阶段性表现低迷期间，工作重点是持续产出可发布内容，并通过数据反馈识别后续调整方向。' },
        { title: '我的职责', englishTitle: 'My Responsibilities', content: '参与选题、文案、拍摄、剪辑对接、封面制作、内容发布与数据复盘；在多人协作中推进内容从想法到上线。' },
        { title: '发现的问题', englishTitle: 'Challenges', content: '围绕账号阶段性低迷现象，从内容选题、表达方式与发布后的表现记录中进行内容层面的排查。现有资料不足以证明单一因素与账号表现之间存在直接因果关系。' },
        { title: '策略与执行', englishTitle: 'Strategy & Execution', content: '以“问题观察—选题与脚本—素材准备—拍摄与剪辑协同—封面与发布—数据记录—复盘调整”为工作路径，持续推进每个内容节点。' },
        { title: '项目成果', englishTitle: 'Results', content: '阶段内参与完成并发布 24 条视频；账号新增粉丝约 1,200；单条视频最高播放约 2.5 万。以上均为阶段性结果汇总。' },
        { title: '项目复盘', englishTitle: 'Reflection', content: '这段实践让我建立了从内容生产到发布复盘的完整视角，也更重视在团队协作中记录过程、区分事实与推断，并让下一轮内容调整有据可循。' },
      ], tags: ['内容策略', '账号运营', '短视频', '文案', '数据复盘'],
    },
    'ai-video-production': {
      slug: 'ai-video-production', number: '02', kicker: 'AI-ASSISTED CONTENT PRODUCTION',
      title: 'AI Video Production', subtitle: '9 条 AI 工业宣传视频内容制作',
      intro: '围绕工业传播场景完成 9 条 AI 辅助视频内容，将选题、脚本、视觉素材、剪辑与交付串联成清晰的制作流程。',
      cover: '/projects/ai-video-production/cover.jpg', coverAlt: '九条 AI 工业宣传视频画面拼图',
      supportingImage: '/projects/ai-video-production/workflow.png', supportingImageAlt: 'AI 工业宣传视频在剪映中的剪辑工作流界面',
      supportingLabel: '剪辑与后期制作工作流 · 点击查看大图', metrics: [{ label: '内容交付', value: '9 条视频' }],
      sections: [
        { title: '内容选题与创意', englishTitle: '01 · Topic & Concept', content: '结合工业传播语境确定内容方向与表达切口，使技术信息能够进入短视频叙事。' },
        { title: '脚本撰写', englishTitle: '02 · Scriptwriting', content: '将选题转化为可制作的脚本结构，明确画面、文案与信息推进关系。' },
        { title: 'AI 视觉素材', englishTitle: '03 · AI Visuals', content: '根据脚本需要生成与筛选视觉素材，为后续剪辑准备可用画面。' },
        { title: '剪辑与后期', englishTitle: '04 · Edit & Post', content: '完成素材组织、节奏剪辑、字幕与基础后期包装，使画面与信息表达形成统一。' },
        { title: '内容交付', englishTitle: '05 · Delivery', content: '按项目要求完成成片输出与交付。当前仅展示已确认的制作数量与工作范围，不补写未经确认的传播数据。' },
      ], tags: ['内容选题', '脚本撰写', 'AI 视觉', '视频剪辑', '内容交付'],
    },
  } satisfies Record<string, CaseStudy>,
  studentFilms: [
    {
      slug: '007-behind-the-scenes', index: 'PROJECT 01', chineseTitle: '《007暗箱操作》', englishTitle: '007: Behind the Scenes',
      typeZh: '综艺节目', typeEn: 'Entertainment Programme', roleZh: '摄影、后期制作', roleEn: 'Camera Operator · Post-production',
      image: '/projects/student-film-projects/007-behind-the-scenes.png', imageAlt: '《007暗箱操作》在 Final Cut Pro 中的后期制作界面', accent: 'red',
      sections: [
        { title: '项目概览', englishTitle: 'Project Overview', content: 'University of Westminster Television Production 学生作品。节目内容与制作背景待补充。' },
        { title: '我的职责', englishTitle: 'My Role', content: '担任摄影与后期制作，重点体现现场摄影执行、镜头语言运用与后期制作能力。' },
        { title: '制作过程', englishTitle: 'Production Process', content: '具体拍摄方案与制作流程待补充；当前不对节目规则、剧情或其他未确认职责进行扩展。' },
        { title: '最终成果', englishTitle: 'Final Outcome', content: '成片信息与公开视频链接待补充。' },
      ],
    },
    {
      slug: 'may-rain', index: 'PROJECT 02', chineseTitle: '《五月雨》', englishTitle: 'May Rain',
      typeZh: '访谈纪录片', typeEn: 'Interview Documentary', roleZh: '拍摄及后期制作全流程', roleEn: 'Cinematography · Post-production',
      image: '/projects/student-film-projects/may-rain.png', imageAlt: '《五月雨》在 Final Cut Pro 中的后期制作界面', accent: 'blue',
      sections: [
        { title: '项目概览', englishTitle: 'Project Overview', content: 'University of Westminster Television Production 访谈纪录片学生作品。纪录片主题、人物与创作背景待补充。' },
        { title: '我的职责', englishTitle: 'My Role', content: '负责拍摄与后期制作的完整执行过程，重点体现从摄影到成片的执行能力与纪录片影像表达。' },
        { title: '制作过程', englishTitle: 'Production Process', content: '已确认范围为拍摄及后期制作；不扩展为前期策划、采访统筹、导演或制片职责。具体制作细节待补充。' },
        { title: '最终成果', englishTitle: 'Final Outcome', content: '成片信息与公开视频链接待补充。' },
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
    period: '时间待补充', company: '中控技术', role: '中控 SCADA 官方账号内容运营与视频制作实践',
    summary: '在工业品牌内容场景中，参与短视频从策划到发布的完整工作流，并尝试将 AI 工具用于内容生产。网站不添加未经确认的岗位名称、日期或业务归因。',
    workflow: ['识别账号与内容问题', '形成选题与脚本', '推进拍摄与制作协同', '完成包装、发布与记录', '基于数据进行内容复盘'],
  },
  about: {
    paragraphs: [
      '现就读于 University of Westminster BA Television Production，2027 届。电视制作训练让我熟悉从创意到成片的流程，也让我更关注内容背后的受众、叙事和传播。',
      '求职方向为内容运营、品牌内容运营、新媒体运营与市场运营。希望把内容制作能力、项目执行力和对平台表达的敏感度，放进真实的品牌与业务场景。',
    ], capabilities: ['内容策划', '短视频脚本', '账号运营', '摄影与后期', '数据复盘', 'AI 内容制作'],
  },
  contact: { email: '13868826077@163.com', resumePath: '/resume.pdf', note: '欢迎通过邮箱联系，或下载 PDF 简历了解更多经历。' },
} as const

export const allProjectSlugs = [
  ...Object.keys(portfolioData.caseStudies), 'student-film-projects',
  ...portfolioData.studentFilms.map((film) => film.slug), portfolioData.photography.slug,
]
