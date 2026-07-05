import './GalleryCard.css';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
}


export function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <article className="gallery-card">
      <div className='gallery-card'>
        <img src={item.imageSrc} alt={item.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>
      <div className="gallery-overlay">
        <span className="gallery-category">{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  );
}
