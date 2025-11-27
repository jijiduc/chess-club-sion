import { motion } from 'framer-motion';
import { Section } from './Section';

interface TimelineProps {
  events: { year: string; description: string }[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <Section className="mb-20">
      <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-12 text-center">Frise chronologique</h2>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-primary-700 h-full border left-1/2 -translate-x-1/2"></div>
        {events.map((event, index) => (
          <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-primary-600 shadow-xl w-12 h-12 rounded-full">
              <h3 className="mx-auto font-semibold text-lg text-white">{event.year}</h3>
            </div>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4"
            >
              <p className="text-sm leading-snug tracking-wide text-neutral-700">{event.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
}