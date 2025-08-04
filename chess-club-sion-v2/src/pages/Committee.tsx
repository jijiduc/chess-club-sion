import { motion } from 'framer-motion'

interface CommitteeMember {
  name: string
  role: string
  image: string
}

// Composant réutilisable pour une carte de membre
const MemberCard = ({ member, index, className = '' }: { member: CommitteeMember, index: number, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`bg-white rounded-xl shadow-lg overflow-hidden group w-full max-w-sm ${className}`}
    >
        {/* LA MODIFICATION EST ICI */}
        <div className="relative h-64 overflow-hidden">
            <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>
        <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-1">{member.name}</h3>
            <p className="text-primary-600 font-semibold text-lg">{member.role}</p>
        </div>
    </motion.div>
)

export default function Committee() {
  const members: CommitteeMember[] = [
    {
      name: "Vlad Popescu",
      role: "Président",
      image: "./picture/comite/vlad.jpg"
    },
    {
      name: "Sandro Bétrisey",
      role: "Vice-président",
      image: "./picture/comite/sandro.jpg"
    },
    {
      name: "Pierre-Marie Rappaz",
      role: "Trésorier",
      image: "./picture/comite/pm.jpg"
    },
    {
      name: "Arnaud Pannatier",
      role: "Membre",
      image: "./picture/comite/arnaud.jpg"
    },
    {
      name: "Simon Morand",
      role: "Membre",
      image: "./picture/comite/simon.jpg"
    }
  ]

  const [president, ...otherMembers] = members

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif font-bold mb-6"
          >
            Le Comité
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-100 max-w-3xl"
          >
            Voici les membres formant le comité du club
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="space-y-16">
                {/* 1. Le Président, mis en avant au centre */}
                <div className="flex justify-center">
                    <MemberCard
                        member={president}
                        index={0}
                        className="transform lg:scale-110 shadow-2xl z-10"
                    />
                </div>

                {/* 2. Les autres membres en dessous */}
                <div className="flex flex-wrap justify-center items-stretch gap-8 lg:gap-12 -mt-8">
                    {otherMembers.map((member, index) => (
                        <MemberCard
                            key={member.name}
                            member={member}
                            index={index + 1}
                            className="lg:pt-16"
                        />
                    ))}
                </div>
            </div>
        </div>
      </section>
    </>
  )
}