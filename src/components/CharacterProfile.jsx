import './CharacterProfile.css'
import profilePhoto from '../assets/profile-photo.jpg'
import { useState } from 'react'
function CharacterProfile() {npm.cmd run build
  const skills = [
    'Java',
    'C++',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'FastAPI',
    'Node.js',
    'MongoDB',
    'Git & GitHub',
  ]

  return (
    <section className="character-section" id="about">

      <div className="section-heading">
        <p className="eyebrow">01 / CHARACTER DATABASE</p>
        <h2>PLAYER PROFILE</h2>
        <p>Identity verified. Developer journey in progress.</p>
      </div>

      <div className="character-layout">

        <div className="character-identity">
          <div className="profile-avatar">
  <button
  className="profile-avatar"
  onClick={() => setPhotoOpen(true)}
  aria-label="Enlarge profile photo"
>
  <img
    src={profilePhoto}
    alt="Vimshathi Odnam"
    className="profile-photo"
  />
  <span className="photo-hint">VIEW PHOTO ↗</span>
</button>

{photoOpen && (
  <div
    className="photo-modal"
    onClick={() => setPhotoOpen(false)}
  >
    <button
      className="photo-close"
      onClick={() => setPhotoOpen(false)}
      aria-label="Close enlarged photo"
    >
      ×
    </button>

    <img
      src={profilePhoto}
      alt="Vimshathi Odnam enlarged"
      className="enlarged-photo"
      onClick={(e) => e.stopPropagation()}
    />

    <p>VIMSHATHI ODNAM</p>
  </div>
)}
</div>

          <h3>VIMSHATHI ODNAM</h3>
          <p className="profile-role">
            ASPIRING SOFTWARE DEVELOPER
          </p>

          <div className="profile-line"></div>

          <p className="profile-location">
            Hyderabad, Telangana, India
          </p>

          <p className="profile-education">
            ACE ENGINEERING COLLEGE
            <br />
            B.Tech — Computer Science & Engineering
            <br />
            2025–2029
          </p>

          <a
            className="profile-contact"
            href="mailto:vimshathi20@gmail.com"
          >
            CONTACT ME ↗
          </a>
        </div>

        <div className="character-details">

          <div className="profile-block">
            <p className="eyebrow">PLAYER INTRODUCTION</p>

            <h3>THE JOURNEY BEGINS.</h3>

            <p>
              I'm a second-year Computer Science and Engineering
              student interested in software development,
              problem-solving and emerging technologies.

              I enjoy turning ideas into practical projects,
              exploring new technologies and collaborating
              with teams to solve problems.
            </p>
          </div>

          <div className="profile-block">
            <p className="eyebrow">UNLOCKED ABILITIES</p>

            <div className="skill-tags">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="profile-block">
            <p className="eyebrow">SPECIAL INTERESTS</p>

            <div className="interest-tags">
              <span>Software Engineering</span>
              <span>Cybersecurity</span>
              <span>Digital Forensics</span>
              <span>Open Source</span>
            </div>
          </div>

          <div className="profile-block">
            <p className="eyebrow">EXTERNAL CONNECTIONS</p>

            <div className="social-links">
              <a
                href="https://github.com/vimshathi20-lab"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB ↗
              </a>
                            <a
                href="https://www.linkedin.com/in/vimshathi-odnam-0b0286386/"
                target="_blank"
                rel="noreferrer"
                >
                LINKEDIN ↗
                </a>
              <a href="mailto:vimshathi20@gmail.com">
                EMAIL ↗
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
  const [photoOpen, setPhotoOpen] = useState(false)
}

export default CharacterProfile
