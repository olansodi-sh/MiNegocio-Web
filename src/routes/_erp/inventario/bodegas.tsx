import ModulePage from '../../../shared/components/ModulePage';
import { Warehouse } from 'lucide-react';

export default function BodegasPage() {
  return (
    <ModulePage icon={<Warehouse size={28} />} title="Bodegas" description="Control de inventario por sede" />
  );
}
