import ModulePage from '../../../shared/components/ModulePage';
import { Package } from 'lucide-react';

export default function ReporteProductosPage() {
  return <ModulePage icon={<Package size={28} />} title="Reportes de Productos" description="Más vendidos, menos vendidos, sin movimiento" />;
}
