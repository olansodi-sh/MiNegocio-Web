import { useState } from 'react';
import {
  ShoppingCart, Search, User, Edit2, Plus, Trash2,
  Tv, Cpu, Laptop, HardDrive, Smartphone, HelpCircle,
  Keyboard, MousePointer, Lightbulb, UserCheck
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  color: string;
  icon: React.ReactNode;
}

interface CartItem {
  product: Product;
  quantity: number;
}

export default function POSPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: { id: '2', name: 'Teclado de Precisión', price: 89.00, stock: 42, category: 'Electrónica', color: '#eff6ff', icon: <Keyboard size={24} /> },
      quantity: 1
    },
    {
      product: { id: '3', name: 'Mouse Inalámbrico', price: 45.00, stock: 128, category: 'Electrónica', color: '#f9fafb', icon: <MousePointer size={24} /> },
      quantity: 2
    },
    {
      product: { id: '4', name: 'Monitor 4K 27"', price: 349.99, stock: 12, category: 'Electrónica', color: '#f1f5f9', icon: <Tv size={24} /> },
      quantity: 1
    }
  ]);
  const [paymentMethod, setPaymentMethod] = useState<'EFECTIVO' | 'TARJETA'>('EFECTIVO');

  const categories = [
    'Todos', 'Electrónica', 'Electrodomésticos', 'Muebles', 'Abarrotes', 'Accesorios', 'Promociones'
  ];

  const products: Product[] = [
    { id: '1', name: 'Silla Ergonómica', price: 599.00, stock: 4, category: 'Muebles', color: '#ecfdf5', icon: <User size={24} /> },
    { id: '2', name: 'Teclado de Precisión', price: 89.00, stock: 42, category: 'Electrónica', color: '#eff6ff', icon: <Keyboard size={24} /> },
    { id: '3', name: 'Mouse Inalámbrico', price: 45.00, stock: 128, category: 'Electrónica', color: '#f9fafb', icon: <MousePointer size={24} /> },
    { id: '4', name: 'Monitor 4K 27"', price: 349.99, stock: 12, category: 'Electrónica', color: '#f1f5f9', icon: <Tv size={24} /> },
    { id: '5', name: 'Concentrador USB-C', price: 59.00, stock: 65, category: 'Electrónica', color: '#eef2ff', icon: <Cpu size={24} /> },
    { id: '6', name: 'Lámpara de Escritorio Pro', price: 120.00, stock: 8, category: 'Muebles', color: '#fefce8', icon: <Lightbulb size={24} /> },
    { id: '7', name: 'Auriculares de Ruido', price: 299.00, stock: 21, category: 'Electrónica', color: '#fef2f2', icon: <Laptop size={24} /> },
    { id: '8', name: 'Cámara Web UltraHD', price: 149.00, stock: 33, category: 'Electrónica', color: '#faf5ff', icon: <Tv size={24} /> },
    { id: '9', name: 'Altavoz Inteligente', price: 99.00, stock: 50, category: 'Electrónica', color: '#fff7ed', icon: <HelpCircle size={24} /> },
    { id: '10', name: 'SSD Externo 1TB', price: 129.00, stock: 18, category: 'Electrónica', color: '#ecfeff', icon: <HardDrive size={24} /> },
    { id: '11', name: 'Cargador Inalámbrico', price: 35.00, stock: 92, category: 'Accesorios', color: '#f7fee7', icon: <Smartphone size={24} /> },
    { id: '12', name: 'Teclado Numérico Mecánico', price: 49.00, stock: 15, category: 'Electrónica', color: '#fff1f2', icon: <Keyboard size={24} /> },
    { id: '13', name: 'Funda para Laptop', price: 29.00, stock: 110, category: 'Accesorios', color: '#f5f3ff', icon: <Laptop size={24} /> },
    { id: '14', name: 'Organizador de Cables', price: 12.50, stock: 400, category: 'Accesorios', color: '#f0fdfa', icon: <Cpu size={24} /> },
    { id: '15', name: 'Soporte de Monitor', price: 75.00, stock: 22, category: 'Accesorios', color: '#fffbeb', icon: <Tv size={24} /> }
  ];

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev =>
      prev
        .map(item => {
          if (item.product.id === productId) {
            const quantity = item.quantity + delta;
            return { ...item, quantity };
          }
          return item;
        })
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  // Recalculations
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="page">
      {/* Module Title Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-h)' }}>
            <ShoppingCart size={28} />
            <h1 style={{ fontSize: '24px', fontWeight: '600' }}>Ventas / Terminal POS</h1>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '2px' }}>
            Oficina Principal • Estación 04 • Sesión de Caja Activa
          </p>
        </div>
      </div>

      {/* POS Workspace Layout */}
      <div className="pos-layout">
        {/* Left Side: Product Grid */}
        <div className="pos-catalog">
          {/* Category Chips Scrollbar */}
          <div className="pos-category-chips">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`chip ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Catalog Grid */}
          <div className="pos-products-grid">
            {filteredProducts.map(prod => (
              <div key={prod.id} className="pos-product-card" onClick={() => addToCart(prod)}>
                <div className="pos-product-card-image" style={{ background: prod.color }}>
                  {prod.icon}
                </div>
                <div className="pos-product-card-info">
                  <div className="pos-product-card-title">{prod.name}</div>
                  <div className="pos-product-card-footer">
                    <span className="pos-product-card-price">${prod.price.toFixed(2)}</span>
                    <span className="pos-product-card-stock">Stock: {prod.stock}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Cart Sidebar */}
        <div className="pos-sidebar">
          {/* Customer box */}
          <div className="pos-sidebar-header">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              <span>Cliente</span>
              <button style={{ color: 'var(--accent)', background: 'none', border: 'none', fontWeight: '600', cursor: 'pointer' }}>Nuevo Cliente</button>
            </div>
            <div className="pos-customer-box">
              <div className="pos-customer-icon">
                <User size={16} />
              </div>
              <div style={{ flex: 1, overflow: 'hidden' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-h)' }}>Cliente sin Registrar</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Nivel 1 • 0 Puntos</div>
              </div>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                <Edit2 size={13} />
              </button>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="pos-cart">
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', color: 'var(--text-muted)', borderBottom: '1px solid var(--border)', paddingBottom: '6px' }}>
              <span>Detalles del Pedido</span>
              <span>{cart.length} Artículos</span>
            </div>

            {cart.length === 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '120px', color: 'var(--text-muted)', fontSize: '13px', gap: '8px' }}>
                <ShoppingCart size={24} style={{ opacity: 0.5 }} />
                <span>El carrito está vacío</span>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.product.id} className="pos-cart-item">
                  <div style={{ width: '36px', height: '36px', borderRadius: '4px', background: item.product.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                    {item.product.icon}
                  </div>
                  <div className="pos-cart-item-info">
                    <div className="pos-cart-item-title">{item.product.name}</div>
                    <div className="pos-cart-item-price">${item.product.price.toFixed(2)}</div>
                  </div>
                  <div className="pos-cart-qty-ctrl">
                    <button onClick={() => updateQuantity(item.product.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, 1)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.product.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                    <Trash2 size={14} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Summary Panel */}
          <div className="pos-summary">
            <div className="pos-summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="pos-summary-row">
              <span>Impuestos (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="pos-summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* Payment Method Selectors */}
            <div style={{ display: 'flex', gap: '8px', margin: '8px 0 4px 0' }}>
              <button
                onClick={() => setPaymentMethod('EFECTIVO')}
                className="btn btn-secondary"
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  background: paymentMethod === 'EFECTIVO' ? 'var(--accent)' : 'var(--bg-card)',
                  color: paymentMethod === 'EFECTIVO' ? 'white' : 'var(--text-h)',
                  borderColor: paymentMethod === 'EFECTIVO' ? 'var(--accent)' : 'var(--border)'
                }}
              >
                Efectivo
              </button>
              <button
                onClick={() => setPaymentMethod('TARJETA')}
                className="btn btn-secondary"
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  background: paymentMethod === 'TARJETA' ? 'var(--accent)' : 'var(--bg-card)',
                  color: paymentMethod === 'TARJETA' ? 'white' : 'var(--text-h)',
                  borderColor: paymentMethod === 'TARJETA' ? 'var(--accent)' : 'var(--border)'
                }}
              >
                Tarjeta
              </button>
            </div>

            {/* Pay Button */}
            <button className="pos-pay-btn" onClick={() => {
              if (cart.length > 0) {
                alert(`¡Transacción completada con éxito!\nMétodo: ${paymentMethod}\nTotal: $${total.toFixed(2)}`);
                setCart([]);
              }
            }}>
              <UserCheck size={16} />
              Completar Transacción - COBRAR ${total.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
