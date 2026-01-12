import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import emailjs from '@emailjs/browser';
import { fr } from 'date-fns/locale/fr';
import { programmeEvents } from '../lib/data/programme';
import { parseISO, startOfDay } from 'date-fns';

// Register French locale for datepicker
registerLocale('fr', fr);

type Level = 'debutant' | 'intermediaire' | 'avance';

const LEVEL_MAPPING: Record<Level, string> = {
  debutant: 'Cours écolier',
  intermediaire: 'Cours intermédiaire',
  avance: 'Cours avancé',
};

const TrialForm: React.FC = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    level: 'debutant' as Level,
    date: null as Date | null,
  });

  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Filter dates based on selected level
  useEffect(() => {
    const targetTitle = LEVEL_MAPPING[formData.level];
    const now = startOfDay(new Date());

    const dates = programmeEvents
      .filter(event => 
        event.title.includes(targetTitle) && 
        event.category.includes('ecole-echecs')
      )
      .map(event => parseISO(event.date))
      .filter(date => date >= now) // Only future dates
      .sort((a, b) => a.getTime() - b.getTime());

    setAvailableDates(dates);
    setFormData(prev => ({ ...prev, date: null })); // Reset date when level changes
  }, [formData.level]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData(prev => ({ ...prev, date }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date || !formData.email || !formData.lastName || !formData.firstName) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    setLoading(true);
    setStatus('idle');

    // EmailJS Configuration
    // Replace these with your actual Service ID, Template IDs, and Public Key
    const SERVICE_ID = 'service_r7n8q3c';
    const TEMPLATE_ID_USER = 'template_dmjyxb3'; // Confirmation to user
    const TEMPLATE_ID_ADMIN = 'template_30rqmaa'; // Notification to admin
    const PUBLIC_KEY = 'eZYjuvSvSpZvZp8hk';

    // Logique de destinataires selon le niveau
    let teacherEmails = 'pmraphrappaz@hotmail.com, jeremy.duc@proton.me'; // Par défaut (Débutant)
    if (formData.level === 'intermediaire' || formData.level === 'avance') {
      teacherEmails = 'pmraphrappaz@hotmail.com, jeremy.duc@proton.me, flaviensola@gmail.com';
    }

    const templateParams = {
      to_name: `${formData.firstName} ${formData.lastName}`,
      to_email: formData.email,
      teacher_email: teacherEmails, // Variable dynamique pour EmailJS
      course_level: formData.level,
      course_date: formData.date.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
      message: `Inscription pour le cours ${LEVEL_MAPPING[formData.level]}`,
    };

    try {
      // Send to Admin (Teacher)
      await emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, templateParams, PUBLIC_KEY);
      
      // Send Confirmation to User
      await emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, templateParams, PUBLIC_KEY);

      setStatus('success');
      setFormData({
        lastName: '',
        firstName: '',
        email: '',
        level: 'debutant',
        date: null,
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700">
      <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white text-center">
        Inscription Cours d'Essai Gratuit
      </h2>
      
      {status === 'success' && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md text-center">
          Inscription envoyée avec succès ! Vous recevrez une confirmation par email.
        </div>
      )}

      {status === 'error' && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md text-center">
          Une erreur est survenue. Veuillez réessayer plus tard.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nom & Prénom */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nom</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Prénom</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
          />
        </div>

        {/* Niveau */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Niveau</label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
          >
            <option value="debutant">Débutant (Cours écolier)</option>
            <option value="intermediaire">Intermédiaire</option>
            <option value="avance">Avancé</option>
          </select>
        </div>

        {/* Date Picker */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Date du cours</label>
          {/* @ts-ignore */}
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            includeDates={availableDates}
            locale="fr"
            dateFormat="dd MMMM yyyy"
            placeholderText={availableDates.length > 0 ? "Sélectionnez une date disponible" : "Aucune date disponible"}
            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            wrapperClassName="w-full"
            disabled={availableDates.length === 0}
            required
          />
          {availableDates.length === 0 && (
            <p className="text-xs text-amber-600 mt-1">Aucune date programmée pour ce niveau prochainement.</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || availableDates.length === 0}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            "S'inscrire au cours d'essai"
          )}
        </button>

        <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center italic">
          Les informations récoltées ne sont utilisées que dans le cadre strict du fonctionnement du club et de son école d’échecs.
        </p>
      </form>
    </div>
  );
};

export default TrialForm;
