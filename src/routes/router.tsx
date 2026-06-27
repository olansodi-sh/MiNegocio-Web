import { createBrowserRouter, Navigate } from 'react-router-dom';
import ErpLayout from './_erp/layout';
import Dashboard from './_erp/dashboard';
import VentasPage from './_erp/ventas';
import POSPage from './_erp/ventas/pos';
import FacturacionPage from './_erp/ventas/facturacion';
import CotizacionesPage from './_erp/ventas/cotizaciones';
import PedidosPage from './_erp/ventas/pedidos';
import ClientesPage from './_erp/ventas/clientes';
import VendedoresPage from './_erp/ventas/vendedores';
import ListasPrecioPage from './_erp/ventas/listas-precio';
import CatalogoVirtualPage from './_erp/ventas/catalogo';
import InventarioPage from './_erp/inventario';
import ProductosPage from './_erp/inventario/productos';
import CategoriasPage from './_erp/inventario/categorias';
import MarcasPage from './_erp/inventario/marcas';
import BodegasPage from './_erp/inventario/bodegas';
import KardexPage from './_erp/inventario/kardex';
import MovimientosPage from './_erp/inventario/movimientos';
import TrasladosPage from './_erp/inventario/traslados';
import AjustesPage from './_erp/inventario/ajustes';
import CosteoPage from './_erp/inventario/costeo';
import LotesPage from './_erp/inventario/lotes';
import SeriesPage from './_erp/inventario/series';
import VencimientosPage from './_erp/inventario/vencimientos';
import CargaMasivaPage from './_erp/inventario/carga-masiva';
import ComprasPage from './_erp/compras';
import ProveedoresPage from './_erp/compras/proveedores';
import OrdenesPage from './_erp/compras/ordenes';
import RecepcionPage from './_erp/compras/recepcion';
import FacturasCompraPage from './_erp/compras/facturas';
import GastosPage from './_erp/compras/gastos';
import DevolucionesPage from './_erp/compras/devoluciones';
import CuentasPagarPage from './_erp/compras/cuentas-pagar';
import FinanzasPage from './_erp/finanzas';
import CajaPage from './_erp/finanzas/caja';
import ArqueoPage from './_erp/finanzas/arqueo';
import BancosPage from './_erp/finanzas/bancos';
import CarteraPage from './_erp/finanzas/cartera';
import IngresosPage from './_erp/finanzas/ingresos';
import EgresosPage from './_erp/finanzas/egresos';
import PagosPage from './_erp/finanzas/pagos';
import ContabilidadPage from './_erp/contabilidad';
import PlanCuentasPage from './_erp/contabilidad/plan-cuentas';
import ComprobantesPage from './_erp/contabilidad/comprobantes';
import DiarioPage from './_erp/contabilidad/diario';
import MayorPage from './_erp/contabilidad/mayor';
import BalanceGeneralPage from './_erp/contabilidad/balance-general';
import BalancePruebaPage from './_erp/contabilidad/balance-prueba';
import EstadoResultadosPage from './_erp/contabilidad/estado-resultados';
import ExogenaPage from './_erp/contabilidad/exogena';
import CertificadosPage from './_erp/contabilidad/certificados';
import CentrosCostosPage from './_erp/contabilidad/centros-costos';
import NIIFPage from './_erp/contabilidad/niif';
import RRHHPage from './_erp/rrhh';
import EmpleadosPage from './_erp/rrhh/empleados';
import RolesRRHHPage from './_erp/rrhh/roles';
import NominaPage from './_erp/rrhh/nomina';
import VacacionesPage from './_erp/rrhh/vacaciones';
import HorasExtrasPage from './_erp/rrhh/horas-extras';
import PrestacionesPage from './_erp/rrhh/prestaciones';
import LogisticaPage from './_erp/logistica';
import DespachosPage from './_erp/logistica/despachos';
import RutasPage from './_erp/logistica/rutas';
import EntregasPage from './_erp/logistica/entregas';
import TransportadorasPage from './_erp/logistica/transportadoras';
import SeguimientoPage from './_erp/logistica/seguimiento';
import ReportesPage from './_erp/reportes';
import ReporteVentasPage from './_erp/reportes/ventas';
import ReporteComprasPage from './_erp/reportes/compras';
import ReporteInventarioPage from './_erp/reportes/inventario';
import RentabilidadPage from './_erp/reportes/rentabilidad';
import UtilidadPage from './_erp/reportes/utilidad';
import ReporteCarteraPage from './_erp/reportes/cartera';
import ReporteCajaPage from './_erp/reportes/caja';
import ReporteProductosPage from './_erp/reportes/productos';
import ReporteContabilidadPage from './_erp/reportes/contabilidad';
import AdminPage from './_erp/admin';
import UsuariosPage from './_erp/admin/usuarios';
import RolesAdminPage from './_erp/admin/roles';
import PermisosPage from './_erp/admin/permisos';
import SedesPage from './_erp/admin/sedes';
import EmpresaPage from './_erp/admin/empresa';
import AuditoriaPage from './_erp/admin/auditoria';
import ConfiguracionPage from './_erp/configuracion';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/erp/dashboard" replace />,
  },
  {
    path: '/erp',
    element: <ErpLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: 'dashboard', element: <Dashboard /> },
      {
        path: 'ventas',
        children: [
          { index: true, element: <VentasPage /> },
          { path: 'pos', element: <POSPage /> },
          { path: 'facturacion', element: <FacturacionPage /> },
          { path: 'cotizaciones', element: <CotizacionesPage /> },
          { path: 'pedidos', element: <PedidosPage /> },
          { path: 'clientes', element: <ClientesPage /> },
          { path: 'vendedores', element: <VendedoresPage /> },
          { path: 'listas-precio', element: <ListasPrecioPage /> },
          { path: 'catalogo', element: <CatalogoVirtualPage /> },
        ],
      },
      {
        path: 'inventario',
        children: [
          { index: true, element: <InventarioPage /> },
          { path: 'productos', element: <ProductosPage /> },
          { path: 'categorias', element: <CategoriasPage /> },
          { path: 'marcas', element: <MarcasPage /> },
          { path: 'bodegas', element: <BodegasPage /> },
          { path: 'kardex', element: <KardexPage /> },
          { path: 'movimientos', element: <MovimientosPage /> },
          { path: 'traslados', element: <TrasladosPage /> },
          { path: 'ajustes', element: <AjustesPage /> },
          { path: 'costeo', element: <CosteoPage /> },
          { path: 'lotes', element: <LotesPage /> },
          { path: 'series', element: <SeriesPage /> },
          { path: 'vencimientos', element: <VencimientosPage /> },
          { path: 'carga-masiva', element: <CargaMasivaPage /> },
        ],
      },
      {
        path: 'compras',
        children: [
          { index: true, element: <ComprasPage /> },
          { path: 'proveedores', element: <ProveedoresPage /> },
          { path: 'ordenes', element: <OrdenesPage /> },
          { path: 'recepcion', element: <RecepcionPage /> },
          { path: 'facturas', element: <FacturasCompraPage /> },
          { path: 'gastos', element: <GastosPage /> },
          { path: 'devoluciones', element: <DevolucionesPage /> },
          { path: 'cuentas-pagar', element: <CuentasPagarPage /> },
        ],
      },
      {
        path: 'finanzas',
        children: [
          { index: true, element: <FinanzasPage /> },
          { path: 'caja', element: <CajaPage /> },
          { path: 'arqueo', element: <ArqueoPage /> },
          { path: 'bancos', element: <BancosPage /> },
          { path: 'cartera', element: <CarteraPage /> },
          { path: 'ingresos', element: <IngresosPage /> },
          { path: 'egresos', element: <EgresosPage /> },
          { path: 'pagos', element: <PagosPage /> },
        ],
      },
      {
        path: 'contabilidad',
        children: [
          { index: true, element: <ContabilidadPage /> },
          { path: 'plan-cuentas', element: <PlanCuentasPage /> },
          { path: 'comprobantes', element: <ComprobantesPage /> },
          { path: 'diario', element: <DiarioPage /> },
          { path: 'mayor', element: <MayorPage /> },
          { path: 'balance-general', element: <BalanceGeneralPage /> },
          { path: 'balance-prueba', element: <BalancePruebaPage /> },
          { path: 'estado-resultados', element: <EstadoResultadosPage /> },
          { path: 'exogena', element: <ExogenaPage /> },
          { path: 'certificados', element: <CertificadosPage /> },
          { path: 'centros-costos', element: <CentrosCostosPage /> },
          { path: 'niif', element: <NIIFPage /> },
        ],
      },
      {
        path: 'rrhh',
        children: [
          { index: true, element: <RRHHPage /> },
          { path: 'empleados', element: <EmpleadosPage /> },
          { path: 'roles', element: <RolesRRHHPage /> },
          { path: 'nomina', element: <NominaPage /> },
          { path: 'vacaciones', element: <VacacionesPage /> },
          { path: 'horas-extras', element: <HorasExtrasPage /> },
          { path: 'prestaciones', element: <PrestacionesPage /> },
        ],
      },
      {
        path: 'logistica',
        children: [
          { index: true, element: <LogisticaPage /> },
          { path: 'despachos', element: <DespachosPage /> },
          { path: 'rutas', element: <RutasPage /> },
          { path: 'entregas', element: <EntregasPage /> },
          { path: 'transportadoras', element: <TransportadorasPage /> },
          { path: 'seguimiento', element: <SeguimientoPage /> },
        ],
      },
      {
        path: 'reportes',
        children: [
          { index: true, element: <ReportesPage /> },
          { path: 'ventas', element: <ReporteVentasPage /> },
          { path: 'compras', element: <ReporteComprasPage /> },
          { path: 'inventario', element: <ReporteInventarioPage /> },
          { path: 'rentabilidad', element: <RentabilidadPage /> },
          { path: 'utilidad', element: <UtilidadPage /> },
          { path: 'cartera', element: <ReporteCarteraPage /> },
          { path: 'caja', element: <ReporteCajaPage /> },
          { path: 'productos', element: <ReporteProductosPage /> },
          { path: 'contabilidad', element: <ReporteContabilidadPage /> },
        ],
      },
      {
        path: 'admin',
        children: [
          { index: true, element: <AdminPage /> },
          { path: 'usuarios', element: <UsuariosPage /> },
          { path: 'roles', element: <RolesAdminPage /> },
          { path: 'permisos', element: <PermisosPage /> },
          { path: 'sedes', element: <SedesPage /> },
          { path: 'empresa', element: <EmpresaPage /> },
          { path: 'auditoria', element: <AuditoriaPage /> },
        ],
      },
      { path: 'configuracion', element: <ConfiguracionPage /> },
    ],
  },
]);
