import { FormEvent, useEffect, useState } from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { EventCard, EventItem } from '../../components/EventCard/EventCard';
import { EVENTS } from '../../data/mockData';
import './Events.css';

const STORAGE_KEY = 'rumabi-personal-events';

export function Events() {
  const [personalEvents, setPersonalEvents] = useState<EventItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState({ title: '', day: '', month: '', location: '', description: '' });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(personalEvents));
  }, [personalEvents]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.day.trim() || !form.month.trim()) return;
    const newEvent: EventItem = {
      id: `personal-${Date.now()}`,
      title: form.title.trim(),
      date: `${form.day.trim()} ${form.month.trim().toUpperCase()}`,
      location: form.location.trim() || 'Sin ubicación',
      category: 'Personal',
      description: form.description.trim() || 'Evento personal — visible solo para ti.'
    };
    setPersonalEvents((prev) => [newEvent, ...prev]);
    setForm({ title: '', day: '', month: '', location: '', description: '' });
    setCreating(false);
  };

  const removePersonal = (id: string) => {
    setPersonalEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="page-container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        eyebrow="🗓️ Eventos"
        title="Actividades del campus"
        subtitle="Ferias, hackathons, conferencias y espacios de bienestar: no te pierdas nada de lo que pasa en tu universidad."
      />

      <button className="btn btn-primary event-create-btn" onClick={() => setCreating((v) => !v)}>
        {creating ? 'Cancelar' : '+ Crear evento personal'}
      </button>

      {creating && (
        <form className="glass-card event-form" onSubmit={submit}>
          <div className="event-form-grid">
            <label>
              Título
              <input required value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} placeholder="Ej. Entrega de proyecto" />
            </label>
            <label>
              Día
              <input required value={form.day} onChange={(e) => setForm((f) => ({ ...f, day: e.target.value }))} placeholder="18" />
            </label>
            <label>
              Mes
              <input required value={form.month} onChange={(e) => setForm((f) => ({ ...f, month: e.target.value }))} placeholder="Jul" />
            </label>
          </div>
          <label>
            Ubicación
            <input value={form.location} onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))} placeholder="Ej. Biblioteca Central" />
          </label>
          <label>
            Descripción
            <textarea rows={2} value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} placeholder="Detalles del evento" />
          </label>
          <button className="btn btn-primary" type="submit">Guardar evento</button>
          <p className="event-form-note">
            Este evento solo lo ves tú: queda guardado en este navegador, no se comparte con otros estudiantes.
          </p>
        </form>
      )}

      <div className="grid-3">
        {personalEvents.map((e) => (
          <EventCard key={e.id} event={e} isPersonal onDelete={() => removePersonal(e.id)} />
        ))}
        {EVENTS.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>
    </div>
  );
}
