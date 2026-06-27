import ModulePage from '../../../shared/components/ModulePage';
import { Users } from 'lucide-react';

export default function ClientesPage() {
  return (
    <ModulePage
      icon={<Users size={28} />}
      title="Clientes"
      description="Administración completa de clientes"
    >
      <ul>
        <li>Datos básicos</li>
        <li>Contactos</li>
        <li>Crédito</li>
        <li>Historial de compras</li>
        <li>Cartera</li>
        <li>Documentos</li>
      </ul>
    </ModulePage>
  );
}
