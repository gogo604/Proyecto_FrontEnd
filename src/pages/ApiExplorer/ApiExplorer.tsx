import { FormEvent, useState } from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ApiCard, UniversityResult } from '../../components/ApiCard/ApiCard';
import './ApiExplorer.css';

/**
 * Consume la API pública "Universities API" (http://universities.hipolabs.com)
 * para buscar universidades reales por país. No requiere API key.
 */
export function ApiExplorer() {
  const [country, setCountry] = useState('Bolivia');
  const [results, setResults] = useState<UniversityResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const search = async (e?: FormEvent) => {
    e?.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(
        `http://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`
      );
      if (!res.ok) throw new Error('Error de red');
      const data = await res.json();
      setResults(
        data.slice(0, 12).map((u: any) => ({
          name: u.name,
          country: u.country,
          website: u.web_pages?.[0] || '#'
        }))
      );
    } catch {
      setError('No se pudo conectar con la API. Verifica tu conexión a internet.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        eyebrow="🔌 API Explorer"
        title="Explora universidades del mundo"
        subtitle="Datos en vivo desde la Universities API — busca por país y descubre instituciones reales."
      />

      <form className="api-form glass" onSubmit={search}>
        <input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Nombre del país, ej. Bolivia"
        />
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {error && <p className="api-error">{error}</p>}

      <div className="grid-3 api-results">
        {results.map((u, i) => (
          <ApiCard key={i} uni={u} />
        ))}
      </div>

      {!loading && results.length === 0 && !error && (
        <p className="api-hint">Escribe un país y presiona "Buscar" para ver resultados en tiempo real.</p>
      )}
    </div>
  );
}
