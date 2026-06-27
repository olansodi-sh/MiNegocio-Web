import ModulePage from '../../../shared/components/ModulePage';
import { UserCheck } from 'lucide-react';

export default function VendedoresPage() {
  return (
    <ModulePage
      icon={<UserCheck size={28} />}
      title="Vendedores"
      description="Gestión del personal comercial"
    >
      <ul>
        <li>Comisión</li>
        <li>Metas</li>
        <li>Ventas</li>
        <li>Ranking</li>
      </ul>
    </ModulePage>
  );
}
