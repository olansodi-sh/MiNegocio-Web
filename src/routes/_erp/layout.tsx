import { Outlet } from 'react-router-dom';
import Layout from '../../shared/components/Layout';

export default function ErpLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
