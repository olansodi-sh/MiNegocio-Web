import ModulePage from '../../../shared/components/ModulePage';
import { BarChart3 } from 'lucide-react';

export default function ReporteComprasPage() {
  return <ModulePage icon={<BarChart3 size={28} />} title="Reportes de Compras" description="Por proveedor, por fechas" />;
}
