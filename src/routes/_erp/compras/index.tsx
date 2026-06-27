import ModulePage from '../../../shared/components/ModulePage';
import { Truck } from 'lucide-react';

export default function ComprasPage() {
  return (
    <ModulePage icon={<Truck size={28} />} title="Compras" description="Administración del proceso de abastecimiento">
      <div className="submodule-grid">
        {[
          { label: 'Proveedores', desc: 'Información de proveedores' },
          { label: 'Órdenes de Compra', desc: 'Solicitudes de compra' },
          { label: 'Recepción', desc: 'Ingreso de mercancía' },
          { label: 'Facturas de Compra', desc: 'Registro de compras' },
          { label: 'Gastos', desc: 'Registro de gastos' },
          { label: 'Devoluciones', desc: 'Devoluciones a proveedores' },
          { label: 'Cuentas por Pagar', desc: 'Control de obligaciones' },
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
