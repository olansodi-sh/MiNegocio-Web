import ModulePage from '../../../shared/components/ModulePage';
import { PiggyBank } from 'lucide-react';

export default function CarteraPage() {
  return <ModulePage icon={<PiggyBank size={28} />} title="Cartera" description="Control de clientes con saldo pendiente" />;
}
