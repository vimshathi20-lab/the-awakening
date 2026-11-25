
import ContactPortal from './components/ContactPortal'
import ProjectVault from './components/ProjectVault'
import QuestHistory from './components/QuestHistory'
import SkillTree from './components/SkillTree'
import CharacterProfile from './components/CharacterProfile'
import './App.css'

function App() {
  return (
    <main className="awakening">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="brand">
          THE <span>AWAKENING</span>
        </a>

       <div className="nav-links">
  <a href="#home">HOME</a>
  <a href="#about">ABOUT</a>
  <a href="#skills">SKILLS</a>
  <a href="#projects">PROJECTS</a>
  <a href="#journey">JOURNEY</a>
  <a href="#contact">CONTACT</a>
</div>

        <span className="system-status">
          <span className="status-dot"></span>
          SYSTEM ONLINE
        </span>
      </nav>

      {/* Hero section */}
      <section className="hero-section" id="home">

        <div className="hero-content">
          <p className="eyebrow">
            &lt; SYSTEM INITIALIZED / PORTFOLIO 001 &gt;
          </p>

          <h1>
            THE WORLD IS
            <span> MY NEXT QUEST.</span>
          </h1>

          <p className="intro">
            An aspiring developer exploring technology,
            solving problems and transforming ideas into
            meaningful digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="primary-btn">
              ENTER MY WORLD ↗
            </a>

            <a href="#projects" className="secondary-btn">
              VIEW PROJECTS
            </a>
          </div>

          <p className="tech-line">
            JAVA <span>◆</span> C++ <span>◆</span> WEB DEVELOPMENT
          </p>
        </div>

        {/* Player status card */}
        <div className="status-card">
          <div className="card-top">
            <span>PLAYER STATUS</span>
            <span>NO. 001</span>
          </div>

          <div className="character-symbol">✦</div>

          <h2>THE DEVELOPER</h2>
          <p className="rank">CLASS: CREATOR</p>

          <div className="divider"></div>

          <div className="stat-row">
            <span>LEVEL</span>
            <strong>02 / RISING</strong>
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <div className="stat-boxes">
            <div>
              <small>PRIMARY SKILLS</small>
              <strong>Java / C++</strong>
            </div>

            <div>
              <small>CURRENT QUEST</small>
              <strong>Build & Ship</strong>
            </div>
          </div>

          <p className="card-footer">
            STATUS: AWAKENING IN PROGRESS
          </p>
        </div>

      </section>

      {/* About */}
      <CharacterProfile />

      {/* Skills */}
      <SkillTree />

      {/* Projects */}
      <ProjectVault />

      {/* Quest History */}
      <QuestHistory />

      {/* Footer */}
     <ContactPortal />

    <ContactPortal />
<footer>
  THE AWAKENING <span>© 2026</span>
</footer>

    </main>
  )
}

export default App
