import ModulePage from '../../../shared/components/ModulePage';
import { Bookmark } from 'lucide-react';

export default function MarcasPage() {
  return (
    <ModulePage icon={<Bookmark size={28} />} title="Marcas" description="Administración de marcas" />
  );
}
