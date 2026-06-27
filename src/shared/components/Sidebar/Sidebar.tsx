import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../config/routes';
import {
  LayoutDashboard, ShoppingCart, Package, Truck,
  DollarSign, BookOpen, Users, Route,
  BarChart3, Settings, Shield, ChevronDown, ChevronRight,
  FileText,
} from 'lucide-react';

interface SubMenuItem {
  label: string;
  path: string;
}

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  path?: string;
  children?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  { label: 'Dashboard', icon: <LayoutDashboard size={18} />, path: ROUTES.DASHBOARD },
  {
    label: 'Ventas', icon: <ShoppingCart size={18} />, path: ROUTES.VENTAS,
    children: [
      { label: 'POS', path: ROUTES.VENTAS_POS },
      { label: 'Facturación Electrónica', path: ROUTES.VENTAS_FACTURACION },
      { label: 'Cotizaciones', path: ROUTES.VENTAS_COTIZACIONES },
      { label: 'Pedidos', path: ROUTES.VENTAS_PEDIDOS },
      { label: 'Clientes', path: ROUTES.VENTAS_CLIENTES },
      { label: 'Vendedores', path: ROUTES.VENTAS_VENDEDORES },
      { label: 'Listas de Precio', path: ROUTES.VENTAS_LISTAS_PRECIO },
      { label: 'Catálogo Virtual', path: ROUTES.VENTAS_CATALOGO },
    ],
  },
  {
    label: 'Inventario', icon: <Package size={18} />, path: ROUTES.INVENTARIO,
    children: [
      { label: 'Productos', path: ROUTES.INVENTARIO_PRODUCTOS },
      { label: 'Categorías', path: ROUTES.INVENTARIO_CATEGORIAS },
      { label: 'Marcas', path: ROUTES.INVENTARIO_MARCAS },
      { label: 'Bodegas', path: ROUTES.INVENTARIO_BODEGAS },
      { label: 'Kardex', path: ROUTES.INVENTARIO_KARDEX },
      { label: 'Movimientos', path: ROUTES.INVENTARIO_MOVIMIENTOS },
      { label: 'Traslados', path: ROUTES.INVENTARIO_TRASLADOS },
      { label: 'Ajustes', path: ROUTES.INVENTARIO_AJUSTES },
      { label: 'Costeo', path: ROUTES.INVENTARIO_COSTEO },
      { label: 'Lotes', path: ROUTES.INVENTARIO_LOTES },
      { label: 'Series', path: ROUTES.INVENTARIO_SERIES },
      { label: 'Vencimientos', path: ROUTES.INVENTARIO_VENCIMIENTOS },
      { label: 'Carga Masiva', path: ROUTES.INVENTARIO_CARGA },
    ],
  },
  {
    label: 'Compras', icon: <Truck size={18} />, path: ROUTES.COMPRAS,
    children: [
      { label: 'Proveedores', path: ROUTES.COMPRAS_PROVEEDORES },
      { label: 'Órdenes de Compra', path: ROUTES.COMPRAS_ORDENES },
      { label: 'Recepción', path: ROUTES.COMPRAS_RECEPCION },
      { label: 'Facturas de Compra', path: ROUTES.COMPRAS_FACTURAS },
      { label: 'Gastos', path: ROUTES.COMPRAS_GASTOS },
      { label: 'Devoluciones', path: ROUTES.COMPRAS_DEVOLUCIONES },
      { label: 'Cuentas por Pagar', path: ROUTES.COMPRAS_CXP },
    ],
  },
  {
    label: 'Finanzas', icon: <DollarSign size={18} />, path: ROUTES.FINANZAS,
    children: [
      { label: 'Caja', path: ROUTES.FINANZAS_CAJA },
      { label: 'Arqueo', path: ROUTES.FINANZAS_ARQUEO },
      { label: 'Bancos', path: ROUTES.FINANZAS_BANCOS },
      { label: 'Cartera', path: ROUTES.FINANZAS_CARTERA },
      { label: 'Ingresos', path: ROUTES.FINANZAS_INGRESOS },
      { label: 'Egresos', path: ROUTES.FINANZAS_EGRESOS },
      { label: 'Pagos', path: ROUTES.FINANZAS_PAGOS },
    ],
  },
  {
    label: 'Contabilidad', icon: <BookOpen size={18} />, path: ROUTES.CONTABILIDAD,
    children: [
      { label: 'Plan de Cuentas', path: ROUTES.CONTABILIDAD_PLAN },
      { label: 'Comprobantes', path: ROUTES.CONTABILIDAD_COMPROBANTES },
      { label: 'Libro Diario', path: ROUTES.CONTABILIDAD_DIARIO },
      { label: 'Libro Mayor', path: ROUTES.CONTABILIDAD_MAYOR },
      { label: 'Balance General', path: ROUTES.CONTABILIDAD_BALANCE },
      { label: 'Balance de Prueba', path: ROUTES.CONTABILIDAD_PRUEBA },
      { label: 'Estado de Resultados', path: ROUTES.CONTABILIDAD_RESULTADOS },
      { label: 'Exógena', path: ROUTES.CONTABILIDAD_EXOGENA },
      { label: 'Certificados', path: ROUTES.CONTABILIDAD_CERTIFICADOS },
      { label: 'Centros de Costos', path: ROUTES.CONTABILIDAD_CENTROS },
      { label: 'NIIF', path: ROUTES.CONTABILIDAD_NIIF },
    ],
  },
  {
    label: 'RRHH', icon: <Users size={18} />, path: ROUTES.RRHH,
    children: [
      { label: 'Empleados', path: ROUTES.RRHH_EMPLEADOS },
      { label: 'Roles', path: ROUTES.RRHH_ROLES },
      { label: 'Nómina Electrónica', path: ROUTES.RRHH_NOMINA },
      { label: 'Vacaciones', path: ROUTES.RRHH_VACACIONES },
      { label: 'Horas Extras', path: ROUTES.RRHH_HORAS_EXTRAS },
      { label: 'Prestaciones', path: ROUTES.RRHH_PRESTACIONES },
    ],
  },
  {
    label: 'Logística', icon: <Route size={18} />, path: ROUTES.LOGISTICA,
    children: [
      { label: 'Despachos', path: ROUTES.LOGISTICA_DESPACHOS },
      { label: 'Rutas', path: ROUTES.LOGISTICA_RUTAS },
      { label: 'Entregas', path: ROUTES.LOGISTICA_ENTREGAS },
      { label: 'Transportadoras', path: ROUTES.LOGISTICA_TRANSPORTADORAS },
      { label: 'Seguimiento', path: ROUTES.LOGISTICA_SEGUIMIENTO },
    ],
  },
  {
    label: 'Reportes', icon: <BarChart3 size={18} />, path: ROUTES.REPORTES,
    children: [
      { label: 'Ventas', path: ROUTES.REPORTES_VENTAS },
      { label: 'Compras', path: ROUTES.REPORTES_COMPRAS },
      { label: 'Inventario', path: ROUTES.REPORTES_INVENTARIO },
      { label: 'Rentabilidad', path: ROUTES.REPORTES_RENTABILIDAD },
      { label: 'Utilidad', path: ROUTES.REPORTES_UTILIDAD },
      { label: 'Cartera', path: ROUTES.REPORTES_CARTERA },
      { label: 'Caja', path: ROUTES.REPORTES_CAJA },
      { label: 'Productos', path: ROUTES.REPORTES_PRODUCTOS },
      { label: 'Contabilidad', path: ROUTES.REPORTES_CONTABILIDAD },
    ],
  },
  {
    label: 'Administración', icon: <Shield size={18} />, path: ROUTES.ADMIN,
    children: [
      { label: 'Usuarios', path: ROUTES.ADMIN_USUARIOS },
      { label: 'Roles', path: ROUTES.ADMIN_ROLES },
      { label: 'Permisos', path: ROUTES.ADMIN_PERMISOS },
      { label: 'Sedes', path: ROUTES.ADMIN_SEDES },
      { label: 'Empresa', path: ROUTES.ADMIN_EMPRESA },
      { label: 'Auditoría', path: ROUTES.ADMIN_AUDITORIA },
    ],
  },
  { label: 'Configuración', icon: <Settings size={18} />, path: ROUTES.CONFIGURACION },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (label: string) => {
    setExpanded(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <FileText size={24} />
        <h2>Mi Negocio</h2>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <div key={item.label} className="sidebar-item-group">
            {item.children ? (
              <>
                <div
                  className="sidebar-item"
                  onClick={() => toggleExpand(item.label)}
                >
                  <span className="sidebar-item-icon">{item.icon}</span>
                  <span className="sidebar-item-label">{item.label}</span>
                  <span className="sidebar-chevron">
                    {expanded[item.label] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </span>
                </div>
                {expanded[item.label] && (
                  <div className="sidebar-submenu">
                    {item.children.map(child => (
                      <NavLink
                        key={child.label}
                        to={child.path}
                        className={({ isActive }) =>
                          `sidebar-subitem ${isActive ? 'active' : ''}`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <NavLink
                to={item.path!}
                className={({ isActive }) =>
                  `sidebar-item ${isActive ? 'active' : ''}`
                }
              >
                <span className="sidebar-item-icon">{item.icon}</span>
                <span className="sidebar-item-label">{item.label}</span>
              </NavLink>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
