import ModulePage from '../../../shared/components/ModulePage';
import { FileText } from 'lucide-react';

export default function CotizacionesPage() {
  return (
    <ModulePage
      icon={<FileText size={28} />}
      title="Cotizaciones"
      description="Genera propuestas comerciales"
    >
      <ul>
        <li>Crear cotización</li>
        <li>Convertir en factura</li>
        <li>Enviar por correo</li>
        <li>PDF</li>
      </ul>
    </ModulePage>
  );
}
