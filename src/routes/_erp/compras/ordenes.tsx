import { useState } from 'react';
import { ClipboardList, Plus, Trash2, Save, FileCheck, DollarSign } from 'lucide-react';

interface OrderItem {
  id: string;
  description: string;
  sku: string;
  quantity: number;
  unitPrice: number;
}

export default function OrdenesPage() {
  const [vendorName, setVendorName] = useState('TechSupply Global Corp');
  const [contactPerson, setContactPerson] = useState('Sarah Jenkins');
  const [paymentTerms, setPaymentTerms] = useState('Net 60');
  const [billingAddress, setBillingAddress] = useState('1200 Innovation Way, Suite 400, Palo Alto, CA 94301');

  const [shippingMethod, setShippingMethod] = useState('Standard Ground (3-5 Days)');
  const [estArrival, setEstArrival] = useState('2026-07-15');
  const [shippingCarrier, setShippingCarrier] = useState('FedEx Supply Chain');
  const [deliveryAddress, setDeliveryAddress] = useState('Central Warehouse - Bay 4, 800 Logistics Drive, Austin, TX 78701');

  const [items, setItems] = useState<OrderItem[]>([
    { id: '1', description: 'Enterprise Server Rack - 42U', sku: 'SRV-42U-PRO', quantity: 4, unitPrice: 1250.00 },
    { id: '2', description: 'High-Speed Fiber Optic Cables (50m)', sku: 'CAB-FIB-50', quantity: 25, unitPrice: 45.50 }
  ]);

  const [newDesc, setNewDesc] = useState('');
  const [newSku, setNewSku] = useState('');
  const [newQty, setNewQty] = useState(1);
  const [newPrice, setNewPrice] = useState(10.00);

  const addItem = () => {
    if (!newDesc || !newSku) {
      alert('Por favor complete la Descripción y el SKU');
      return;
    }
    const newItem: OrderItem = {
      id: Date.now().toString(),
      description: newDesc,
      sku: newSku,
      quantity: newQty,
      unitPrice: newPrice
    };
    setItems(prev => [...prev, newItem]);
    setNewDesc('');
    setNewSku('');
    setNewQty(1);
    setNewPrice(10.00);
  };

  const deleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateItemQty = (id: string, qty: number) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(1, qty) } : item));
  };

  const updateItemPrice = (id: string, price: number) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, unitPrice: Math.max(0, price) } : item));
  };

  // Calculations
  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const tax = subtotal * 0.085;
  const shippingCost = subtotal > 0 ? 125.00 : 0;
  const total = subtotal + tax + shippingCost;
  const budget = 15000.00;

  return (
    <div className="page">
      {/* Header section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-h)' }}>
            <ClipboardList size={28} />
            <h1 style={{ fontSize: '24px', fontWeight: '600' }}>Orden de Compra: PO-2026-0892</h1>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '4px' }}>
            Compras / Formulario de Nueva Orden de Compra
          </p>
        </div>
        <div style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: '500' }}>
          Fecha: 27 de Junio, 2026
        </div>
      </div>

      {/* Two Column Vendor & Shipping Form */}
      <div className="widget-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        {/* Vendor Information */}
        <div className="kpi-card" style={{ display: 'block', padding: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-h)', marginBottom: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>
            Información del Proveedor
          </h3>
          <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '0' }}>
            <div className="form-group">
              <label>Nombre del Proveedor</label>
              <select className="form-select" value={vendorName} onChange={e => setVendorName(e.target.value)}>
                <option>TechSupply Global Corp</option>
                <option>Logistics Pros Inc</option>
                <option>Global Servers Ltd</option>
              </select>
            </div>
            <div className="form-group">
              <label>Persona de Contacto</label>
              <input type="text" className="form-input" value={contactPerson} onChange={e => setContactPerson(e.target.value)} />
            </div>
          </div>
          <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '12px' }}>
            <div className="form-group">
              <label>Condiciones de Pago</label>
              <select className="form-select" value={paymentTerms} onChange={e => setPaymentTerms(e.target.value)}>
                <option>Net 60</option>
                <option>Net 30</option>
                <option>Pago contra entrega</option>
              </select>
            </div>
            <div className="form-group">
              <label>Dirección de Facturación</label>
              <textarea className="form-textarea" value={billingAddress} onChange={e => setBillingAddress(e.target.value)} />
            </div>
          </div>
        </div>

        {/* Shipping Details */}
        <div className="kpi-card" style={{ display: 'block', padding: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-h)', marginBottom: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>
            Detalles de Envío
          </h3>
          <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '0' }}>
            <div className="form-group">
              <label>Método de Envío</label>
              <select className="form-select" value={shippingMethod} onChange={e => setShippingMethod(e.target.value)}>
                <option>Standard Ground (3-5 Days)</option>
                <option>Express Overnight</option>
                <option>Freight Carrier</option>
              </select>
            </div>
            <div className="form-group">
              <label>Entrega Estimada</label>
              <input type="date" className="form-input" value={estArrival} onChange={e => setEstArrival(e.target.value)} />
            </div>
          </div>
          <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '12px' }}>
            <div className="form-group">
              <label>Transportadora / Carrier</label>
              <input type="text" className="form-input" value={shippingCarrier} onChange={e => setShippingCarrier(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Dirección de Entrega</label>
              <textarea className="form-textarea" value={deliveryAddress} onChange={e => setDeliveryAddress(e.target.value)} />
            </div>
          </div>
        </div>
      </div>

      {/* Item List Table Container */}
      <div className="table-container" style={{ marginBottom: '24px' }}>
        <div className="table-actions-bar">
          <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-h)' }}>Lista de Artículos</h3>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="erp-table">
            <thead>
              <tr>
                <th style={{ width: '50px' }}>#</th>
                <th>Descripción del Producto</th>
                <th>SKU</th>
                <th style={{ width: '120px' }}>Cantidad</th>
                <th style={{ width: '140px' }}>Precio Unitario</th>
                <th style={{ width: '140px' }}>Total</th>
                <th style={{ width: '50px' }}></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td style={{ fontWeight: '500', color: 'var(--text-h)' }}>{item.description}</td>
                  <td style={{ fontFamily: 'monospace', color: 'var(--text-muted)' }}>{item.sku}</td>
                  <td>
                    <input
                      type="number"
                      className="form-input"
                      style={{ padding: '4px 8px', fontSize: '13px' }}
                      value={item.quantity}
                      onChange={e => updateItemQty(item.id, parseInt(e.target.value) || 0)}
                    />
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span>$</span>
                      <input
                        type="number"
                        className="form-input"
                        style={{ padding: '4px 8px', fontSize: '13px' }}
                        value={item.unitPrice}
                        onChange={e => updateItemPrice(item.id, parseFloat(e.target.value) || 0)}
                      />
                    </div>
                  </td>
                  <td style={{ fontWeight: '600', color: 'var(--text-h)' }}>
                    ${(item.quantity * item.unitPrice).toFixed(2)}
                  </td>
                  <td>
                    <button onClick={() => deleteItem(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))}

              {/* Row to Add Item dynamically */}
              <tr style={{ background: 'var(--bg-sidebar)' }}>
                <td>+</td>
                <td>
                  <input
                    type="text"
                    placeholder="Descripción del nuevo artículo..."
                    className="form-input"
                    style={{ padding: '6px 10px', fontSize: '13px' }}
                    value={newDesc}
                    onChange={e => setNewDesc(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="SKU..."
                    className="form-input"
                    style={{ padding: '6px 10px', fontSize: '13px' }}
                    value={newSku}
                    onChange={e => setNewSku(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-input"
                    style={{ padding: '6px 10px', fontSize: '13px' }}
                    value={newQty}
                    onChange={e => setNewQty(parseInt(e.target.value) || 1)}
                  />
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>$</span>
                    <input
                      type="number"
                      className="form-input"
                      style={{ padding: '6px 10px', fontSize: '13px' }}
                      value={newPrice}
                      onChange={e => setNewPrice(parseFloat(e.target.value) || 0)}
                    />
                  </div>
                </td>
                <td style={{ fontWeight: '600', color: 'var(--text-h)' }}>
                  ${(newQty * newPrice).toFixed(2)}
                </td>
                <td>
                  <button onClick={addItem} className="btn btn-primary" style={{ padding: '6px 10px', fontSize: '12px' }}>
                    <Plus size={14} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Section */}
      <div className="widget-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'flex-start' }}>
        {/* Approved Budget Warning */}
        <div className="kpi-card" style={{ display: 'block', padding: '20px' }}>
          <h4 style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
            Asignación de Presupuesto
          </h4>
          <div style={{ fontSize: '20px', fontWeight: '700', color: total > budget ? 'var(--danger)' : 'var(--text-h)' }}>
            Total Orden: ${total.toFixed(2)} / Presupuesto: ${budget.toFixed(2)}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: total > budget ? 'var(--danger)' : 'var(--success)', marginTop: '8px', fontWeight: '500' }}>
            {total > budget ? (
              <span>⚠️ ¡Advertencia: El monto total de la orden supera el presupuesto aprobado para esta orden de compra!</span>
            ) : (
              <span>✓ El monto total de la orden está dentro del presupuesto aprobado.</span>
            )}
          </div>
        </div>

        {/* Calculation Box & Actions */}
        <div className="kpi-card" style={{ display: 'block', padding: '20px', background: 'var(--bg-sidebar)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--text)' }}>
              <span>Subtotal</span>
              <span style={{ fontWeight: '500' }}>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--text)' }}>
              <span>Impuestos (8.5%)</span>
              <span style={{ fontWeight: '500' }}>${tax.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--text)' }}>
              <span>Costo de Envío</span>
              <span style={{ fontWeight: '500' }}>${shippingCost.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: '700', color: 'var(--text-h)', borderTop: '1px solid var(--border)', paddingTop: '10px' }}>
              <span>Monto Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
              <button className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => alert('¡Borrador guardado exitosamente!')}>
                <Save size={16} />
                Guardar Borrador
              </button>
              <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => alert(`¡Orden de compra por $${total.toFixed(2)} confirmada!`)}>
                <FileCheck size={16} />
                Confirmar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
