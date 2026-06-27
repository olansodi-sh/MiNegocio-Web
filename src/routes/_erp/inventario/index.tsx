import ModulePage from '../../../shared/components/ModulePage';
import { Package } from 'lucide-react';

export default function InventarioPage() {
  return (
    <ModulePage
      icon={<Package size={28} />}
      title="Inventario"
      description="Control de todo el movimiento físico de mercancía"
    >
      <div className="submodule-grid">
        {[
          { label: 'Productos', desc: 'Información principal del producto' },
          { label: 'Categorías', desc: 'Agrupación de productos' },
          { label: 'Marcas', desc: 'Administración de marcas' },
          { label: 'Bodegas', desc: 'Control de inventario por sede' },
          { label: 'Kardex', desc: 'Historial de entradas y salidas' },
          { label: 'Movimientos', desc: 'Entradas, salidas, ajustes y devoluciones' },
          { label: 'Traslados', desc: 'Mover inventario entre sedes' },
          { label: 'Costeo', desc: 'Control del costo promedio' },
          { label: 'Lotes', desc: 'Control por lote' },
          { label: 'Series', desc: 'Control por serial' },
          { label: 'Vencimientos', desc: 'Control de fechas de expiración' },
          { label: 'Carga Masiva', desc: 'Importación mediante Excel' },
        ].map(sm => (
          <div key={sm.label} className="submodule-card">
            <h3>{sm.label}</h3>
            <p>{sm.desc}</p>
          </div>
        ))}
      </div>
    </ModulePage>
  );
}
