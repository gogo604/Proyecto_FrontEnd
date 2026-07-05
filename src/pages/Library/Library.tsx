import { FormEvent, useEffect, useMemo, useState } from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { LIBRARY_RESOURCES, LibraryResource } from '../../data/mockData';
import './Library.css';

const TYPE_ICON: Record<string, string> = {
  PDF: '📄',
  Apuntes: '📝',
  Video: '🎬',
  Ejercicios: '🧩'
};

const UPLOADS_KEY = 'rumabi-uploaded-resources';

interface UploadedResource extends LibraryResource {
  mine: true;
}

export function Library() {
  const [query, setQuery] = useState('');
  const [viewing, setViewing] = useState<LibraryResource | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState<UploadedResource[]>(() => {
    const saved = localStorage.getItem(UPLOADS_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [form, setForm] = useState({ title: '', subject: '', type: 'Apuntes' as LibraryResource['type'] });

  useEffect(() => {
    localStorage.setItem(UPLOADS_KEY, JSON.stringify(uploaded));
  }, [uploaded]);

  const allResources = useMemo(() => [...uploaded, ...LIBRARY_RESOURCES], [uploaded]);

  const filtered = useMemo(
    () =>
      allResources.filter((r) =>
        (r.title + r.subject + r.author).toLowerCase().includes(query.toLowerCase())
      ),
    [query, allResources]
  );

  const submitUpload = (e: FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.subject.trim()) return;
    const newResource: UploadedResource = {
      id: `mine-${Date.now()}`,
      title: form.title.trim(),
      subject: form.subject.trim(),
      type: form.type,
      author: 'Tú',
      mine: true
    };
    setUploaded((prev) => [newResource, ...prev]);
    setForm({ title: '', subject: '', type: 'Apuntes' });
    setUploading(false);
  };

  return (
    <div className="page-container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        eyebrow="📚 Biblioteca"
        title="Apuntes y recursos compartidos"
        subtitle="Materiales subidos por la comunidad: apuntes, guías, ejercicios y videos organizados por materia."
      />

      <div className="library-toolbar">
        <input
          className="library-search glass"
          placeholder="Buscar por título, materia o autor..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => setUploading((v) => !v)}>
          {uploading ? 'Cancelar' : '+ Subir apunte'}
        </button>
      </div>

      {uploading && (
        <form className="glass-card upload-form" onSubmit={submitUpload}>
          <div className="upload-grid">
            <label>
              Título
              <input
                required
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                placeholder="Ej. Resumen de Estructuras de Datos"
              />
            </label>
            <label>
              Materia
              <input
                required
                value={form.subject}
                onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                placeholder="Ej. Algoritmos"
              />
            </label>
            <label>
              Tipo
              <select
                value={form.type}
                onChange={(e) => setForm((f) => ({ ...f, type: e.target.value as LibraryResource['type'] }))}
              >
                <option>Apuntes</option>
                <option>PDF</option>
                <option>Video</option>
                <option>Ejercicios</option>
              </select>
            </label>
          </div>
          <button className="btn btn-primary" type="submit">Publicar</button>
          <p className="upload-note">
            Nota: esto es solo una vista previa de frontend. Tu archivo no se sube a ningún servidor;
            el recurso queda guardado en este navegador hasta que un backend real lo respalde.
          </p>
        </form>
      )}

      <div className="library-list">
        {filtered.map((r) => (
          <div key={r.id} className="glass-card library-item">
            <span className="library-icon">{TYPE_ICON[r.type]}</span>
            <div className="library-info">
              <h3>{r.title} {'mine' in r && <span className="library-mine-badge">Tuyo</span>}</h3>
              <span className="library-meta">{r.subject} · {r.author}</span>
            </div>
            <span className="library-type">{r.type}</span>
            <button className="btn btn-ghost library-view-btn" onClick={() => setViewing(r)}>Ver</button>
          </div>
        ))}
        {filtered.length === 0 && <p className="library-empty">No se encontraron recursos para "{query}".</p>}
      </div>

      {viewing && (
        <div className="library-modal-backdrop" onClick={() => setViewing(null)}>
          <div className="glass-card library-modal" onClick={(e) => e.stopPropagation()}>
            <span className="library-icon" style={{ fontSize: '1.8rem' }}>{TYPE_ICON[viewing.type]}</span>
            <h3>{viewing.title}</h3>
            <p className="library-meta">{viewing.subject} · Subido por {viewing.author}</p>
            <p className="upload-note" style={{ marginTop: '1rem' }}>
              Vista previa de frontend: aquí se mostraría el contenido real (PDF, video o texto) una vez
              conectado a un almacenamiento de archivos.
            </p>
            <button className="btn btn-ghost" onClick={() => setViewing(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}
