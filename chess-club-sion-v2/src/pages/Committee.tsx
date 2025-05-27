import { motion } from 'framer-motion'

interface CommitteeMember {
  name: string
  role: string
  image: string
}

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
            Une équipe de bénévoles passionnés au service du club
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-lg text-neutral-700 leading-relaxed">
                Le comité du Club d'Échecs de Sion est composé de bénévoles passionnés qui œuvrent au développement
                et à la promotion des échecs dans notre région. Chaque membre apporte son expertise et son engagement
                pour faire vivre notre club.
              </p>
            </div>
          </motion.div>

          {/* Committee Members */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-8">Membres du Comité</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}