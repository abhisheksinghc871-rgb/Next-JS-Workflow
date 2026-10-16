import PackingList from '../../components/PackingList';
import { packing } from '../../lib/treks';

export const metadata = { title: 'Packing checklist' };

export default function Packing() {
  return (
    <div className="wrap block">
      <h1 className="page-h">Packing checklist</h1>
      <p className="lead">Tick items as you pack. A good rule: if you doubt you need it, leave it behind.</p>
      <PackingList groups={packing} />
    </div>
  );
}
