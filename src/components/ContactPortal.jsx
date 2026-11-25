
import './ContactPortal.css'

function ContactPortal() {
  return (
    <section className="contact-portal" id="contact">

      <p className="contact-eyebrow">
        05 / ESTABLISH CONNECTION
      </p>

      <h2>
        LET'S BUILD
        <span> SOMETHING.</span>
      </h2>

      <p className="contact-description">
        Have an interesting idea, opportunity or project?
        Let's connect and create something meaningful.
      </p>

      <div className="contact-card">

        <div className="contact-status">
          <span className="contact-dot"></span>
          AVAILABLE FOR CONNECTIONS
        </div>

        <h3>INITIATE CONTACT</h3>

        <a
          href="mailto:vimshathi20@gmail.com"
          className="contact-email"
        >
          vimshathi20@gmail.com ↗
        </a>

        <div className="contact-links">

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

        </div>

        <a
          href="/Vimshathi_Odnam_CV.pdf"
          download
          className="cv-button"
        >
          DOWNLOAD CV ↓
        </a>

      </div>

      <p className="contact-footer">
        CONNECTION REQUEST: OPEN
      </p>

    </section>
  )
}

export default ContactPortal
