import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: { default: 'Trailhead | Himalayan Trek Guide', template: '%s | Trailhead' },
  description: 'A simple guide to popular Himalayan treks: difficulty, altitude, best season and day-by-day plans.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&family=Sora:wght@600;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <footer className="site-footer">
          <div className="wrap">Trailhead is a demo guide. Check weather, permits and local advice before any trek.</div>
        </footer>
      </body>
    </html>
  );
}
