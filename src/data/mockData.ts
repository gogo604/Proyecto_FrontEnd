import { EventItem } from '../components/EventCard/EventCard';
import { CommunityGroup } from '../components/CommunityCard/CommunityCard';
import { GalleryItem } from '../components/GalleryCard/GalleryCard';

export const EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'Feria de Ciencia de Datos',
    date: '14 Jul',
    location: 'Auditorio Central',
    category: 'Tecnología',
    description: 'Talleres prácticos sobre análisis de datos y machine learning aplicados a proyectos universitarios.'
  },
  {
    id: '2',
    title: 'Hackathon Rumabi 2026',
    date: '22 Jul',
    location: 'Laboratorio de Sistemas',
    category: 'Competencia',
    description: '24 horas de programación en equipo para resolver retos reales propuestos por empresas locales.'
  },
  {
    id: '3',
    title: 'Conferencia de Ingeniería de Software',
    date: '05 Ago',
    location: 'Aula Magna',
    category: 'Académico',
    description: 'Especialistas invitados comparten tendencias en arquitectura de software y buenas prácticas.'
  },
  {
    id: '4',
    title: 'Noche de Bienestar Estudiantil',
    date: '11 Ago',
    location: 'Patio Central',
    category: 'Bienestar',
    description: 'Espacio de descompresión con actividades recreativas antes de la temporada de exámenes.'
  }
];

export const COMMUNITY_GROUPS: CommunityGroup[] = [
  { id: '1', name: 'Programación', members: 482, icon: '💻', description: 'Algoritmos, estructuras de datos y proyectos colaborativos en código abierto.' },
  { id: '2', name: 'Matemáticas', members: 210, icon: '📐', description: 'Grupos de estudio para cálculo, álgebra lineal y métodos numéricos.' },
  { id: '3', name: 'Diseño', members: 165, icon: '🎨', description: 'UI/UX, diseño gráfico y crítica de proyectos entre pares.' },
  { id: '4', name: 'Ingeniería', members: 340, icon: '⚙️', description: 'Discusión técnica entre las distintas ramas de ingeniería del campus.' },
  { id: '5', name: 'Idiomas', members: 128, icon: '🌐', description: 'Práctica de inglés técnico y conversación para intercambios académicos.' },
  { id: '6', name: 'Emprendimiento', members: 97, icon: '🚀', description: 'Estudiantes desarrollando proyectos y startups desde la universidad.' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', title: 'Laboratorio de Redes', category: 'Laboratorios', imageSrc: 'https://departamento-ingenieria.pucp.edu.pe/wp-content/uploads/2022/09/laboratorios_Laboratorio-De-Conmutacion-Y-Redes-871x600.jpg', description: 'Equipamiento para prácticas de infraestructura y redes.' },
  { id: '2', title: 'Campus Central', category: 'Campus', imageSrc: 'https://elpotosi.net/img/contents/images_980/2026/03/04/56ddd64d-d258-42e5-8187-d7490014b031.jpg', description: 'Vista principal del campus universitario.' },
  { id: '3', title: 'Hackathon 2025', category: 'Eventos', imageSrc: 'https://media.wired.com/photos/5aac56eb491c2d69af42197d/3:2/w_1920,c_limit/Hackathons-RTS12CJ0.jpg', description: 'Estudiantes trabajando durante la última edición del hackathon.' },
  { id: '4', title: 'Club de Robótica', category: 'Clubes', imageSrc: 'https://www.clarin.com/img/2022/09/29/AwkLUtVF__1256x620__1.jpg', description: 'Prototipos desarrollados por el club de robótica.' },
  { id: '5', title: 'Biblioteca Central', category: 'Campus', imageSrc: 'https://elpotosi.net/img/contents/images_980/2020/02/05/9ebbc4c4-6540-4653-846f-80b8794dabd7.jpg', description: 'Espacio de estudio silencioso con recursos físicos y digitales.' },
  { id: '6', title: 'Feria Tecnológica', category: 'Eventos', imageSrc: 'https://elpotosi.net/img/contents/images_980/2025/10/01/0ee5dc95-a823-4527-98d6-6fe1ae166b83.jpg', description: 'Proyectos estudiantiles presentados a la comunidad.' }
];

export interface LibraryResource {
  id: string;
  title: string;
  subject: string;
  type: 'PDF' | 'Apuntes' | 'Video' | 'Ejercicios';
  author: string;
}

export const LIBRARY_RESOURCES: LibraryResource[] = [
  { id: '1', title: 'Subsecuencia Común Creciente Más Larga (LCIS)', subject: 'Algoritmos', type: 'PDF', author: 'Comunidad Rumabi' },
  { id: '2', title: 'Programación Dinámica — Guía práctica', subject: 'Algoritmos', type: 'Apuntes', author: 'J. Quispe' },
  { id: '3', title: 'Vocabulario Técnico en Inglés — IT', subject: 'Inglés', type: 'Ejercicios', author: 'Depto. de Idiomas' },
  { id: '4', title: 'Diagramas UML aplicados a proyectos reales', subject: 'Ing. de Software', type: 'Video', author: 'M. Fernández' },
  { id: '5', title: 'Bases de Datos Relacionales — Normalización', subject: 'Bases de Datos', type: 'Apuntes', author: 'Comunidad Rumabi' },
  { id: '6', title: 'Cálculo Multivariable — Ejercicios resueltos', subject: 'Matemáticas', type: 'PDF', author: 'A. Choque' }
];
