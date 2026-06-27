import ModulePage from '../../../shared/components/ModulePage';
import { Wrench } from 'lucide-react';

export default function AjustesPage() {
  return (
    <ModulePage icon={<Wrench size={28} />} title="Ajustes" description="Corrección manual del inventario" />
  );
}
