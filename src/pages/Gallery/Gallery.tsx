import { PageHeader } from '../../components/PageHeader/PageHeader';
import { GalleryCard } from '../../components/GalleryCard/GalleryCard';
import { GALLERY_ITEMS } from '../../data/mockData';
import './Gallery.css';

export function Gallery() {
  return (
    <div className="page-container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        eyebrow="🖼️ Galería"
        title="Vida universitaria en imágenes"
        subtitle="Laboratorios, campus, eventos y clubes: un vistazo visual a la comunidad Rumabi."
      />
      <div className="gallery-grid">
        {GALLERY_ITEMS.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>
      
    </div>
  );
}
