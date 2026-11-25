
import './ProjectVault.css'

const projects = [
  {
    number: '01',
    name: 'MYSTERY ENGINE',
    type: 'JAVA / GAME DEVELOPMENT',
    description: 'An interactive detective game featuring investigation cases, clues, suspects and evidence.',
    tech: 'Java · Swing · AWT',
    status: 'COMPLETED',
    link: 'https://github.com/vimshathi20-lab/MYSTERY--ENGINE001'
  },
  {
    number: '02',
    name: 'SAFECONVERT',
    type: 'WEB DEVELOPMENT',
    description: 'A privacy-focused tool for converting documents and combining photos into PDFs.',
    tech: 'HTML · CSS · JavaScript',
    status: 'PROJECT',
    link: 'https://github.com/vimshathi20-lab/SaveConvert'
  },
  {
    number: '03',
    name: 'VOXSHIELD',
    type: 'CYBERSECURITY / SIH',
    description: 'A group project exploring AI-generated voice detection and voice authenticity assessment.',
    tech: 'AI · Audio Analysis · Research',
    status: 'GROUP PROJECT',
    link: ''
  },
  {
    number: '04',
    name: 'CMD.EXE',
    type: 'COMMAND LINE / BATCH',
    description: 'An interactive Windows Command Prompt digital playground.',
    tech: 'Windows CMD · Batch',
    status: 'COMPLETED',
    link: 'https://github.com/vimshathi20-lab/CMD.exe-Digital-Playground'
  }
]

function ProjectVault() {
  return (
    <section className="project-vault" id="projects">
      <p className="vault-eyebrow">03 / CREATION ARCHIVE</p>
      <h2>PROJECT VAULT<span>.</span></h2>
      <p className="vault-subtitle">
        Things I've explored, built and learned.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <span className="project-number">
              PROJECT / {project.number}
            </span>

            <h3>{project.name}</h3>

            <p className="project-type">{project.type}</p>

            <p className="project-description">
              {project.description}
            </p>

            <p className="project-tech">{project.tech}</p>

            <span className="project-status">{project.status}</span>

            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                VIEW PROJECT ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectVault
