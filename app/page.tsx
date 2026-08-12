export default function Home() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "80px 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          gap: "28px",
          marginBottom: "100px",
          fontSize: "14px",
        }}
      >
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Hero */}
      <section id="home" style={{ marginBottom: "120px" }}>
        <p
          style={{
            fontSize: "14px",
            marginBottom: "20px",
            opacity: 0.6,
          }}
        >
          CONTENT OPERATIONS · DIGITAL MEDIA
        </p>

        <h1
          style={{
            fontSize: "56px",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Hi！I‘m Rae.
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: 1.5,
            marginBottom: "24px",
          }}
        >
          市场运营 / 内容策划 / 短视频内容
        </p>

        <p
          style={{
            maxWidth: "680px",
            fontSize: "17px",
            lineHeight: 1.8,
            opacity: 0.75,
          }}
        >
          我是一名就读于英国 University of Westminster
          的电视节目制作学生，关注短视频内容策划、账号运营与数字内容生产。
          曾负责中控科技 SCADA 官方账号的内容运营与视频制作。
        </p>

        {/* Key Numbers */}
        <div
          style={{
            display: "flex",
            gap: "60px",
            marginTop: "55px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontSize: "36px", fontWeight: "bold" }}>
              20+
            </div>
            <div style={{ opacity: 0.6, marginTop: "8px" }}>
              Videos Produced
            </div>
          </div>

          <div>
            <div style={{ fontSize: "36px", fontWeight: "bold" }}>
              +1,000
            </div>
            <div style={{ opacity: 0.6, marginTop: "8px" }}>
              Followers Growth
            </div>
          </div>

          <div>
            <div style={{ fontSize: "36px", fontWeight: "bold" }}>
              25K+
            </div>
            <div style={{ opacity: 0.6, marginTop: "8px" }}>
              Highest Views
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ marginBottom: "120px" }}>
        <p
          style={{
            fontSize: "14px",
            opacity: 0.6,
            marginBottom: "15px",
          }}
        >
          SELECTED PROJECTS
        </p>

        <h2
          style={{
            fontSize: "36px",
            marginBottom: "50px",
          }}
        >
          Projects
        </h2>

        {/* Project 01 */}
        <article
          style={{
            borderTop: "1px solid #333",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          <p style={{ opacity: 0.5, fontSize: "14px" }}>01</p>

          <h3
            style={{
              fontSize: "28px",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            SCADA 官方账号内容运营
          </h3>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              opacity: 0.75,
              maxWidth: "700px",
            }}
          >
            负责中控科技 SCADA 官方账号的短视频内容运营，
            参与选题、文案、拍摄、剪辑对接、封面制作、发布及数据复盘。
            在账号数据低迷阶段参与分析内容问题并提出优化策略。
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "25px",
            }}
          >
            <span>Content Strategy</span>
            <span>Short Video</span>
            <span>Account Operation</span>
            <span>AI Content</span>
          </div>

          <div style={{ marginTop: "30px" }}>
            <strong>20+ videos</strong>
            <br />
            <strong>Nearly 1,000 followers gained</strong>
            <br />
            <strong>25K+ highest views</strong>
          </div>
        </article>

        {/* Project 02 */}
        <article
          style={{
            borderTop: "1px solid #333",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          <p style={{ opacity: 0.5, fontSize: "14px" }}>02</p>

          <h3
            style={{
              fontSize: "28px",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            AI Video Content Experiment
          </h3>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              opacity: 0.75,
              maxWidth: "700px",
            }}
          >
            在实习期间参与 AI 视频内容探索，完成选题、脚本、
            AI 生成与后期包装，尝试将 AI 工具应用于工业领域的内容生产。
          </p>

          <div style={{ marginTop: "25px" }}>
            <span>AI Video · Scriptwriting · Editing</span>
          </div>
        </article>
      </section>

      {/* About */}
      <section id="about" style={{ marginBottom: "120px" }}>
        <p
          style={{
            fontSize: "14px",
            opacity: 0.6,
            marginBottom: "15px",
          }}
        >
          ABOUT ME
        </p>

        <h2 style={{ fontSize: "36px", marginBottom: "25px" }}>
          About
        </h2>

        <p
          style={{
            maxWidth: "700px",
            fontSize: "17px",
            lineHeight: 1.9,
            opacity: 0.75,
          }}
        >
          我目前就读于英国 University of Westminster
          电视节目制作专业。我的兴趣逐渐从单纯的视频制作，
          延伸到内容策划、账号运营以及数字内容生产。
          我希望继续积累真实商业项目经验，并探索 AI
          与内容生产结合的可能性。
        </p>
      </section>

      {/* Contact */}
      <section id="contact">
        <p
          style={{
            fontSize: "14px",
            opacity: 0.6,
            marginBottom: "15px",
          }}
        >
          CONTACT
        </p>

        <h2 style={{ fontSize: "36px", marginBottom: "25px" }}>
          Let's work together.
        </h2>

        <p style={{ opacity: 0.7 }}>
          Email: 13868826077@163.com
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          marginTop: "100px",
          paddingTop: "30px",
          borderTop: "1px solid #333",
          fontSize: "13px",
          opacity: 0.5,
        }}
      >
        © 2026 Rae
      </footer>
    </main>
  );
}
