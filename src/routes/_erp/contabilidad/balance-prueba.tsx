import ModulePage from '../../../shared/components/ModulePage';
import { ClipboardCheck } from 'lucide-react';

export default function BalancePruebaPage() {
  return <ModulePage icon={<ClipboardCheck size={28} />} title="Balance de Prueba" description="Verificación de saldos" />;
}
