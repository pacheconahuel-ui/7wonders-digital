import { PublicPlayerState } from '@7wonders/shared';

/** Quick visible-point estimate: civilian + military + treasury. Science/guild excluded (unknown until end). */
function estimateScore(p: PublicPlayerState): number {
  const civilian = p.builtStructures
    .flatMap(c => c.effects)
    .filter(e => e.type === 'victory_points')
    .reduce((s, e) => s + (e as any).points, 0);
  const military = p.militaryTokens.reduce((s, t) => s + t.value, 0);
  const treasury = Math.floor(p.coins / 3);
  return civilian + military + treasury;
}

interface Props {
  player: PublicPlayerState;
  isMe?: boolean;
}

export default function PlayerInfo({ player, isMe }: Props) {
  const pts = estimateScore(player);
  return (
    <div style={{
      background: isMe ? 'linear-gradient(135deg, #1a1610, #252015)' : 'var(--color-surface)',
      borderRadius: 8,
      padding: '6px 10px',
      border: isMe ? '1px solid var(--color-gold-dim)' : '1px solid var(--color-border)',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: '0.8rem',
      flex: '1 1 auto',
      minWidth: 0,
    }}>
      <div style={{ fontWeight: 700, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
        {isMe ? '⭐ ' : ''}
        <span style={{ color: isMe ? 'var(--color-gold)' : 'var(--color-text)' }}>{player.name}</span>
        {player.hasChosen && <span style={{ marginLeft: 5, color: 'var(--color-success)', fontSize: '0.72rem' }}>✓</span>}
      </div>
      <span title="Monedas" style={{ whiteSpace: 'nowrap' }}>💰{player.coins}</span>
      <span title="Escudos militares" style={{ whiteSpace: 'nowrap' }}>🛡{player.shields}</span>
      <span
        title="Puntos visibles estimados (civil + militar + tesoro). No incluye ciencia ni guilds."
        style={{ whiteSpace: 'nowrap', color: 'var(--color-gold)', fontWeight: 700 }}
      >
        {pts}⭐
      </span>
    </div>
  );
}
