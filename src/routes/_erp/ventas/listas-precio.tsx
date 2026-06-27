import ModulePage from '../../../shared/components/ModulePage';
import { Tag } from 'lucide-react';

export default function ListasPrecioPage() {
  return (
    <ModulePage
      icon={<Tag size={28} />}
      title="Listas de Precio"
      description="Múltiples precios para un mismo producto"
    >
      <ul>
        <li>Mayorista</li>
        <li>Minorista</li>
        <li>Distribuidor</li>
        <li>Cliente VIP</li>
      </ul>
    </ModulePage>
  );
}
