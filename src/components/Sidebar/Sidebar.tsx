import './Sidebar.css';

export interface SidebarItem {
  icon: string;
  label: string;
  onClick: () => void;
  active?: boolean;
}

export function Sidebar({ items }: { items: SidebarItem[] }) {
  return (
    <aside className="glass-card sidebar">
      <h4 className="sidebar-title">Accesos rápidos</h4>
      <nav className="sidebar-nav">
        {items.map((item) => (
          <button
            key={item.label}
            className={'sidebar-item' + (item.active ? ' is-active' : '')}
            onClick={item.onClick}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
