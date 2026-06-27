import ModulePage from '../../../shared/components/ModulePage';
import { GitBranch } from 'lucide-react';

export default function CentrosCostosPage() {
  return <ModulePage icon={<GitBranch size={28} />} title="Centros de Costos" description="Costos por departamento" />;
}
