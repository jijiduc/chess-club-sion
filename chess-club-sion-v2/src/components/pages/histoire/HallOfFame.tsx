import { Award, Star } from 'lucide-react';
import type { HallOfFamePlayer } from '~/data/histoireData';
import { Section } from './Section';

interface HallOfFameProps {
  players: HallOfFamePlayer[];
}

export function HallOfFame({ players }: HallOfFameProps) {
  return (
    <Section className="h-full">
      <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8 text-center flex items-center justify-center gap-3">
        <Star className="h-8 w-8 text-amber-500 fill-amber-500" />
        Hall of Fame
      </h2>

      <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden h-full flex flex-col">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-3 w-full" />
        
        <ul className="divide-y divide-neutral-100">
          {players.map((player, i) => {
            const isGM = player.title.includes('Grand Maître');
            return (
              <li key={i} className="p-4 hover:bg-amber-50/30 transition-colors flex items-center gap-4">
                <div className={`p-2 rounded-full ${isGM ? 'bg-amber-100 text-amber-600' : 'bg-primary-100 text-primary-600'}`}>
                  <Award className="h-6 w-6" />
                </div>
                
                <div className="flex-grow min-w-0">
                  <p className="font-bold text-neutral-900 truncate">{player.name}</p>
                  <p className={`text-xs truncate ${isGM ? 'text-amber-600 font-medium' : 'text-primary-600'}`}>
                    {player.title}
                  </p>
                </div>
                
                <div className="flex flex-col items-end">
                  <span className="text-xs text-neutral-400 mb-0.5">(meilleur elo atteint)</span>
                  <span className="font-mono font-bold text-neutral-800 bg-neutral-100 px-2 py-1 rounded text-sm">
                    {player.elo}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}