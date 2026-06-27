interface ModulePageProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function ModulePage({ icon, title, description, children }: ModulePageProps) {
  return (
    <div className="page">
      <div className="page-header">
        {icon}
        <h1>{title}</h1>
      </div>
      <div className="page-description">{description}</div>
      {children && <div className="page-content">{children}</div>}
    </div>
  );
}
