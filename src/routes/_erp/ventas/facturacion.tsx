import ModulePage from '../../../shared/components/ModulePage';
import { FileText } from 'lucide-react';

export default function FacturacionPage() {
  return (
    <ModulePage
      icon={<FileText size={28} />}
      title="Facturación Electrónica"
      description="Administra todas las facturas enviadas a la DIAN"
    >
      <ul>
        <li>Crear factura</li>
        <li>Enviar a la DIAN</li>
        <li>Reenviar</li>
        <li>Consultar estado</li>
        <li>Notas crédito</li>
        <li>Notas débito</li>
        <li>Anulación</li>
      </ul>
    </ModulePage>
  );
}
