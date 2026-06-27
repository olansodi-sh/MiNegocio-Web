import ModulePage from '../../../shared/components/ModulePage';
import { BarChart3 } from 'lucide-react';

export default function ReporteInventarioPage() {
  return <ModulePage icon={<BarChart3 size={28} />} title="Reportes de Inventario" description="Existencias, kardex, rotación, agotados" />;
}
