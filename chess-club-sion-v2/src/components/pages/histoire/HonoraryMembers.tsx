import React from 'react';
import { Shield, Medal } from 'lucide-react';
import type { HonoraryMember } from '~/data/histoireData';
import { Section } from './Section';

interface HonoraryMembersProps {
  members: HonoraryMember[];
}

export const HonoraryMembers: React.FC<HonoraryMembersProps> = ({ members }) => {
  return (
    <Section className="h-full">
      <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8 text-center flex items-center justify-center gap-3">
        <Shield className="h-8 w-8 text-slate-500" />
        Membres d'Honneur
      </h2>
      
      <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden h-full flex flex-col">
        <div className="bg-slate-600 h-3 w-full" />
        
        <div className="p-6 flex flex-col justify-center flex-grow">
          <ul className="space-y-4">
            {members.map((member, index) => (
              <li key={index} className="flex items-center p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                   <Medal className="h-6 w-6 text-slate-500" />
                </div>
                <span className="font-bold text-neutral-800 text-lg">{member.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};