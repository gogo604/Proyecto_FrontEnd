import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { Sidebar, SidebarItem } from '../../components/Sidebar/Sidebar';
import { TaskWidget } from '../../components/TaskWidget/TaskWidget';
import { ProfileWidget } from '../../components/ProfileWidget/ProfileWidget';
import './Dashboard.css';

interface ScheduleDay {
  day: string;
  slots: string[];
}

const DEFAULT_SCHEDULE: ScheduleDay[] = [
  { day: 'Lun', slots: ['Algoritmos', 'Bases de Datos'] },
  { day: 'Mar', slots: ['Inglés Técnico'] },
  { day: 'Mié', slots: ['Ing. de Software', 'Redes'] },
  { day: 'Jue', slots: ['Algoritmos'] },
  { day: 'Vie', slots: ['Proyecto de Grado'] }
];

const STORAGE_KEY = 'rumabi-schedule';

export function Dashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('schedule');
  const [schedule, setSchedule] = useState<ScheduleDay[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_SCHEDULE;
  });
  const [addingDay, setAddingDay] = useState<string | null>(null);
  const [newClassName, setNewClassName] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(schedule));
  }, [schedule]);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const submitNewClass = (e: FormEvent, day: string) => {
    e.preventDefault();
    if (!newClassName.trim()) return;
    setSchedule((prev) =>
      prev.map((d) => (d.day === day ? { ...d, slots: [...d.slots, newClassName.trim()] } : d))
    );
    setNewClassName('');
    setAddingDay(null);
  };

  const removeClass = (day: string, slot: string) => {
    setSchedule((prev) =>
      prev.map((d) => (d.day === day ? { ...d, slots: d.slots.filter((s) => s !== slot) } : d))
    );
  };

  const sidebarItems: SidebarItem[] = [
    { icon: '🗓️', label: 'Horario', onClick: () => scrollTo('schedule'), active: activeSection === 'schedule' },
    { icon: '✅', label: 'Tareas', onClick: () => scrollTo('tasks'), active: activeSection === 'tasks' },
    { icon: '📚', label: 'Apuntes', onClick: () => navigate('/biblioteca') },
    { icon: '👥', label: 'Grupos', onClick: () => navigate('/comunidad') },
    { icon: '📈', label: 'Progreso', onClick: () => scrollTo('progress'), active: activeSection === 'progress' }
  ];

  return (
    <div className="page-container">
      <PageHeader
        eyebrow="🧭 Tu panel personal"
        title="Dashboard"
        subtitle="Un resumen de tu semana académica: horario, tareas y progreso, todo en un solo lugar."
      />

      <div className="dashboard-grid">
        <Sidebar items={sidebarItems} />

        <div className="dashboard-main">
          <div id="schedule" className="glass-card schedule-card">
            <h3>Horario semanal</h3>
            <div className="schedule-grid">
              {schedule.map((d) => (
                <div key={d.day} className="schedule-day">
                  <span className="schedule-day-label">{d.day}</span>
                  {d.slots.map((s) => (
                    <span key={s} className="schedule-slot">
                      {s}
                      <button
                        className="schedule-slot-remove"
                        aria-label={`Quitar ${s}`}
                        onClick={() => removeClass(d.day, s)}
                      >
                        ×
                      </button>
                    </span>
                  ))}

                  {addingDay === d.day ? (
                    <form className="schedule-add-form" onSubmit={(e) => submitNewClass(e, d.day)}>
                      <input
                        autoFocus
                        value={newClassName}
                        onChange={(e) => setNewClassName(e.target.value)}
                        placeholder="Nombre de la clase"
                        onBlur={() => !newClassName && setAddingDay(null)}
                      />
                    </form>
                  ) : (
                    <button className="schedule-add-btn" onClick={() => setAddingDay(d.day)}>
                      + Añadir
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div id="tasks">
            <TaskWidget />
          </div>
        </div>

        <div className="dashboard-side">
          <ProfileWidget />
          <div id="progress" className="glass-card progress-card">
            <h4>Progreso del semestre</h4>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '68%' }} />
            </div>
            <span className="progress-label">98% completado</span>
          </div>
        </div>
      </div>
    </div>
  );
}
