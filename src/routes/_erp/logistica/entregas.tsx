import ModulePage from '../../../shared/components/ModulePage';
import { PackageCheck } from 'lucide-react';

export default function EntregasPage() {
  return <ModulePage icon={<PackageCheck size={28} />} title="Entregas" description="Control de entregas" />;
}
