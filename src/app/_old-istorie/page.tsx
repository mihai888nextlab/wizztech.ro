export const metadata = { title: 'WizzTech | Istorie' };

export default function IstoriePage() {
  return (
    <section id="history" className="section" data-num="01">
      <p className="section-label">01 — Background</p>
      <h2 className="section-title">Istoria Echipei</h2>
      <div className="section-divider"></div>
      <div className="history-content">
        <div className="history-text">
          <h3>Drumul către excelență</h3>
          <p>Povestea <strong>WizzTech</strong> a început în 2017 din dorința de a aplica practic noțiunile de fizică și informatică. Ceea ce a pornit ca un proiect restrâns a evoluat constant, ajungând astăzi o echipă de <strong>19 elevi</strong> dedicați inovației prin colaborare.</p>
          <p>Am obținut calificarea la <strong>etapa națională</strong> încă din primul sezon, performanță pe care am menținut-o constant prin calificări succesive. Parcursul nostru a fost marcat și de provocări, precum perioada pandemiei, care ne-a testat <strong>reziliența</strong> și a pregătit noile generații să preia ștafeta cu determinare.</p>
          <p>Pentru noi, <strong>robotica</strong> înseamnă soluții tehnice ingenioase și o echipă capabilă să le transforme în realitate. Ne concentrăm pe <strong>performanță</strong> și pe dezvoltarea continuă a fiecărui membru care face parte din universul nostru.</p>
        </div>
        <div className="history-line">
          <div className="history-item">
            <h4>2017 — Începutul</h4>
            <p>Echipa prinde viață din pasiunea pentru științe exacte.</p>
          </div>
          <div className="history-item">
            <h4>2019 — Naționala</h4>
            <p>Am reușit să ajungem la etapa națională FTC, un moment important pentru echipa noastră.</p>
          </div>
          <div className="history-item">
            <h4>2020–2022 — Continuitate</h4>
            <p>Chiar și în pandemie, am găsit soluții să rămânem activi și să nu pierdem echipa.</p>
          </div>
          <div className="history-item">
            <h4>Prezent — Evoluție</h4>
            <p>Continuăm să îmbunătățim robotul și să creștem nivelul performanței în fiecare sezon.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
