import './ApiCard.css';

export interface UniversityResult {
  name: string;
  country: string;
  website: string;
}

export function ApiCard({ uni }: { uni: UniversityResult }) {
  return (
    <article className="glass-card api-card">
      <div className="api-card-icon">🎓</div>
      <h3>{uni.name}</h3>
      <p className="api-country">🌐 {uni.country}</p>
      <a href={uni.website} target="_blank" rel="noreferrer" className="api-link">
        {uni.website.replace(/^https?:\/\//, '')} ↗
      </a>
    </article>
  );
}
