'use client';
import { useState, useMemo } from 'react';
import TrekCard from './TrekCard';

const filters = ['All', 'Easy', 'Moderate', 'Hard'];

export default function TrekExplorer({ treks }) {
  const [level, setLevel] = useState('All');
  const [sort, setSort] = useState('altitude');

  const list = useMemo(() => {
    const l = treks.filter((t) => level === 'All' || t.difficulty === level);
    return [...l].sort((a, b) => (sort === 'days' ? a.days - b.days : a.altitude - b.altitude));
  }, [treks, level, sort]);

  return (
    <>
      <div className="toolbar">
        <div className="seg" role="group" aria-label="Difficulty">
          {filters.map((f) => (
            <button key={f} data-filter={f} className={level === f ? 'on' : ''} onClick={() => setLevel(f)}>{f}</button>
          ))}
        </div>
        <label className="sort">Sort by
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="altitude">Altitude</option>
            <option value="days">Duration</option>
          </select>
        </label>
      </div>
      <p className="muted" data-count>{list.length} {list.length === 1 ? 'trek' : 'treks'}</p>
      <div className="grid">{list.map((t) => <TrekCard key={t.slug} t={t} />)}</div>
    </>
  );
}
