import Link from 'next/link';
import { notFound } from 'next/navigation';
import { treks } from '../../../lib/treks';

export const dynamicParams = false; // sirf wahi pages jo build time par bane

export function generateStaticParams() {
  return treks.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = treks.find((x) => x.slug === slug);
  return t ? { title: t.name, description: t.summary } : {};
}

export default async function TrekPage({ params }) {
  const { slug } = await params;
  const t = treks.find((x) => x.slug === slug);
  if (!t) notFound();

  return (
    <article className="wrap block">
      <Link href="/treks/" className="back">&larr; All treks</Link>
      <span className={`pill ${t.difficulty.toLowerCase()}`}>{t.difficulty}</span>
      <h1 className="page-h">{t.name}</h1>
      <p className="lead">{t.summary}</p>

      <dl className="facts">
        <div><dt>Region</dt><dd>{t.region}</dd></div>
        <div><dt>Duration</dt><dd>{t.days} days</dd></div>
        <div><dt>Max altitude</dt><dd>{t.altitude.toLocaleString('en-IN')} m</dd></div>
        <div><dt>Best season</dt><dd>{t.seasons.join(', ')}</dd></div>
      </dl>

      <div className="two">
        <section>
          <h2>Highlights</h2>
          <ul className="plain">{t.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
        </section>
        <section>
          <h2>Day by day</h2>
          <ol className="days">{t.itinerary.map((d) => <li key={d}>{d}</li>)}</ol>
        </section>
      </div>

      <Link className="btn" href="/packing/">See the packing checklist</Link>
    </article>
  );
}
