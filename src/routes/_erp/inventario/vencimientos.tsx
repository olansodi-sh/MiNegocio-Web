import ModulePage from '../../../shared/components/ModulePage';
import { CalendarX } from 'lucide-react';

export default function VencimientosPage() {
  return (
    <ModulePage icon={<CalendarX size={28} />} title="Vencimientos" description="Control de fechas de expiración" />
  );
}
