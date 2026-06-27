import ModulePage from '../../../shared/components/ModulePage';
import { ArrowLeftRight } from 'lucide-react';

export default function MovimientosPage() {
  return (
    <ModulePage icon={<ArrowLeftRight size={28} />} title="Movimientos" description="Entradas, salidas, ajustes y devoluciones" />
  );
}
