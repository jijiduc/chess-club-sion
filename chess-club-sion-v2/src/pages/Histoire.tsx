import { Title, Meta } from 'react-head';
import TableOfContents from '~/components/navigation/TableOfContents';
import {
  historyBlocks,
  presidents,
  hallOfFame,
  honoraryMembers,
  archiveImages,
} from '~/data/histoireData';
import {
  Hero,
  HistoryBlocks,
  Presidents,
  HallOfFame,
  HonoraryMembers,
  HistoricalGallery,
} from '~/components/pages/histoire';
import { ScrollToTopButton } from '~/components/shared';

export default function Histoire() {
  return (
    <>
      <Title>Histoire du Club - Club d'Échecs de Sion</Title>
      <Meta name="description" content="Explorez l'histoire du Club d'Échecs de Sion depuis 1935. Revivez les dates clés, découvrez les personnalités marquantes et le palmarès de nos meilleurs joueurs." />
      <TableOfContents />
      
      <Hero />

      {/* Main Content */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <HistoryBlocks blocks={historyBlocks} className="mb-20" />

          {/* Historical Gallery */}
          <HistoricalGallery images={archiveImages} className="mb-20" />

          {/* Presidents & Hall of Fame & Honorary Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            <Presidents presidents={presidents} />
            <HallOfFame players={hallOfFame} />
            <HonoraryMembers members={honoraryMembers} />
          </div>

          {/* Footer */}
          <div className="text-center mt-20 text-sm text-neutral-400">
            <p>Un remerciement à Jean-Yves Riand pour son travail d'archiviste</p>
          </div>

        </div>
      </section>
      
      <ScrollToTopButton />
    </>
  )
}