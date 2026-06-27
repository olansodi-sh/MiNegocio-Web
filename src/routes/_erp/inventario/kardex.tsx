import ModulePage from '../../../shared/components/ModulePage';
import { ScrollText } from 'lucide-react';

export default function KardexPage() {
  return (
    <ModulePage icon={<ScrollText size={28} />} title="Kardex" description="Historial completo de entradas y salidas" />
  );
}
