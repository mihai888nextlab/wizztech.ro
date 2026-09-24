export const metadata = { title: 'WizzTech | Contact' };

export default function ContactPage() {
  return (
    <section id="contact" className="section" data-num="07">
      <p className="section-label">07 — Get in touch</p>
      <h2 className="section-title">Contactează-ne</h2>
      <div className="section-divider"></div>
      <div className="contact-layout">
        <div className="contact-info-cell">
          <h3>Discover WizzTech</h3>
          <a href="https://instagram.com/wizztech.tm" target="_blank" rel="noopener noreferrer" className="contact-item">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="contact-icon" alt="Insta" />
            <span className="contact-text">wizztech.tm</span>
          </a>
          <a href="https://tiktok.com/@wizztech_tm" target="_blank" rel="noopener noreferrer" className="contact-item">
            <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" className="contact-icon" alt="TikTok" />
            <span className="contact-text">wizztech_tm</span>
          </a>
          <a href="https://www.facebook.com/wizztechtm/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="contact-icon" alt="FB" />
            <span className="contact-text">WizzTech</span>
          </a>
          <a href="https://youtube.com/@wizztech2623" target="_blank" rel="noopener noreferrer" className="contact-item">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" className="contact-icon" alt="YT" />
            <span className="contact-text">@wizztech2623</span>
          </a>
          <a href="https://www.linkedin.com/company/wizztechtm/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="contact-icon" alt="LinkedIn" />
            <span className="contact-text">WizzTech</span>
          </a>
          <div className="contact-item">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" className="contact-icon" alt="Mail" />
            <span className="contact-text">wizztechtm@gmail.com</span>
          </div>
          <div className="contact-item">
            <img src="https://cdn-icons-png.flaticon.com/512/455/455705.png" className="contact-icon" alt="Phone" />
            <span className="contact-text">Mihai Gorunescu (+40 757 002 002)</span>
          </div>
          <div className="contact-item">
            <img src="https://cdn-icons-png.flaticon.com/512/484/484167.png" className="contact-icon" alt="Map" />
            <span className="contact-text">Calea Bogdăneștilor nr.32A, Timișoara</span>
          </div>
        </div>

        <div className="contact-form-cell">
          <h3>Trimite-ne un mesaj</h3>
          <form action="https://formspree.io/f/wizztechtm@gmail.com" method="POST">
            <input type="text" name="nume" placeholder="Nume complet" required />
            <input type="email" name="_replyto" placeholder="Email" required />
            <textarea name="mesaj" rows={6} placeholder="Mesajul tau..." required></textarea>
            <button type="submit" className="btn-submit">Trimite Mesaj</button>
          </form>
        </div>
      </div>
    </section>
  );
}
