export type Project = {
  id: string
  index: string
  category: string
  status: string
  eyebrow: string
  title: string
  summary: string
  metrics: Array<{ label: string; value: string }>
  sections: Array<{ title: string; content: string }>
  tags: string[]
  image: string | null
  imageAlt: string
  expectedImages: string[]
}

// 修改网站文案、数字、邮箱和素材路径时，优先编辑本文件。
// 项目图片上传至 public/projects 对应目录后，将 image 从 null 改为图片路径即可。
export const portfolioData = {
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#resume' },
  ],
  profile: {
    name: '徐旻睿',
    englishName: 'XUMINRUI',
    university: 'University of Westminster',
    degree: 'BA Television Production',
    graduation: '2027届',
    availability: '2027 CAMPUS RECRUITMENT · OPEN TO OPPORTUNITIES',
    roles: ['内容运营', '品牌内容运营', '短视频策划'],
    intro:
      '从电视节目制作训练出发，将选题、叙事与制作能力延伸到品牌账号和数字内容场景。关注内容如何被看见、被理解，并在真实执行中持续复盘。',
  },
  stats: [
    { value: '24', label: '条视频', note: '已参与制作与发布' },
    { value: '≈1,200', label: '新增粉丝', note: '账号阶段性累计结果' },
    { value: '25,000', label: '最高播放', note: '单条视频最高播放约值' },
  ],
  projects: [
    {
      id: 'scada-account',
      index: '01',
      category: 'ACCOUNT OPERATION',
      status: 'COMPLETED',
      eyebrow: '中控技术 · 中控 SCADA 官方账号',
      title: '从阶段性低迷，到建立可持续的内容执行闭环',
      summary:
        '参与中控 SCADA 官方账号的短视频内容运营，覆盖从选题、文案到拍摄、剪辑协同、封面、发布和数据复盘的完整流程。',
      metrics: [
        { label: '发布内容', value: '24 条' },
        { label: '新增粉丝', value: '约 1,200' },
        { label: '最高播放', value: '约 2.5 万' },
      ],
      sections: [
        { title: '背景', content: '项目发生于官方账号阶段性表现低迷期间，任务重点是持续产出可发布内容，并通过数据反馈识别后续调整方向。' },
        { title: '职责', content: '参与选题、文案、拍摄、剪辑对接、封面制作、内容发布与数据复盘；在多人协作中推进内容从想法到上线。' },
        { title: '问题与方案', content: '围绕账号低迷现象进行内容层面的排查，以“问题观察—选题与脚本—制作发布—数据记录—复盘调整”作为工作路径。未将任何单一动作与增长结果建立未经验证的因果关系。' },
        { title: '实际执行', content: '按内容节点推进脚本与素材准备，协同拍摄和剪辑，统一封面与发布信息，并在发布后记录表现，为下一轮选题提供参考。' },
        { title: '成果与复盘', content: '阶段内参与完成并发布 24 条视频，账号新增粉丝约 1,200，单条最高播放约 2.5 万。以上为阶段性结果汇总，不声称由某一策略单独造成。' },
      ],
      tags: ['内容策略', '账号运营', '短视频', '文案', '数据复盘'],
      image: null,
      imageAlt: '中控 SCADA 官方账号运营项目截图',
      expectedImages: ['cover.webp', 'account-before.webp', 'result-dashboard.webp'],
    },
    {
      id: 'ai-industrial-video',
      index: '02',
      category: 'AI CONTENT PRODUCTION',
      status: 'COMPLETED',
      eyebrow: 'AI 工业内容实验',
      title: '9 条 AI 工业宣传视频的内容制作',
      summary: '围绕工业传播场景参与 9 条 AI 视频的内容制作，将选题、脚本、生成素材与后期包装衔接为可交付的视频内容。',
      metrics: [{ label: '完成内容', value: '9 条' }],
      sections: [
        { title: '制作范围', content: '参与选题、脚本撰写、AI 生成素材与后期包装，探索 AI 工具在工业宣传视频制作流程中的应用。' },
        { title: '呈现说明', content: '当前仅展示已确认的制作数量与工作范围；具体画面、工具链及传播数据将在真实素材补充后更新。' },
      ],
      tags: ['AI 视频', '脚本', '内容制作', '后期包装'],
      image: null,
      imageAlt: 'AI 工业宣传视频画面',
      expectedImages: ['cover.webp', 'storyboard.webp', 'video-stills.webp'],
    },
    {
      id: 'film-documentary',
      index: '03',
      category: 'FILM & DOCUMENTARY',
      status: 'MATERIAL PENDING',
      eyebrow: 'University of Westminster · Student Work',
      title: '影视与纪录片学生作品',
      summary: '用于补充课程短片、纪录片与团队制作项目。当前尚未提供可公开素材，因此仅保留结构化占位。',
      metrics: [],
      sections: [
        { title: '待补充内容', content: '建议后续填写片名、创作背景、本人角色、制作周期、关键职责，并上传剧照或幕后工作照。' },
      ],
      tags: ['影视制作', '纪录片', '团队协作'],
      image: null,
      imageAlt: '影视与纪录片学生作品剧照',
      expectedImages: ['film-still-01.webp', 'film-still-02.webp', 'behind-the-scenes.webp'],
    },
    {
      id: 'independent-photography',
      index: '04',
      category: 'INDEPENDENT SERVICE',
      status: 'COMPLETED',
      eyebrow: '独立摄影服务',
      title: '从沟通需求到交付成片的独立服务实践',
      summary: '累计完成约 25 单独立摄影服务，独立处理前期沟通、现场执行与后期交付。图片将在获得可公开使用的素材后补充。',
      metrics: [{ label: '累计订单', value: '约 25 单' }],
      sections: [
        { title: '工作范围', content: '根据客户需求推进拍摄前沟通、现场执行、选片与后期交付，积累面向真实需求的服务经验。' },
        { title: '素材说明', content: '涉及客户肖像与授权，当前不使用虚构图片代替；待确认公开许可后再上传作品。' },
      ],
      tags: ['客户沟通', '摄影', '现场执行', '后期交付'],
      image: null,
      imageAlt: '独立摄影服务作品',
      expectedImages: ['portfolio-01.webp', 'portfolio-02.webp', 'portfolio-03.webp'],
    },
  ] satisfies Project[],
  experience: {
    period: '时间待补充',
    company: '中控技术',
    role: '中控 SCADA 官方账号内容运营与视频制作实践',
    summary: '在工业品牌内容场景中，参与短视频从策划到发布的完整工作流，并尝试将 AI 工具用于内容生产。网站暂不添加未经确认的岗位名称、日期或业务归因。',
    workflow: ['识别账号与内容问题', '形成选题与脚本', '推进拍摄与制作协同', '完成包装、发布与记录', '基于数据进行内容复盘'],
  },
  about: {
    paragraphs: [
      '现就读于 University of Westminster BA Television Production，2027 届。电视制作训练让我熟悉从创意到成片的流程，也让我更关注内容背后的受众、叙事和传播。',
      '求职方向为内容运营、品牌内容运营、新媒体运营与市场运营。希望把内容制作能力、项目执行力和对平台表达的敏感度，放进真实的品牌与业务场景。',
    ],
    capabilities: ['内容策划', '短视频脚本', '账号运营', '拍摄与剪辑协同', '数据复盘', 'AI 内容制作'],
  },
  contact: {
    email: '13868826077@163.com',
    resumePath: '/resume.pdf',
    note: '欢迎通过邮箱联系，或下载 PDF 简历了解更多经历。',
  },
}
