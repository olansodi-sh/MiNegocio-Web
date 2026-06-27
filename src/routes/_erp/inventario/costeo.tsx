import ModulePage from '../../../shared/components/ModulePage';
import { Calculator } from 'lucide-react';

export default function CosteoPage() {
  return (
    <ModulePage icon={<Calculator size={28} />} title="Costeo" description="Control del costo promedio" />
  );
}
