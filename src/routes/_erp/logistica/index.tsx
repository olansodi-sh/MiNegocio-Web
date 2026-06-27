import ModulePage from '../../../shared/components/ModulePage';
import { Route } from 'lucide-react';

export default function LogisticaPage() {
  return (
    <ModulePage icon={<Route size={28} />} title="Logística" description="Gestión de entregas">
      <div className="submodule-grid">
        {[
          { label: 'Despachos', desc: 'Gestión de despachos' },
          { label: 'Rutas', desc: 'Planificación de rutas' },
          { label: 'Entregas', desc: 'Control de entregas' },
          { label: 'Transportadoras', desc: 'Administración de transportadoras' },
          { label: 'Seguimiento', desc: 'Seguimiento de envíos' },
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
