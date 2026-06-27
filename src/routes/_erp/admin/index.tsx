import ModulePage from '../../../shared/components/ModulePage';
import { Shield } from 'lucide-react';

export default function AdminPage() {
  return (
    <ModulePage icon={<Shield size={28} />} title="Administración" description="Administración del sistema">
      <div className="submodule-grid">
        {[
          { label: 'Usuarios', desc: 'Crear y gestionar usuarios' },
          { label: 'Roles', desc: 'Crear perfiles' },
          { label: 'Permisos', desc: 'Control de acceso' },
          { label: 'Sedes', desc: 'Administración de sucursales' },
          { label: 'Empresa', desc: 'Información de la empresa' },
          { label: 'Auditoría', desc: 'Registro de todas las acciones' },
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
