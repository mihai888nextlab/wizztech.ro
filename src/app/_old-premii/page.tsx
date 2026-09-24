export const metadata = { title: 'WizzTech | Premii' };

export default function PremiiPage() {
  return (
    <section id="awards" className="section" data-num="03">
      <p className="section-label">03 — Achievements</p>
      <h2 className="section-title">Premiile Noastre</h2>
      <div className="section-divider"></div>
      <div className="awards-showcase">

        <div className="award-row">
          <div className="award-img-cell">
            <img src="/motivate2025.PNG" alt="MOTIVATE AWARD 3rd place" />
          </div>
          <div className="award-info-cell">
            <span className="award-tag">Locul III · 2025</span>
            <h3 className="award-title">Motivate Award</h3>
            <p className="award-desc">Acest premiu celebrează spiritul echipei noastre de a face robotica cunoscută. Recunoaștere pentru eforturile de recrutare, outreach și impactul pozitiv asupra comunității STEM prin promovarea valorilor FIRST.</p>
          </div>
        </div>

        <div className="award-row">
          <div className="award-img-cell">
            <img src="/specialawardaeroport.PNG" alt="Special Award" />
          </div>
          <div className="award-info-cell">
            <span className="award-tag">Special Award</span>
            <h3 className="award-title">Expoziția Traian Vuia</h3>
            <p className="award-desc">O distincție specială ce subliniază viziunea noastră tehnologică și spiritul inovator. Oferit în cadrul prestigioasei Expoziții Internaționale de Invenții și Inovații «Traian Vuia», onorează soluțiile unice implementate pe robotul nostru.</p>
          </div>
        </div>

        <div className="award-row">
          <div className="award-img-cell">
            <img src="/motivate2019.PNG" alt="MOTIVATE AWARD 3rd place" />
          </div>
          <div className="award-info-cell">
            <span className="award-tag">Locul III · 2019</span>
            <h3 className="award-title">Motivate Award</h3>
            <p className="award-desc">Acest premiu reflectă efortul nostru de a duce robotica mai departe în comunitate. Este o recunoaștere a muncii depuse în recrutare și outreach, evidențiind impactul pe care l-am avut prin promovarea valorilor FIRST și a educației STEM.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
