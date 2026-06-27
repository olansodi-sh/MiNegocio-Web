import ModulePage from '../../../shared/components/ModulePage';
import { Barcode } from 'lucide-react';

export default function SeriesPage() {
  return (
    <ModulePage icon={<Barcode size={28} />} title="Series" description="Control por serial" />
  );
}
