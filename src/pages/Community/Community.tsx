import { useEffect, useState } from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { CommunityCard } from '../../components/CommunityCard/CommunityCard';
import { COMMUNITY_GROUPS } from '../../data/mockData';

const STORAGE_KEY = 'rumabi-joined-groups';

export function Community() {
  const [joined, setJoined] = useState<string[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(joined));
  }, [joined]);

  const toggleJoin = (id: string) => {
    setJoined((prev) => (prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]));
  };

  return (
    <div className="page-container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        eyebrow="👥 Comunidad"
        title="Grupos de estudio y comunidades"
        subtitle="Encuentra tu gente: conecta con estudiantes de tu carrera y de otras facultades para aprender juntos."
      />
      <div className="grid-3">
        {COMMUNITY_GROUPS.map((g) => (
          <CommunityCard
            key={g.id}
            group={g}
            isJoined={joined.includes(g.id)}
            onToggleJoin={() => toggleJoin(g.id)}
          />
        ))}
      </div>
    </div>
  );
}
