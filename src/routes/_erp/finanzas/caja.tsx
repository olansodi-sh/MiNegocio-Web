import ModulePage from '../../../shared/components/ModulePage';
import { Banknote } from 'lucide-react';

export default function CajaPage() {
  return <ModulePage icon={<Banknote size={28} />} title="Caja" description="Dinero recibido" />;
}
