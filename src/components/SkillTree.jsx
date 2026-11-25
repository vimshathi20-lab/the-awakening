
import { useState } from 'react'
import './SkillTree.css'

const skills = [
  {
    name: 'Java',
    category: 'Programming',
    status: 'Learning & building',
    description: 'Object-oriented programming, Java fundamentals and GUI projects.',
    color: '#65dfff'
  },
  {
    name: 'C++',
    category: 'Programming',
    status: 'Learning & building',
    description: 'Programming fundamentals and problem-solving.',
    color: '#b69aff'
  },
  {
    name: 'HTML & CSS',
    category: 'Web Development',
    status: 'Building projects',
    description: 'Creating structured, responsive and styled web pages.',
    color: '#65dfff'
  },
  {
    name: 'JavaScript',
    category: 'Web Development',
    status: 'Learning',
    description: 'Learning interactive web development and core concepts.',
    color: '#b69aff'
  },
  {
    name: 'React',
    category: 'Framework',
    status: 'Exploring',
    description: 'Building component-based user interfaces.',
    color: '#65dfff'
  },
  {
    name: 'Cybersecurity',
    category: 'Special Interest',
    status: 'Exploring',
    description: 'Exploring cybersecurity and digital forensics.',
    color: '#b69aff'
  }
]

function SkillTree() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="skill-tree" id="skills">
      <p className="skill-eyebrow">PLAYER DEVELOPMENT</p>
      <h2>SKILL TREE<span>.</span></h2>
      <p className="skill-subtitle">
        Every skill is another ability unlocked.
      </p>

      <div className="skill-grid">
        {skills.map((skill, index) => (
          <button
            className={`skill-card ${selected?.name === skill.name ? 'active' : ''}`}
            key={skill.name}
            onClick={() => setSelected(skill)}
            style={{ '--skill-color': skill.color }}
          >
            <span className="skill-number">
              ABILITY 0{index + 1}
            </span>
            <h3>{skill.name}</h3>
            <p>{skill.category}</p>
            <span className="skill-open">VIEW ABILITY ↗</span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="skill-details">
          <button
            className="skill-close"
            onClick={() => setSelected(null)}
          >
            CLOSE ×
          </button>
          <p>ABILITY DETAILS</p>
          <h3>{selected.name}</h3>
          <span>{selected.status}</span>
          <p>{selected.description}</p>
        </div>
      )}
    </section>
  )
}

export default SkillTree
