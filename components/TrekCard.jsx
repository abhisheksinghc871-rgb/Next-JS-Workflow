import Link from 'next/link';

export default function TrekCard({ t }) {
  return (
    <Link href={`/treks/${t.slug}/`} className="card trek" data-difficulty={t.difficulty}>
      <span className={`pill ${t.difficulty.toLowerCase()}`}>{t.difficulty}</span>
      <h3>{t.name}</h3>
      <p className="muted">{t.region}</p>
      <div className="alt" title={`${t.altitude} m`}><span style={{ width: `${t.altitude / 50}%` }} /></div>
      <p className="meta"><b>{t.altitude.toLocaleString('en-IN')} m</b><span>{t.days} days</span></p>
    </Link>
  );
}
