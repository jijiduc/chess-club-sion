import { Section } from './Section';
import { ExternalLink } from 'lucide-react';

export function Statuts() {
  return (
    <Section>
      <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-8 text-center">Statuts du Club</h2>
      <div className="text-center">
        <a
          href="/pdf/statuts.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary-700 transition-colors"
        >
          <ExternalLink className="h-5 w-5" />
          <span>Consulter les statuts (PDF)</span>
        </a>
      </div>
    </Section>
  );
}