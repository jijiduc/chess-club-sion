import { User } from 'lucide-react';
import type { Personality } from '~/data/histoireData';
import { Section } from './Section';
import { Card } from './Card';

interface PersonalitiesProps {
  personalities: Personality[];
}

export function Personalities({ personalities }: PersonalitiesProps) {
  return (
    <Section className="mb-20">
      <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-12 text-center">Personnalités Marquantes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {personalities.map((person, index) => (
          <Card key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl shadow-lg text-center">
            <User className="h-10 w-10 text-primary-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl text-neutral-900 mb-2">{person.name}</h3>
            <p className="text-neutral-600 text-sm">{person.bio}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}