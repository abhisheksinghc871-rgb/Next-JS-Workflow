'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/treks/', label: 'Treks' },
  { href: '/packing/', label: 'Packing' },
];

export default function Header() {
  const path = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const active = (h) => (h === '/' ? path === '/' : path.startsWith(h));

  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link href="/" className="logo"><span className="peak" aria-hidden="true">▲</span> Trailhead</Link>
        <button className="menu-btn" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
        <nav className={open ? 'open' : ''} aria-label="Main" onClick={() => setOpen(false)}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={active(l.href) ? 'active' : ''}>{l.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
