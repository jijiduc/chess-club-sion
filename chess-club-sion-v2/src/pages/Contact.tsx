import { motion } from 'framer-motion'
import { Mail, Copy, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null)
  
  const emails = [
    {
      address: "president@cesion.ch",
      description: "Pour les questions générales et administratives"
    },
    {
      address: "info@cesion.ch",
      description: "Pour les informations sur le club et ses activités"
    },
    {
      address: "ecole-echecs@cesion.ch",
      description: "Pour l'école d'échecs et les cours pour jeunes"
    }
  ]

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(email)
    setTimeout(() => setCopiedEmail(null), 2000)
  }

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
            Contact
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-100 max-w-3xl"
          >
            Nous sommes à votre disposition pour toute question
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Email Contacts */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Mail className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-2xl font-semibold text-neutral-900">Contacts Email</h2>
              </div>
              
              <p className="text-neutral-700 mb-8">
                Choisissez l'adresse appropriée selon votre demande :
              </p>
              
              <div className="space-y-6">
                {emails.map((emailInfo) => (
                  <div key={emailInfo.address} className="border-b border-neutral-200 last:border-0 pb-6 last:pb-0">
                    <p className="text-sm text-neutral-600 mb-2">{emailInfo.description}</p>
                    <div className="flex items-center justify-between bg-neutral-50 rounded-lg px-4 py-3">
                      <a 
                        href={`mailto:${emailInfo.address}`}
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        {emailInfo.address}
                      </a>
                      <button
                        onClick={() => copyEmail(emailInfo.address)}
                        className="flex items-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        {copiedEmail === emailInfo.address ? (
                          <>
                            <CheckCircle className="h-4 w-4 mr-1.5" />
                            <span>Copié !</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-1.5" />
                            <span>Copier</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}