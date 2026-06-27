import ModulePage from '../../../shared/components/ModulePage';
import { Move } from 'lucide-react';

export default function TrasladosPage() {
  return (
    <ModulePage icon={<Move size={28} />} title="Traslados" description="Mover inventario entre sedes" />
  );
}
