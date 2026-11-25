import Image from 'next/image';
import { SOCIALS } from '@/components/SocialIcons';

export const metadata = { title: 'Sponsori și contact' };

/**
 * [DE COMPLETAT] Formspree cere un ID de formular, nu o adresă de email.
 * Creează formularul pe formspree.io și înlocuiește valoarea de mai jos cu
 * endpoint-ul primit (arată ca https://formspree.io/f/abcdwxyz).
 * Până atunci, vizitatorii au varianta pe email de sub buton.
 */
const FORM_ENDPOINT = 'https://formspree.io/f/wizztechtm@gmail.com';

const TIERS = [
  {
    key: 'gold',
    label: 'Gold',
    logos: [
      { src: '/logo everseen.png', alt: 'Everseen' },
      { src: '/aumovio logo.png', alt: 'Aumovio' },
      { src: '/kimbal logo.png', alt: 'Kimball' },
    ],
  },
  { key: 'bronze', label: 'Bronze', logos: [{ src: '/leroy logo.png', alt: 'Leroy Merlin' }] },
  {
    key: 'partner',
    label: 'Parteneri',
    logos: [
      { src: '/moisil logo.png', alt: 'Liceul Teoretic Grigore Moisil' },
      { src: '/asociatia logo.png', alt: 'Asociația părinților' },
      { src: '/te miri ce logo.png', alt: 'Te miri ce' },
    ],
  },
] as const;

const PACKAGES = [
  { key: 'platinum', name: 'Platinum', price: 'peste 3000 €' },
  { key: 'gold', name: 'Gold', price: '1000–3000 €' },
  { key: 'silver', name: 'Silver', price: '500–1000 €' },
  { key: 'bronze', name: 'Bronze', price: 'sub 500 €' },
  { key: 'partner', name: 'Partener', price: 'servicii' },
] as const;

type PackageKey = (typeof PACKAGES)[number]['key'];

/** Each benefit lists the packages that include it. */
const BENEFITS: { label: string; in: PackageKey[] }[] = [
  { label: 'Mențiune în postări și story-uri', in: ['platinum', 'gold', 'silver', 'bronze', 'partner'] },
  { label: 'Logo pe flyere și postere', in: ['platinum', 'gold', 'silver', 'bronze', 'partner'] },
  { label: 'Logo pe robot', in: ['platinum', 'gold', 'silver', 'bronze', 'partner'] },
  { label: 'Logo pe echipamentul echipei', in: ['platinum', 'gold', 'silver', 'partner'] },
  { label: 'Roll-up la evenimente', in: ['platinum', 'gold', 'partner'] },
  { label: 'Materiale promoționale la evenimente', in: ['platinum', 'gold', 'partner'] },
  { label: 'Demonstrații cu robotul la cerere', in: ['platinum'] },
];

export default function SponsoriPage() {
  return (
    <>
      <section className="wrap page-head">
        <h1>Sponsori</h1>
        <p className="lead">
          Tot ce construim e posibil datorită celor care cred în noi. Mulțumim partenerilor care
          susțin echipa WizzTech.
        </p>
      </section>

      <section className="wrap" style={{ paddingBottom: 'var(--section-y)' }} aria-label="Sponsori actuali">
        {TIERS.map((tier) => (
          <div key={tier.key} className={`tier ${tier.key}`}>
            <h2>{tier.label}</h2>
            <ul className="tier-logos">
              {tier.logos.map((logo) => (
                <li key={logo.src}>
                  <Image src={logo.src} alt={logo.alt} width={400} height={200} sizes="240px" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="block block-dark" id="pachete">
        <div className="wrap">
          <h2 className="title">Devino sponsor</h2>
          <p className="lead">
            Sprijinul tău ne ajută să construim roboți mai buni și să ducem educația STEM mai departe.
            În schimb, brandul tău ajunge la elevi, părinți și pasionați de tehnologie.
          </p>

          <div className="table-scroll" role="region" aria-label="Pachete de sponsorizare" tabIndex={0}>
            <table className="packages">
              <colgroup>
                <col />
                {PACKAGES.map((p) => <col key={p.key} className={p.key === 'platinum' ? 'top' : undefined} />)}
              </colgroup>
              <thead>
                <tr>
                  <th scope="col"><span className="sr-only">Beneficiu</span></th>
                  {PACKAGES.map((p) => (
                    <th key={p.key} scope="col">
                      <span className="pk-name">{p.name}</span>
                      <span className="pk-price">{p.price}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {BENEFITS.map((b) => (
                  <tr key={b.label}>
                    <th scope="row">{b.label}</th>
                    {PACKAGES.map((p) => (
                      <td key={p.key}>
                        {b.in.includes(p.key) ? (
                          <>
                            <span className="yes" aria-hidden="true" />
                            <span className="sr-only">Inclus</span>
                          </>
                        ) : (
                          <span className="sr-only">Nu</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="block" id="contact">
        <div className="wrap contact-grid">
          <div>
            <h2 className="title">Contact</h2>
            <p className="lead">
              Vrei să ne sponsorizezi, să colaborăm sau să intri în echipă? Scrie-ne și îți răspundem
              cât de repede putem.
            </p>

            <ul className="contact-list">
              <li>
                <span className="k">Email</span>
                <a href="mailto:wizztechtm@gmail.com">wizztechtm@gmail.com</a>
              </li>
              <li>
                <span className="k">Telefon, Mihai Gorunescu</span>
                <a href="tel:+40757002002">+40 757 002 002</a>
              </li>
              <li>
                <span className="k">Adresă</span>
                <a
                  href="https://maps.google.com/?q=Calea+Bogdăneștilor+32A+Timișoara"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Calea Bogdăneștilor nr. 32A, Timișoara
                </a>
              </li>
            </ul>

            <div className="socials">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>

            <div className="map">
              <iframe
                title="Harta: Calea Bogdăneștilor 32A, Timișoara"
                src="https://www.google.com/maps?q=Calea%20Bogd%C4%83ne%C8%99tilor%2032A%2C%20Timi%C8%99oara&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form className="form" action={FORM_ENDPOINT} method="POST">
            <h3>Trimite-ne un mesaj</h3>

            <div className="field">
              <label htmlFor="contact-nume">
                Nume <span className="req" aria-hidden="true">*</span>
              </label>
              <input id="contact-nume" type="text" name="nume" autoComplete="name" required />
            </div>

            <div className="field">
              <label htmlFor="contact-email">
                Email <span className="req" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                name="_replyto"
                autoComplete="email"
                inputMode="email"
                aria-describedby="email-hint"
                required
              />
              <span id="email-hint" className="field-hint">Îți răspundem la această adresă.</span>
            </div>

            <div className="field">
              <label htmlFor="contact-subiect">Subiect</label>
              <input id="contact-subiect" type="text" name="subiect" placeholder="Sponsorizare, colaborare, înscriere" />
            </div>

            <div className="field">
              <label htmlFor="contact-mesaj">
                Mesaj <span className="req" aria-hidden="true">*</span>
              </label>
              <textarea id="contact-mesaj" name="mesaj" rows={6} required />
            </div>

            <button type="submit" className="btn">Trimite mesajul</button>

            <p className="form-note">
              Preferi emailul? Scrie-ne direct la <a href="mailto:wizztechtm@gmail.com">wizztechtm@gmail.com</a>.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
