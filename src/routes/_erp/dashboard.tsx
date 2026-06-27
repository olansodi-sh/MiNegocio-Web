import { useState } from 'react';
import {
  LayoutDashboard, TrendingUp, Users, DollarSign,
  AlertTriangle, Download, Calendar, ChevronDown,
  ArrowUpRight, ArrowDownRight, CheckCircle2, Clock, XCircle
} from 'lucide-react';

export default function Dashboard() {
  const [filter, setFilter] = useState('Todo');

  const activities = [
    { event: 'Nueva orden recibida', entity: 'ORD-44561', operator: 'Sistema Automatizado', time: '10:24 AM', value: '$1,450.00', status: 'PROCESANDO' },
    { event: 'Envío despachado', entity: 'SHP-11249', operator: 'Líder de Almacén', time: '09:45 AM', value: '-', status: 'EN TRÁNSITO' },
    { event: 'Pago fallido', entity: 'INV-2024-012', operator: 'Pasarela Stripe', time: '08:12 AM', value: '$4,200.00', status: 'FALLIDO' }
  ];

  const filteredActivities = filter === 'Todo'
    ? activities
    : filter === 'Ventas'
      ? activities.filter(a => a.event.includes('orden') || a.event.includes('Pago'))
      : activities.filter(a => a.event.includes('Envío'));

  return (
    <div className="page">
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-h)' }}>
            <LayoutDashboard size={28} />
            <h1 style={{ fontSize: '24px', fontWeight: '600' }}>Dashboard Ejecutivo</h1>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '4px' }}>
            Vista de rendimiento consolidado para el 24 de mayo de 2024
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn btn-secondary">
            <Calendar size={16} />
            Este Mes
            <ChevronDown size={14} />
          </button>
          <button className="btn btn-primary">
            <Download size={16} />
            Exportar Datos
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="kpi-grid" style={{ marginBottom: '24px' }}>
        {/* KPI 1 */}
        <div className="kpi-card" style={{ display: 'block', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Ingresos de Hoy</span>
            <span className="badge badge-success" style={{ gap: '2px' }}>
              <ArrowUpRight size={10} />
              +12.8%
            </span>
          </div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text-h)', marginTop: '8px' }}>
            $142,850 <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-muted)' }}>COP</span>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px' }}>
            65% del objetivo diario alcanzado
          </div>
        </div>

        {/* KPI 2 */}
        <div className="kpi-card" style={{ display: 'block', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Órdenes Totales</span>
            <span className="badge badge-success" style={{ gap: '2px' }}>
              <ArrowUpRight size={10} />
              +4.3%
            </span>
          </div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text-h)', marginTop: '8px' }}>
            1,204 <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-muted)' }}>unidades</span>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px' }}>
            45% de incremento respecto a ayer
          </div>
        </div>

        {/* KPI 3 */}
        <div className="kpi-card" style={{ display: 'block', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Nuevos Clientes</span>
            <span className="badge badge-danger" style={{ gap: '2px' }}>
              <ArrowDownRight size={10} />
              -3.1%
            </span>
          </div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text-h)', marginTop: '8px' }}>
            84 <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-muted)' }}>cuentas</span>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px' }}>
            Cerca del rendimiento máximo diario
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="widget-row" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '24px' }}>
        {/* Left Column: Revenue Trend */}
        <div className="kpi-card" style={{ display: 'block', padding: '24px', minHeight: '340px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-h)' }}>Tendencia de Ingresos</h3>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>Rendimiento de los últimos 30 días</p>
            </div>
            <div style={{ display: 'flex', gap: '16px', fontSize: '12px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }}></span> Bruto
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#aec8f4' }}></span> Neto
              </span>
            </div>
          </div>

          {/* SVG Trend Line Chart */}
          <div style={{ width: '100%', height: '220px', position: 'relative', marginTop: '16px' }}>
            <svg viewBox="0 0 500 200" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              {/* Grid Lines */}
              <line x1="0" y1="50" x2="500" y2="50" stroke="var(--border)" strokeDasharray="4 4" />
              <line x1="0" y1="100" x2="500" y2="100" stroke="var(--border)" strokeDasharray="4 4" />
              <line x1="0" y1="150" x2="500" y2="150" stroke="var(--border)" strokeDasharray="4 4" />
              
              {/* Gross Line (Navy Accent) */}
              <path
                d="M0,150 Q50,130 100,160 T200,90 T300,120 T400,60 T500,80"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="3"
              />
              {/* Net Line (Light Navy) */}
              <path
                d="M0,165 Q50,145 100,175 T200,110 T300,135 T400,80 T500,100"
                fill="none"
                stroke="#aec8f4"
                strokeWidth="2"
              />

              {/* Labels */}
              <text x="0" y="195" fill="var(--text-muted)" fontSize="10">01 MAY</text>
              <text x="100" y="195" fill="var(--text-muted)" fontSize="10">07 MAY</text>
              <text x="200" y="195" fill="var(--text-muted)" fontSize="10">14 MAY</text>
              <text x="300" y="195" fill="var(--text-muted)" fontSize="10">21 MAY</text>
              <text x="400" y="195" fill="var(--text-muted)" fontSize="10">28 MAY</text>
            </svg>
          </div>
        </div>

        {/* Right Column: Widgets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Inventory Alerts Widget */}
          <div className="kpi-card" style={{ display: 'block', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={18} style={{ color: 'var(--danger)' }} />
                <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-h)' }}>Alertas de Inventario</h4>
              </div>
              <span className="badge badge-danger">12 críticas</span>
            </div>
            <div className="alert-list">
              <div className="alert-item">
                <span className="alert-item-label">SKU-9021 Procesador X1</span>
                <span className="alert-item-count">Quedan 2 <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>(Mín 10)</span></span>
              </div>
              <div className="alert-item">
                <span className="alert-item-label">SKU-4432 Logic Board</span>
                <span className="alert-item-count">Quedan 0 <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>(Mín 5)</span></span>
              </div>
            </div>
            <button className="btn btn-secondary" style={{ width: '100%', marginTop: '14px', fontSize: '12px', justifyContent: 'center' }}>
              Reabastecer Todo
            </button>
          </div>

          {/* Pending Invoices Widget */}
          <div className="kpi-card" style={{ display: 'block', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <DollarSign size={18} style={{ color: 'var(--accent)' }} />
                <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-h)' }}>Facturas Pendientes</h4>
              </div>
              <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-h)' }}>$24,500</span>
            </div>
            <div className="alert-list">
              <div className="alert-item">
                <div>
                  <div className="alert-item-label">Vertex Solutions</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>INV-2026-001</div>
                </div>
                <span style={{ fontWeight: '600', color: 'var(--text-h)' }}>
                  $12,400 <span style={{ fontSize: '10px', color: 'var(--danger)', display: 'block', textAlign: 'right' }}>Vencida hace 2d</span>
                </span>
              </div>
              <div className="alert-item">
                <div>
                  <div className="alert-item-label">Global Logistics Ltd</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>INV-2026-003</div>
                </div>
                <span style={{ fontWeight: '600', color: 'var(--text-h)' }}>
                  $9,100 <span style={{ fontSize: '10px', color: 'var(--success)', display: 'block', textAlign: 'right' }}>Vence en 3d</span>
                </span>
              </div>
            </div>
            <button className="btn btn-secondary" style={{ width: '100%', marginTop: '14px', fontSize: '12px', justifyContent: 'center' }}>
              Abrir Cuentas por Cobrar
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity Table Card */}
      <div className="table-container" style={{ marginTop: '0' }}>
        <div className="table-actions-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-h)' }}>Actividad Reciente</h3>
            <div style={{ display: 'flex', gap: '4px', background: 'var(--bg-sidebar)', padding: '2px', borderRadius: '4px' }}>
              {['Todo', 'Ventas', 'Logística'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`btn`}
                  style={{
                    padding: '4px 10px',
                    fontSize: '12px',
                    border: 'none',
                    background: filter === tab ? 'var(--bg-card)' : 'transparent',
                    color: filter === tab ? 'var(--text-h)' : 'var(--text-muted)',
                    boxShadow: filter === tab ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <table className="erp-table">
          <thead>
            <tr>
              <th>Evento</th>
              <th>Entidad</th>
              <th>Operador</th>
              <th>Hora</th>
              <th>Valor</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {filteredActivities.map((act, index) => (
              <tr key={index}>
                <td style={{ fontWeight: '500', color: 'var(--text-h)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {act.status === 'PROCESANDO' && <Clock size={15} style={{ color: 'var(--accent)' }} />}
                  {act.status === 'EN TRÁNSITO' && <CheckCircle2 size={15} style={{ color: 'var(--success)' }} />}
                  {act.status === 'FALLIDO' && <XCircle size={15} style={{ color: 'var(--danger)' }} />}
                  {act.event}
                </td>
                <td style={{ fontFamily: 'monospace', color: 'var(--text-muted)' }}>{act.entity}</td>
                <td>{act.operator}</td>
                <td>{act.time}</td>
                <td style={{ fontWeight: '600', color: 'var(--text-h)' }}>{act.value}</td>
                <td>
                  <span className={`badge ${
                    act.status === 'PROCESANDO' ? 'badge-secondary' :
                    act.status === 'EN TRÁNSITO' ? 'badge-success' : 'badge-danger'
                  }`}>
                    {act.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
