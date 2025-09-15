import { motion } from 'framer-motion'
import { Title, Meta } from 'react-head';
// MODIFICATION : 'Crown' est remplacé par 'Compass'
import { Banknote, Compass, BookOpen, Megaphone, Trophy } from 'lucide-react';

interface CommitteeMember {
  name: string
  role: string
  image: string
  icon: React.ElementType
}

const MemberCard = ({ member, index }: { member: CommitteeMember, index: number }) => {
  const { name, role, image, icon: Icon } = member;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group w-full text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full"
    >
      <div className="relative pt-10">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary-50 to-white"></div>
        <div className="relative w-32 h-32 mx-auto">
          <img
            src={image}
            alt={`Portrait de ${name}`}
            className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
          />
          <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white p-2 rounded-full shadow-lg">
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-neutral-900 mb-1">{name}</h3>
        <p className="text-primary-600 font-medium text-lg">{role}</p>
      </div>
    </motion.div>
  );
};

export default function Committee() {
  const members: CommitteeMember[] = [
    // MODIFICATION : L'icône du président est maintenant 'Compass'
    { name: "Duc Jeremy", role: "", image: "./picture/comite/jeremy.jpg", icon: Compass },
    { name: "Sandro Bétrisey", role: "Vice-président & Caissier", image: "./picture/comite/sandro.jpg", icon: Banknote },
    { name: "Pierre-Marie Rappaz", role: "Resp. École d'Échecs", image: "./picture/comite/pm.jpg", icon: BookOpen },
    { name: "Flavien Sola", role: "Resp. Communication", image: "./picture/comite/flavien.jpg", icon: Megaphone },
    { name: "Ulmann Olivier", role: "Resp. Sportif", image: "./picture/comite/olivier.jpg", icon: Trophy },
  ];

  const [president, ...otherMembers] = members;

  return (
    <>
      <Title>Le Comité - Club d'Échecs de Sion</Title>
      <Meta name="description" content="Découvrez les membres dévoués du comité du Club d'Échecs de Sion." />

      <div className="bg-neutral-50 min-h-screen">
        <section className="relative bg-gradient-to-r from-primary-900 to-accent-900 text-white py-24 text-center">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="container mx-auto px-4 relative z-10">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                >
                    Notre Équipe
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
                >
                    Une équipe passionnée et engagée au service du club et de ses membres.
                </motion.p>
            </div>
        </section>

        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-16">
                    
                    <div className="w-full max-w-md">
                       <h2 className="text-3xl font-bold text-primary-700 text-center mb-6">Présidence</h2>
                       <MemberCard member={president} index={0} />
                    </div>

                    <div className="w-full max-w-6xl">
                        <h2 className="text-3xl font-bold text-neutral-800 text-center mb-8">Membres du comité</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {otherMembers.map((member, index) => (
                                <MemberCard key={member.name} member={member} index={index + 1} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </>
  );
}