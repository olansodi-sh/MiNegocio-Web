import ModulePage from '../../../shared/components/ModulePage';
import { Settings } from 'lucide-react';

export default function ConfiguracionPage() {
  return (
    <ModulePage icon={<Settings size={28} />} title="Configuración" description="Parametrización del ERP">
      <div className="config-grid">
        {[
          'Numeraciones', 'Impuestos', 'DIAN', 'Firma Digital',
          'Resoluciones', 'Correos', 'Integraciones', 'Scanner',
          'Impresoras POS', 'Monedas', 'Ciudades', 'Departamentos',
          'Tipos de Documento', 'Backup', 'Logs',
        ].map(item => (
          <div key={item} className="config-card">
            {item}
          </div>
        ))}
      </div>
    </ModulePage>
  );
}
