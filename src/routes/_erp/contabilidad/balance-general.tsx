import ModulePage from '../../../shared/components/ModulePage';
import { Scale } from 'lucide-react';

export default function BalanceGeneralPage() {
  return <ModulePage icon={<Scale size={28} />} title="Balance General" description="Situación financiera de la empresa" />;
}
