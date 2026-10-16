import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="wrap block">
      <h1 className="page-h">Wrong trail</h1>
      <p className="lead">This page does not exist.</p>
      <Link className="btn" href="/">Back home</Link>
    </div>
  );
}
