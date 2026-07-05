import './EventCard.css';

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
}

interface EventCardProps {
  event: EventItem;
  isPersonal?: boolean;
  onDelete?: () => void;
}

export function EventCard({ event, isPersonal, onDelete }: EventCardProps) {
  return (
    <article className={'glass-card event-card' + (isPersonal ? ' is-personal' : '')}>
      <div className="event-card-date">
        <span className="event-day">{event.date.split(' ')[0]}</span>
        <span className="event-month">{event.date.split(' ')[1]}</span>
      </div>
      <div className="event-card-body">
        <span className="event-tag">
          {event.category}
          {isPersonal && <span className="event-personal-badge">Mi evento</span>}
        </span>
        <h3>{event.title}</h3>
        <p className="event-location">📍 {event.location}</p>
        <p className="event-desc">{event.description}</p>
      </div>
      {isPersonal && onDelete && (
        <button className="event-delete" aria-label="Eliminar evento" onClick={onDelete}>×</button>
      )}
    </article>
  );
}
