import ModulePage from '../../../shared/components/ModulePage';
import { BarChart3 } from 'lucide-react';

export default function ReportesPage() {
  return (
    <ModulePage icon={<BarChart3 size={28} />} title="Reportes" description="Información para toma de decisiones">
      <div className="submodule-grid">
        {[
          { label: 'Reportes de Ventas', desc: 'Diario, mensual, por vendedor, cliente, producto' },
          { label: 'Reportes de Compras', desc: 'Por proveedor, por fechas' },
          { label: 'Reportes de Inventario', desc: 'Existencias, kardex, rotación, agotados' },
          { label: 'Rentabilidad', desc: 'Por producto, categoría, vendedor' },
          { label: 'Utilidad', desc: 'Por factura, cliente, producto' },
          { label: 'Cartera', desc: 'Vencida, próxima a vencer' },
          { label: 'Caja', desc: 'Aperturas, cierres, arqueos' },
          { label: 'Productos', desc: 'Más vendidos, menos vendidos, sin movimiento' },
          { label: 'Contabilidad', desc: 'Estados financieros' },
        ].map(sm => (
          <div key={sm.label} className="submodule-card">
            <h3>{sm.label}</h3>
            <p>{sm.desc}</p>
          </div>
        ))}
      </div>
    </ModulePage>
  );
}
