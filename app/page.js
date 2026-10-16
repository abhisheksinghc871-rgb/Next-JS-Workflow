import Link from 'next/link';
import TrekCard from '../components/TrekCard';
import { treks, seasons } from '../lib/treks';

export default function Home() {
  const featured = treks.filter((t) => ['kedarkantha', 'hampta-pass', 'roopkund'].includes(t.slug));
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>Walk higher. Plan smarter.</h1>
          <p>Six classic Himalayan treks, with honest difficulty ratings, altitude, best seasons and day-by-day plans.</p>
          <Link className="btn" href="/treks/">Explore treks</Link>
        </div>
        <svg className="ridge" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden="true">
          <path fill="#cfe3d6" d="M0 300V170l120-60 100 50 140-100 120 90 120-60 160 80 140-90 140 70 160-50v220z" />
          <path fill="#7fb08f" d="M0 300V220l150-70 130 60 140-80 140 90 160-70 160 80 160-70 160 60v130z" />
          <path fill="#1f5e3b" d="M0 300v-50l200-50 160 50 200-60 200 65 220-50 220 45v50z" />
        </svg>
      </section>

      <section className="wrap block">
        <h2>Popular right now</h2>
        <div className="grid">{featured.map((t) => <TrekCard key={t.slug} t={t} />)}</div>
      </section>

      <section className="wrap block">
        <h2>Pick by season</h2>
        <div className="grid seasons">
          {seasons.map((s) => (
            <div className="card" key={s.name}>
              <h3>{s.name}</h3>
              <p className="muted">{s.months}</p>
              <ul className="plain">
                {treks.filter((t) => t.seasons.includes(s.name)).map((t) => (
                  <li key={t.slug}><Link href={`/treks/${t.slug}/`}>{t.name}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
