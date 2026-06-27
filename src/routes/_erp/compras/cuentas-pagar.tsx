import ModulePage from '../../../shared/components/ModulePage';
import { CreditCard } from 'lucide-react';

export default function CuentasPagarPage() {
  return <ModulePage icon={<CreditCard size={28} />} title="Cuentas por Pagar" description="Control de obligaciones" />;
}
