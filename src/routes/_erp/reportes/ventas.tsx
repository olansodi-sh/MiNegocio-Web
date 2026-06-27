import ModulePage from '../../../shared/components/ModulePage';
import { BarChart3 } from 'lucide-react';

export default function ReporteVentasPage() {
  return (
    <ModulePage icon={<BarChart3 size={28} />} title="Reportes de Ventas" description="Diario, mensual, por vendedor, por cliente, por producto">
      <ul>
        <li>Diario</li>
        <li>Mensual</li>
        <li>Por vendedor</li>
        <li>Por cliente</li>
        <li>Por producto</li>
      </ul>
    </ModulePage>
  );
}
