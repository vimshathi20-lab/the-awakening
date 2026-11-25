
import './QuestHistory.css'

const quests = [
  {
    number: '01',
    title: 'THE BEGINNING',
    subtitle: 'B.Tech Computer Science & Engineering',
    detail: 'Started my engineering journey at ACE Engineering College.',
    year: '2025 — 2029',
    type: 'EDUCATION'
  },
  {
    number: '02',
    title: '24-HOUR HACKATHON',
    subtitle: 'Team Leader · 4 Members',
    detail: 'Led a team working on an Interactive College Discovery & Decision Platform.',
    year: 'COLLEGE HACKATHON',
    type: 'LEADERSHIP'
  },
  {
    number: '03',
    title: 'MYSTERY ENGINE',
    subtitle: 'Java Interactive Detective Game',
    detail: 'Created an investigation game with interconnected cases, clues and evidence.',
    year: 'COMPLETED',
    type: 'PROJECT'
  },
  {
    number: '04',
    title: 'CMD.EXE',
    subtitle: 'Digital Playground',
    detail: 'Built an interactive Windows Command Prompt experience using batch scripting.',
    year: 'COMPLETED',
    type: 'PROJECT'
  }
]

function QuestHistory() {
  return (
    <section className="quest-history" id="journey">
      <p className="quest-eyebrow">04 / PLAYER JOURNEY</p>

      <h2>QUEST HISTORY<span>.</span></h2>

      <p className="quest-intro">
        Every challenge adds experience. Every project
        teaches something new.
      </p>

      <div className="quest-list">
        {quests.map((quest) => (
          <article className="quest-item" key={quest.number}>
            <div className="quest-marker">
              {quest.number}
            </div>

            <div className="quest-content">
              <span className="quest-type">{quest.type}</span>

              <h3>{quest.title}</h3>

              <h4>{quest.subtitle}</h4>

              <p>{quest.detail}</p>

              <span className="quest-year">{quest.year}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default QuestHistory
