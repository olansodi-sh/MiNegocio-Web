import ModulePage from '../../../shared/components/ModulePage';
import { ClipboardList } from 'lucide-react';

export default function PedidosPage() {
  return (
    <ModulePage
      icon={<ClipboardList size={28} />}
      title="Pedidos"
      description="Controla pedidos antes de facturarlos"
    />
  );
}
