import ModulePage from '../../../shared/components/ModulePage';
import { Globe } from 'lucide-react';

export default function CatalogoVirtualPage() {
  return (
    <ModulePage
      icon={<Globe size={28} />}
      title="Catálogo Virtual"
      description="Portal donde el cliente puede consultar productos y precios"
    />
  );
}
