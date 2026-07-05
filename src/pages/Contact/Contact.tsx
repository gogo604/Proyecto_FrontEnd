import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import './Contact.css';

export function Contact() {
  return (
    <div className="page-container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        eyebrow="✉️ Contacto"
        title="Hablemos"
        subtitle="¿Dudas, sugerencias o quieres proponer una alianza institucional? Escríbenos."
      />

      <div className="contact-layout">
        <ContactForm />

        <div className="contact-info">
          <div className="glass-card contact-info-card">
            <h4>Correo</h4>
            <p>contacto@rumabistudy.edu.bo</p>
          </div>
          <div className="glass-card contact-info-card">
            <h4>Soporte técnico</h4>
            <p>Respuesta en menos de 48 horas hábiles.</p>
          </div>
          <div className="glass-card contact-info-card">
            <h4>Redes</h4>
            <p>@rumabistudy en todas las plataformas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
