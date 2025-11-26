import { Award } from 'lucide-react';
import type { PlayerAchievement } from '~/data/histoireData';
import { Section } from './Section';
import { Card } from './Card';

interface PlayerAchievementsProps {
  achievements: PlayerAchievement[];
}

export function PlayerAchievements({ achievements }: PlayerAchievementsProps) {
  return (
    <Section className="mb-20">
      <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-12 text-center">Palmarès des Joueurs Emblématiques</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((player, index) => (
          <Card key={player.name} delay={index * 0.1} className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-primary-600 mr-3" />
              <h3 className="font-bold text-xl text-primary-800">{player.name}</h3>
            </div>
            <ul className="space-y-3">
              {player.achievements.map((ach, i) => (
                <li key={i} className="flex items-start text-sm text-neutral-700 border-t border-neutral-100 pt-3">
                  <span className="font-mono text-xs bg-neutral-100 text-neutral-600 rounded px-2 py-0.5 mr-3">{ach.year}</span>
                  <span>{ach.title}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}