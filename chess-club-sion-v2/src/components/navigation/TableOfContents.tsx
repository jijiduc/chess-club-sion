import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

const TableOfContents: React.FC = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Select all H2 and H3 that have an ID
    const elements = Array.from(document.querySelectorAll('h2[id], h3[id]'));
    const headingData = elements.map((elem) => ({
      id: elem.id,
      text: elem.textContent || '',
      level: parseInt(elem.tagName.substring(1)),
    }));
    setHeadings(headingData);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -50% 0px' }
    );

    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <motion.nav
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ x: 0 }}
    >
      {/* Container principal */}
      <motion.div
        className={`
          flex flex-col justify-center bg-white/90 backdrop-blur-md shadow-[4px_0_20px_-5px_rgba(0,0,0,0.1)] rounded-r-2xl border-y border-r border-neutral-300/50 overflow-hidden
          transition-all duration-300 ease-in-out
        `}
        animate={{
          width: isHovered ? '280px' : '24px',
          opacity: isHovered ? 1 : 0.85
        }}
        style={{
          maxHeight: '80vh'
        }}
      >
        <div className="py-6 flex flex-col gap-1">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            
            return (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={`
                  relative flex items-center transition-all duration-200 group
                  ${isHovered ? 'px-4 py-1.5' : 'px-0 py-1 justify-center'}
                `}
              >
                {/* Visual Indicator (Dot/Line) */}
                <div 
                  className={`
                    absolute left-0 transition-all duration-300 rounded-r-full
                    ${isHovered ? 'w-1' : 'w-1.5'}
                    ${isActive 
                      ? 'bg-red-600 h-full' 
                      : 'bg-neutral-300 h-1/2 group-hover:bg-red-400 group-hover:h-3/4'
                    }
                  `}
                />

                {/* Text Content (Visible only on Hover) */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className={`
                        ml-3 text-sm truncate w-full flex items-center
                        ${isActive ? 'text-red-700 font-bold' : 'text-neutral-600 hover:text-red-600'}
                        ${heading.level === 3 ? 'pl-4 text-xs' : ''}
                      `}
                    >
                      {isActive && <ChevronRight className="h-3 w-3 mr-1 flex-shrink-0" />}
                      {heading.text}
                    </motion.div>
                  )}
                </AnimatePresence>
              </a>
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default TableOfContents;
