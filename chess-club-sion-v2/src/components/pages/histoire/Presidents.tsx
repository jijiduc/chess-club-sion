import { Crown } from 'lucide-react';
import type { President } from '~/data/histoireData';
import { Section } from './Section';

interface PresidentsProps {
  presidents: President[];
}

export function Presidents({ presidents }: PresidentsProps) {
  return (
    <Section className="h-full">
      <h2 id="presidence" className="text-3xl font-serif font-bold text-primary-900 mb-8 text-center flex items-center justify-center gap-3">
        <Crown className="h-8 w-8 text-amber-500" />
        Présidence
      </h2>
      
      <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden h-full flex flex-col">
        <div className="bg-primary-900 h-3 w-full" />
        
        <div className="p-6 overflow-y-auto max-h-[600px] custom-scrollbar relative">
            {/* Vertical Line */}
            <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-primary-100 z-0" />

          <ul className="space-y-6 relative z-10">
            {presidents.map((p, i) => (
              <li key={i} className={`flex items-start group ${p.isCurrent ? 'bg-primary-50 -mx-2 p-2 rounded-lg border border-primary-100' : ''}`}>
                <div className={`w-3 h-3 mt-1.5 rounded-full border-2 flex-shrink-0 mr-4 bg-white ${p.isCurrent ? 'border-primary-600 scale-125' : 'border-primary-300 group-hover:border-primary-500 transition-colors'}`} />
                
                <div className="flex-grow">
                  <div className="flex justify-between items-baseline">
                      <span className={`font-bold text-lg ${p.isCurrent ? 'text-primary-800' : 'text-neutral-800'}`}>
                          {p.name}
                      </span>
                      {p.isCurrent && <span className="text-xs bg-primary-600 text-white px-2 py-0.5 rounded-full ml-2">Actuel</span>}
                  </div>
                  <span className={`text-sm font-mono block mt-0.5 ${p.isCurrent ? 'text-primary-600 font-semibold' : 'text-neutral-500'}`}>
                      {p.period}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}