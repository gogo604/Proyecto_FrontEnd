import { FormEvent, useState } from 'react';
import './ContactForm.css';

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="glass-card contact-success">
        <span className="contact-success-icon">✔</span>
        <h3>Mensaje enviado</h3>
        <p>Gracias por escribirnos. Te responderemos en menos de 48 horas.</p>
      </div>
    );
  }

  return (
    <form className="glass-card contact-form" onSubmit={handleSubmit}>
      <div className="contact-grid">
        <label>
          Nombre completo
          <input type="text" required placeholder="Tu nombre" />
        </label>
        <label>
          Correo electrónico
          <input type="email" required placeholder="tucorreo@universidad.edu" />
        </label>
      </div>
      <label>
        Asunto
        <select required defaultValue="">
          <option value="" disabled>Selecciona un motivo</option>
          <option>Soporte técnico</option>
          <option>Sugerencia</option>
          <option>Alianza institucional</option>
          <option>Otro</option>
        </select>
      </label>
      <label>
        Mensaje
        <textarea rows={5} required placeholder="Cuéntanos en qué podemos ayudarte..." />
      </label>
      <button type="submit" className="btn btn-primary">Enviar mensaje</button>
    </form>
  );
}
