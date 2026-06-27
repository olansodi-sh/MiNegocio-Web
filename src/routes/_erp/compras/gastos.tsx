import ModulePage from '../../../shared/components/ModulePage';
import { Receipt } from 'lucide-react';

export default function GastosPage() {
  return <ModulePage icon={<Receipt size={28} />} title="Gastos" description="Registro de gastos" />;
}
