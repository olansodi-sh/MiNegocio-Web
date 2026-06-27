import ModulePage from '../../../shared/components/ModulePage';
import { ShieldCheck } from 'lucide-react';

export default function RolesAdminPage() {
  return <ModulePage icon={<ShieldCheck size={28} />} title="Roles" description="Crear perfiles de acceso" />;
}
