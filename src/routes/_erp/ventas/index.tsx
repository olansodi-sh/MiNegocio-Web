import ModulePage from '../../../shared/components/ModulePage';
import { ShoppingCart } from 'lucide-react';

export default function VentasPage() {
  return (
    <ModulePage
      icon={<ShoppingCart size={28} />}
      title="Ventas"
      description="Gestión comercial: POS, facturación, cotizaciones, pedidos, clientes y más."
    >
      <div className="submodule-grid">
        {[
          { label: 'POS', desc: 'Sistema de venta rápida para mostrador' },
          { label: 'Facturación Electrónica', desc: 'Facturas enviadas a la DIAN' },
          { label: 'Cotizaciones', desc: 'Propuestas comerciales' },
          { label: 'Pedidos', desc: 'Control de pedidos antes de facturar' },
          { label: 'Clientes', desc: 'Administración completa de clientes' },
          { label: 'Vendedores', desc: 'Gestión del personal comercial' },
          { label: 'Listas de Precio', desc: 'Múltiples precios por producto' },
          { label: 'Catálogo Virtual', desc: 'Portal de consulta para clientes' },
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
