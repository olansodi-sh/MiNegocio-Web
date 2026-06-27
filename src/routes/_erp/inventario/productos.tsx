import { useState } from 'react';
import { Package, Search, Filter, Upload, Plus, AlertTriangle, MoreVertical } from 'lucide-react';

interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  stock: number;
  status: 'En Stock' | 'Stock Bajo' | 'Sin Stock';
  price: string;
  location: string;
}

export default function ProductosPage() {
  const [products, setProducts] = useState<Product[]>([
    { id: '1', sku: 'SKU-2901-A', name: 'Ergonomic Office Chair v4', category: 'Muebles', stock: 142, status: 'En Stock', price: '$289.00', location: 'Ala Norte - A4' },
    { id: '2', sku: 'SKU-1142-C', name: 'Mechanical Keyboard RGB', category: 'Electrónica', stock: 8, status: 'Stock Bajo', price: '$129.99', location: 'Piso Principal - B2' },
    { id: '3', sku: 'SKU-8839-X', name: 'Ultrawide Monitor 34"', category: 'Electrónica', stock: 0, status: 'Sin Stock', price: '$649.50', location: 'Piso Principal - B2' },
    { id: '4', sku: 'SKU-0012-L', name: 'Sustainable Oak Desk', category: 'Muebles', stock: 34, status: 'En Stock', price: '$1,100.00', location: 'Depósito Sur - G12' },
    { id: '5', sku: 'SKU-4451-P', name: 'Noise Cancelling Headset', category: 'Electrónica', stock: 215, status: 'En Stock', price: '$199.00', location: 'Piso Principal - B1' },
    { id: '6', sku: 'SKU-1029-M', name: 'Smart LED Desk Lamp', category: 'Iluminación', stock: 3, status: 'Stock Bajo', price: '$45.00', location: 'Ala Norte - A2' },
    { id: '7', sku: 'SKU-5567-T', name: 'Adjustable Monitor Arm', category: 'Accesorios', stock: 88, status: 'En Stock', price: '$75.00', location: 'Piso Principal - C4' }
  ]);

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSelectAll = () => {
    if (selectedIds.length === products.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(products.map(p => p.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page">
      {/* Header Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-h)' }}>
            <Package size={28} />
            <h1 style={{ fontSize: '24px', fontWeight: '600' }}>Gestión de Inventario</h1>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '4px' }}>
            Gestione y monitoree sus niveles de stock físico en todas las bodegas.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn btn-secondary">
            <Upload size={16} />
            Importar
          </button>
          <button className="btn btn-primary">
            <Plus size={16} />
            Nueva Transacción
          </button>
        </div>
      </div>

      {/* Asymmetric Widgets Grid */}
      <div className="widget-row" style={{ marginBottom: '24px' }}>
        {/* Sparkline / Distribution Chart */}
        <div className="kpi-card" style={{ display: 'block', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-h)' }}>Distribución de Stock</h3>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Últimos 30 Días</span>
          </div>
          <div className="bar-chart-container">
            <div className="bar-chart-column" style={{ height: '40%' }}></div>
            <div className="bar-chart-column" style={{ height: '60%' }}></div>
            <div className="bar-chart-column" style={{ height: '55%' }}></div>
            <div className="bar-chart-column highlighted" style={{ height: '80%' }}></div>
            <div className="bar-chart-column highlighted" style={{ height: '95%' }}></div>
            <div className="bar-chart-column highlighted" style={{ height: '85%' }}></div>
            <div className="bar-chart-column" style={{ height: '70%' }}></div>
            <div className="bar-chart-column" style={{ height: '45%' }}></div>
            <div className="bar-chart-column" style={{ height: '50%' }}></div>
            <div className="bar-chart-column" style={{ height: '35%' }}></div>
            <div className="bar-chart-column highlighted" style={{ height: '65%' }}></div>
            <div className="bar-chart-column highlighted" style={{ height: '75%' }}></div>
          </div>
        </div>

        {/* Small widgets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="kpi-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
            <div>
              <p style={{ fontSize: '10px', fontWeight: '600', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Alertas de Stock Bajo</p>
              <h4 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--danger)', marginTop: '4px' }}>12</h4>
            </div>
            <AlertTriangle size={32} style={{ color: 'var(--danger)', opacity: 0.4 }} />
          </div>
          <div className="kpi-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
            <div>
              <p style={{ fontSize: '10px', fontWeight: '600', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Total de SKUs</p>
              <h4 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-h)', marginTop: '4px' }}>2,481</h4>
            </div>
            <Package size={32} style={{ color: 'var(--accent)', opacity: 0.4 }} />
          </div>
        </div>
      </div>

      {/* Interactive Table Container */}
      <div className="table-container">
        {/* Bulk Action / Filters Toolbar */}
        <div className="table-actions-bar">
          <div style={{ display: 'flex', gap: '10px', flex: 1, alignItems: 'center' }}>
            <div className="table-search-wrapper">
              <Search size={16} />
              <input
                type="text"
                placeholder="Filtrar por nombre, ID o bodega..."
                className="table-search-input"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="btn btn-secondary" style={{ padding: '8px 12px' }}>
              <Filter size={15} />
              Filtros
            </button>
          </div>

          {selectedIds.length > 0 && (
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--accent)' }}>
                {selectedIds.length} seleccionados
              </span>
              <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>Exportar</button>
              <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>Actualizar Stock</button>
              <button className="btn btn-danger-outline" style={{ padding: '6px 12px', fontSize: '12px' }}>Eliminar</button>
            </div>
          )}
        </div>

        {/* The Data Table */}
        <div style={{ overflowX: 'auto' }}>
          <table className="erp-table">
            <thead>
              <tr>
                <th style={{ width: '40px' }}>
                  <input
                    type="checkbox"
                    checked={selectedIds.length === products.length}
                    onChange={toggleSelectAll}
                    style={{ cursor: 'pointer' }}
                  />
                </th>
                <th>ID Producto</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Nivel de Stock</th>
                <th>Precio Unitario</th>
                <th>Ubicación de Bodega</th>
                <th style={{ width: '40px' }}></th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(prod => {
                const isSelected = selectedIds.includes(prod.id);
                return (
                  <tr key={prod.id} className={isSelected ? 'table-row-selected' : ''}>
                    <td>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelect(prod.id)}
                        style={{ cursor: 'pointer' }}
                      />
                    </td>
                    <td style={{ fontFamily: 'monospace', color: 'var(--text-muted)' }}>{prod.sku}</td>
                    <td style={{ fontWeight: '500', color: 'var(--text-h)' }}>{prod.name}</td>
                    <td>{prod.category}</td>
                    <td>
                      <span className={`badge ${
                        prod.status === 'En Stock' ? 'badge-success' :
                        prod.status === 'Stock Bajo' ? 'badge-warning' : 'badge-danger'
                      }`}>
                        {prod.status} ({prod.stock})
                      </span>
                    </td>
                    <td>{prod.price}</td>
                    <td>{prod.location}</td>
                    <td>
                      <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Table Pagination Footer */}
        <div className="table-footer">
          <div style={{ color: 'var(--text-muted)' }}>
            Mostrando <span style={{ fontWeight: '600', color: 'var(--text-h)' }}>1</span> a{' '}
            <span style={{ fontWeight: '600', color: 'var(--text-h)' }}>{filteredProducts.length}</span> de{' '}
            <span style={{ fontWeight: '600', color: 'var(--text-h)' }}>2,481</span> artículos
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Filas por página:</span>
              <select style={{ background: 'transparent', border: 'none', color: 'var(--text-h)', fontWeight: '600', cursor: 'pointer', outline: 'none' }}>
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button className="pagination-btn" disabled>‹</button>
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">3</button>
              <span style={{ padding: '0 4px', color: 'var(--text-muted)', selfAlign: 'center' }}>...</span>
              <button className="pagination-btn">124</button>
              <button className="pagination-btn">›</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
