import ModulePage from '../../../shared/components/ModulePage';
import { Upload } from 'lucide-react';

export default function CargaMasivaPage() {
  return (
    <ModulePage icon={<Upload size={28} />} title="Carga Masiva" description="Importación mediante Excel" />
  );
}
