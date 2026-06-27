import ModulePage from '../../../shared/components/ModulePage';
import { Banknote } from 'lucide-react';

export default function ReporteCajaPage() {
  return <ModulePage icon={<Banknote size={28} />} title="Reportes de Caja" description="Aperturas, cierres, arqueos" />;
}
