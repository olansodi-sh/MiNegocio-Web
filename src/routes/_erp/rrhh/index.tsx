import ModulePage from '../../../shared/components/ModulePage';
import { Users } from 'lucide-react';

export default function RRHHPage() {
  return (
    <ModulePage icon={<Users size={28} />} title="Recursos Humanos" description="Administración de empleados">
      <div className="submodule-grid">
        {[
          { label: 'Empleados', desc: 'Información laboral' },
          { label: 'Roles', desc: 'Permisos' },
          { label: 'Nómina Electrónica', desc: 'Liquidación y generación electrónica' },
          { label: 'Vacaciones', desc: 'Gestión de vacaciones' },
          { label: 'Horas Extras', desc: 'Control de horas extras' },
          { label: 'Prestaciones', desc: 'Cálculo de prestaciones' },
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
