import ModulePage from '../../../shared/components/ModulePage';
import { BookOpen } from 'lucide-react';

export default function ContabilidadPage() {
  return (
    <ModulePage icon={<BookOpen size={28} />} title="Contabilidad" description="Información contable de la empresa">
      <div className="submodule-grid">
        {[
          { label: 'Plan de Cuentas', desc: 'Catálogo de cuentas contables' },
          { label: 'Comprobantes', desc: 'Registros contables' },
          { label: 'Libro Diario', desc: 'Registro cronológico de operaciones' },
          { label: 'Libro Mayor', desc: 'Agrupación por cuentas' },
          { label: 'Balance General', desc: 'Situación financiera' },
          { label: 'Balance de Prueba', desc: 'Verificación de saldos' },
          { label: 'Estado de Resultados', desc: 'Ganancias y pérdidas' },
          { label: 'Exógena', desc: 'Reportes a la DIAN' },
          { label: 'Certificados', desc: 'Certificados contables' },
          { label: 'Centros de Costos', desc: 'Costos por departamento' },
          { label: 'NIIF', desc: 'Normas internacionales' },
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
