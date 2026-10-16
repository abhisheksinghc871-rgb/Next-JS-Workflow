import TrekExplorer from '../../components/TrekExplorer';
import { treks } from '../../lib/treks';

export const metadata = { title: 'All treks' };

export default function Treks() {
  return (
    <div className="wrap block">
      <h1 className="page-h">All treks</h1>
      <TrekExplorer treks={treks} />
    </div>
  );
}
