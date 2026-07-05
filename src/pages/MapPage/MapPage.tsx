import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import 'leaflet/dist/leaflet.css';
import '../../leafletIconFix';
import './MapPage.css';

// Coordenadas de referencia: Universidad Mayor de San Andrés (UMSA), La Paz, Bolivia
const CAMPUS_CENTER: [number, number] = [-16.5402, -68.0713];

const POINTS: { name: string; pos: [number, number]; desc: string }[] = [
  { name: 'Facultad de Ingeniería', pos: [-16.5399, -68.0709], desc: 'Edificio principal de carreras de ingeniería.' },
  { name: 'Biblioteca Central', pos: [-16.5406, -68.0718], desc: 'Sala de estudio y acervo bibliográfico.' },
  { name: 'Laboratorio de Sistemas', pos: [-16.5395, -68.0721], desc: 'Equipos y talleres prácticos.' },
  { name: 'Auditorio Central', pos: [-16.5409, -68.0705], desc: 'Sede de conferencias y eventos institucionales.' }
];

export function MapPage() {
  return (
    <div className="page-container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        eyebrow="🗺️ Mapa"
        title="Ubícate en el campus"
        subtitle="Explora los principales puntos de la universidad. Referencia: Universidad Mayor de San Andrés, La Paz."
      />

      <div className="map-shell glass">
        <MapContainer center={CAMPUS_CENTER} zoom={16} scrollWheelZoom={false} className="map-canvas">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {POINTS.map((p) => (
            <Marker key={p.name} position={p.pos}>
              <Popup>
                <strong>{p.name}</strong>
                <br />
                {p.desc}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="map-legend">
        {POINTS.map((p) => (
          <div key={p.name} className="glass-card map-legend-item">
            <h4>{p.name}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
