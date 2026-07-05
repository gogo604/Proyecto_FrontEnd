import './CommunityCard.css';

export interface CommunityGroup {
  id: string;
  name: string;
  members: number;
  icon: string;
  description: string;
}

interface CommunityCardProps {
  group: CommunityGroup;
  isJoined: boolean;
  onToggleJoin: () => void;
}

export function CommunityCard({ group, isJoined, onToggleJoin }: CommunityCardProps) {
  const displayedMembers = group.members + (isJoined ? 1 : 0);

  return (
    <article className="glass-card community-card">
      <div className="community-icon">{group.icon}</div>
      <h3>{group.name}</h3>
      <p className="community-desc">{group.description}</p>
      <div className="community-footer">
        <span className="community-members">{displayedMembers} miembros</span>
        <button
          className={'btn community-join' + (isJoined ? ' is-joined' : ' btn-ghost')}
          onClick={onToggleJoin}
        >
          {isJoined ? '✔ Unido' : 'Unirme'}
        </button>
      </div>
    </article>
  );
}
