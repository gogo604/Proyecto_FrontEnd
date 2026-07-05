import './ProfileWidget.css';

export function ProfileWidget() {
  return (
    <div className="glass-card profile-widget">
      <div className="profile-avatar">ES</div>
      <h3>Estudiante Rumabi</h3>
      <p className="profile-role">Ingeniería Informática — 4to semestre</p>
      <div className="profile-stats">
        <div>
          <strong>18</strong>
          <span>Apuntes</span>
        </div>
        <div>
          <strong>5</strong>
          <span>Grupos</span>
        </div>
        <div>
          <strong>42%</strong>
          <span>Progreso</span>
        </div>
      </div>
    </div>
  );
}
