import ModulePage from '../../../shared/components/ModulePage';
import { DollarSign } from 'lucide-react';

export default function FinanzasPage() {
  return (
    <ModulePage icon={<DollarSign size={28} />} title="Finanzas" description="Administración del dinero de la empresa">
      <div className="submodule-grid">
        {[
          { label: 'Caja', desc: 'Dinero recibido' },
          { label: 'Arqueo', desc: 'Comparación entre dinero físico y sistema' },
          { label: 'Bancos', desc: 'Administración de cuentas bancarias' },
          { label: 'Cartera', desc: 'Control de clientes con saldo pendiente' },
          { label: 'Ingresos', desc: 'Ingresos distintos a ventas' },
          { label: 'Egresos', desc: 'Pagos realizados' },
          { label: 'Pagos', desc: 'Aplicación de pagos' },
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
