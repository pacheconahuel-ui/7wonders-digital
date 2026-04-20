import { PublicGameState } from '@7wonders/shared';
import CardView from '../components/CardView';

interface Props {
  state: PublicGameState;
}

export default function RevealDisplay({ state }: Props) {
  return (
    <div style={{
      maxWidth: 700,
      margin: '60px auto',
      padding: '0 24px',
      textAlign: 'center',
    }}>
      <h2 style={{ fontSize: '1.6rem', marginBottom: 8 }}>⚡ Reveal — Era {state.age} · Turno {state.turn}</h2>
      <p style={{ color: 'var(--color-text-dim)', marginBottom: 32 }}>Todos eligieron. Procesando acciones…</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {state.players.map((p, i) => {
          const isMe = i === state.myIndex;
          const myCard = isMe && state.myState.pendingAction
            ? state.myState.hand.find(c => c.id === state.myState.pendingAction!.cardId)
            : null;

          return (
            <div
              key={p.id}
              style={{
                background: 'var(--color-surface)',
                borderRadius: 10,
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                border: isMe ? '2px solid var(--color-accent)' : '2px solid transparent',
              }}
            >
              <div style={{ fontWeight: 700, minWidth: 100 }}>
                {isMe ? '⭐ ' : ''}{p.name}
              </div>

              {myCard ? (
                <CardView card={myCard} />
              ) : (
                <div style={{
                  width: 120, height: 80,
                  background: 'var(--color-surface2)',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-dim)',
                  fontSize: '0.8rem',
                }}>
                  {p.hasChosen ? '✓ Jugada' : '⏳'}
                </div>
              )}

              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>
                {isMe && state.myState.pendingAction
                  ? state.myState.pendingAction.action.type === 'build_structure'
                    ? '🏗 Construye'
                    : state.myState.pendingAction.action.type === 'build_wonder_stage'
                    ? '🏛 Maravilla'
                    : '🗑 Descarta'
                  : ''}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
