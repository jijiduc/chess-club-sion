
import { CheckCircle2 } from 'lucide-react';
import type { HistoryBlock } from '~/data/histoireData';
import { Section } from './Section';

interface HistoryBlocksProps {
  blocks: HistoryBlock[];
  className?: string;
}

export function HistoryBlocks({ blocks, className }: HistoryBlocksProps) {
  const formatContent = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      if (line.trim().startsWith('●')) {
        const [title, ...rest] = line.substring(1).split(':');
        return (
          <li key={index} className="flex items-start space-x-3 mb-3 ml-2">
            <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <span className="font-bold text-primary-900 block md:inline md:mr-2">{title.trim()}{rest.length > 0 ? ':' : ''}</span>
              {rest.length > 0 && <span className="text-neutral-700 leading-relaxed">{rest.join(':').trim()}</span>}
            </div>
          </li>
        );
      }
      
      // First paragraph gets special styling if it's the very first element
      const isFirstParagraph = index === 0;
      
      return (
        <p key={index} className={`mb-4 text-neutral-700 leading-relaxed text-lg ${isFirstParagraph ? 'first-letter:text-5xl first-letter:font-serif first-letter:text-primary-800 first-letter:mr-3 first-letter:float-left' : ''}`}>
          {line}
        </p>
      );
    });
  };

  return (
    <div className={`space-y-12 ${className}`}>
      {blocks.map((block, index) => (
        <Section 
          key={index} 
          className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-neutral-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
        >
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400 transform scale-x-100 group-hover:scale-x-105 transition-transform duration-500" />
          
          <h2 id={block.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')} className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-8 pb-4 border-b border-neutral-100 relative">
             {block.title}
             <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary-200 rounded-full"></span>
          </h2>
          
          <div className="prose prose-lg max-w-none text-neutral-600">
            {formatContent(block.content)}
          </div>
        </Section>
      ))}
    </div>
  );
}
