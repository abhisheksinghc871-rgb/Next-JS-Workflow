'use client';
import { useState } from 'react';

export default function PackingList({ groups }) {
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  const [done, setDone] = useState({});
  const count = Object.values(done).filter(Boolean).length;

  return (
    <>
      <div className="progress">
        <div className="alt big"><span style={{ width: `${(count / total) * 100}%` }} /></div>
        <p data-packed><b>{count}</b> of {total} packed</p>
      </div>
      <div className="grid">
        {groups.map((g) => (
          <section className="card" key={g.group}>
            <h2>{g.group}</h2>
            <ul className="checks">
              {g.items.map((item) => (
                <li key={item}>
                  <label>
                    <input type="checkbox" checked={!!done[item]} onChange={(e) => setDone({ ...done, [item]: e.target.checked })} />
                    <span>{item}</span>
                  </label>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
