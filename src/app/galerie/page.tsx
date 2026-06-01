export const metadata = { title: 'WizzTech | Galerie' };

const photos = [
  { src: '/2018.JPG', caption: '2017–2018 · RELIC RECOVERY' },
  { src: '/2019.JPG', caption: '2018–2019 · ROVER RUCKUS' },
  { src: '/2020.JPG', caption: '2019–2020 · SKYSTONE' },
  { src: '/2021.JPG', caption: '2020–2021 · ULTIMATE GOAL' },
  { src: '/2022.JPG', caption: '2021–2022 · FREIGHT FRENZY' },
  { src: '/2023.JPG', caption: '2022–2023 · POWERPLAY' },
  { src: '/2024.JPG', caption: '2023–2024 · CENTERSTAGE' },
  { src: '/2025.JPG', caption: '2024–2025 · INTO THE DEEP' },
  { src: '/2026.JPEG', caption: '2025–2026 · DECODE' },
];

export default function GaleriePage() {
  return (
    <section id="gallery" className="section" data-num="06">
      <p className="section-label">06 — Archive</p>
      <h2 className="section-title">Galerie</h2>
      <div className="section-divider"></div>
      <div className="gallery-grid">
        {photos.map((p) => (
          <div key={p.caption} className="gallery-item">
            <div className="gallery-img-wrap">
              <img src={p.src} alt={p.caption} />
              <div className="gallery-overlay"></div>
            </div>
            <div className="gallery-caption">{p.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
