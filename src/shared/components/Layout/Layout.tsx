import Sidebar from '../Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="erp-layout">
      <Sidebar />
      <main className="erp-main">
        {children}
      </main>
    </div>
  );
}
