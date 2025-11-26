import { Section } from './Section';

interface NotablePlayersProps {
  players: string[];
}

export function NotablePlayers({ players }: NotablePlayersProps) {
  return (
    <Section>
      <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-8 text-center">Joueurs Ayant Brillé au Club</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {players.map((name, i) => (
          <span key={i} className="bg-white text-primary-800 font-medium px-4 py-2 rounded-full shadow-sm border border-neutral-200">
            {name}
          </span>
        ))}
      </div>
    </Section>
  );
}