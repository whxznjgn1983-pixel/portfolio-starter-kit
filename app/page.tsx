import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi！Welcome to Rae‘s PORTFOLIO
      </h1>
      <p>
       徐旻睿
       英国 University Of Westminster 27届本科毕业
      </p>
      <p className="mb-4">
       市场运营 / 内容策划方向
      </p>
      <p>
        曾负责中控技术产品线中控SCADA官方账号运营，完成20条视频制作，
        实现账号涨粉近1000，多条视频播放破万（最高2.5w+).
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
