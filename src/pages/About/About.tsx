import { PageHeader } from '../../components/PageHeader/PageHeader';
import './About.css';

const VALUES = [
  { icon: '🎯', title: 'Enfoque estudiantil', desc: 'Cada función se diseña pensando primero en la experiencia del estudiante.' },
  { icon: '🤝', title: 'Comunidad real', desc: 'Creemos que aprender juntos es más efectivo que aprender solos.' },
  { icon: '🔓', title: 'Acceso abierto', desc: 'El conocimiento compartido por la comunidad debe estar al alcance de todos.' }
];

export function About() {
  return (
    <div className="page-container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        eyebrow="🌌 Nosotros"
        title="La historia detrás de Rumabi Study"
        subtitle="Nacimos de una necesidad simple: reunir en un solo lugar todo lo disperso que vive la vida universitaria."
      />

      <div className="about-story glass-card">
        <p>
          Rumabi Study nació como un proyecto académico con una meta ambiciosa: dejar de depender de
          media docena de aplicaciones distintas para organizar la vida universitaria. Apuntes en un chat,
          horarios en una app, eventos en un grupo de mensajería, comunidades dispersas en distintas
          plataformas. Decidimos construir un único espacio, con identidad propia, que reuniera todo eso.
        </p>
        <p>
          
        </p>
      </div>

      <div className="grid-3 about-values">
        {VALUES.map((v) => (
          <div key={v.title} className="glass-card value-card">
            <span className="value-icon">{v.icon}</span>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
