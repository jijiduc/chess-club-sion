import { motion } from 'framer-motion'
import { Mail, Copy, CheckCircle2, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { Title, Meta } from 'react-head';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null)

  const emails = [
    {
      address: "info@cesion.ch",
      title: "Secrétariat & Comité",
      description: "Pour des informations générales sur le club, les adhésions et les activités.",
      icon: Mail,
      color: "primary"
    },
    {
      address: "ecole-echecs@cesion.ch",
      title: "École d'Échecs",
      description: "Pour toutes questions concernant les cours, les stages et la formation des jeunes.",
      icon: MessageCircle,
      color: "amber"
    }
  ]

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(email)
    setTimeout(() => setCopiedEmail(null), 2000)
  }

  return (
    <>
      <Title>Contact - Club d'Échecs de Sion</Title>
      <Meta name="description" content="Contactez le Club d'Échecs de Sion. Retrouvez nos adresses email pour toute demande d'information sur le club ou notre école d'échecs." />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
             <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-primary-100 text-sm font-medium tracking-[0.2em] mb-8 backdrop-blur-sm uppercase">
              Une question ?
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Contactez-nous
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary-400 to-transparent mx-auto mb-8 opacity-80" />
            <p className="text-xl text-primary-100 font-light max-w-2xl mx-auto leading-relaxed">
              Nous sommes à votre disposition pour vous renseigner sur le club, l'école d'échecs ou toute autre demande.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Email Contacts */}
          <div className="grid md:grid-cols-2 gap-8">
            {emails.map((emailInfo, index) => (
              <motion.div
                key={emailInfo.address}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-100 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                 {/* Top Gradient Border */}
                 <div className={`h-1 w-full bg-gradient-to-r ${emailInfo.color === 'primary' ? 'from-primary-400 via-primary-600 to-primary-400' : 'from-amber-400 via-amber-600 to-amber-400'}`} />
                
                <div className="p-8 flex-grow">
                  <div className={`inline-flex p-3 rounded-xl mb-6 ${emailInfo.color === 'primary' ? 'bg-primary-50 text-primary-600' : 'bg-amber-50 text-amber-600'}`}>
                    <emailInfo.icon className="h-8 w-8" />
                  </div>
                  
                  <h2 className="text-2xl font-serif font-bold text-primary-900 mb-3">
                    {emailInfo.title}
                  </h2>
                  
                  <p className="text-neutral-600 mb-8 leading-relaxed h-16">
                    {emailInfo.description}
                  </p>

                  <div className="flex items-center justify-between bg-neutral-50 rounded-xl p-2 border border-neutral-200 group-hover:border-primary-200 transition-colors">
                    <a
                      href={`mailto:${emailInfo.address}`}
                      className="text-primary-700 font-bold text-lg px-4 hover:underline truncate"
                    >
                      {emailInfo.address}
                    </a>
                    <button
                      onClick={() => copyEmail(emailInfo.address)}
                      className="flex items-center justify-center bg-white hover:bg-primary-50 text-neutral-500 hover:text-primary-600 border border-neutral-200 p-2.5 rounded-lg transition-all active:scale-95 shadow-sm"
                      title="Copier l'adresse email"
                    >
                      {copiedEmail === emailInfo.address ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                          <Copy className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {copiedEmail === emailInfo.address && (
                    <p className="text-xs text-green-600 font-medium mt-2 text-center animate-pulse">
                      Adresse copiée dans le presse-papier !
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}