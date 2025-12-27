import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Get Free Quote',

    // Hero
    'hero.title': 'Expert Masonry Craftsmanship',
    'hero.subtitle': 'Ottawa & Surrounding Areas',
    'hero.description': 'Transform your property with premium brick, stone, and concrete work. Over 20 years of trusted experience serving Ottawa, Gatineau, and the National Capital Region.',
    'hero.cta': 'Request Free Estimate',
    'hero.callNow': 'Call Now',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Professional masonry solutions for residential and commercial projects',
    'services.brick.title': 'Brick & Stone Work',
    'services.brick.desc': 'Expert installation and repair of brick and natural stone facades, walls, and decorative elements.',
    'services.chimney.title': 'Chimney Repair',
    'services.chimney.desc': 'Complete chimney restoration, repointing, and waterproofing to protect your home.',
    'services.concrete.title': 'Concrete & Paving',
    'services.concrete.desc': 'Durable driveways, patios, walkways, and decorative concrete solutions.',
    'services.restoration.title': 'Heritage Restoration',
    'services.restoration.desc': 'Specialized restoration of historic masonry maintaining original character and charm.',
    'services.foundation.title': 'Foundation Repair',
    'services.foundation.desc': 'Structural foundation repairs, waterproofing, and reinforcement services.',
    'services.tuckpointing.title': 'Tuckpointing',
    'services.tuckpointing.desc': 'Professional mortar joint repair to extend the life of your masonry.',
    'services.learnMore': 'Learn More',
    'services.viewAll': 'View All Services',

    // About
    'about.title': 'About MarkMasonry',
    'about.subtitle': 'Building Trust, One Brick at a Time',
    'about.description': 'For over two decades, MarkMasonry has been the trusted choice for masonry services in Ottawa and the surrounding region. Our team of skilled craftsmen combines traditional techniques with modern innovation to deliver exceptional results.',
    'about.experience': 'Years Experience',
    'about.projects': 'Projects Completed',
    'about.satisfaction': 'Customer Satisfaction',
    'about.warranty': 'Year Warranty',
    'about.cta': 'Learn Our Story',

    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Real feedback from homeowners and businesses in Ottawa',

    // Areas
    'areas.title': 'Service Areas',
    'areas.subtitle': 'Proudly serving the National Capital Region',
    'areas.description': 'We provide professional masonry services throughout Ottawa and surrounding communities including Gatineau, Kanata, Orleans, Barrhaven, Nepean, Gloucester, and more.',

    // Contact
    'contact.title': 'Get Your Free Quote',
    'contact.subtitle': 'Ready to start your project? Contact us today for a free, no-obligation estimate.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.service': 'Service Needed',
    'contact.form.message': 'Project Details',
    'contact.form.submit': 'Request Quote',
    'contact.form.submitting': 'Sending...',
    'contact.form.success': 'Thank you! We will contact you within 24 hours.',
    'contact.info.title': 'Contact Information',
    'contact.info.address': '123 Mason Street, Ottawa, ON K1A 0B1',
    'contact.info.phone': '(613) 555-MASON',
    'contact.info.email': 'info@markmasonry.ca',
    'contact.info.hours': 'Mon-Fri: 7AM - 6PM | Sat: 8AM - 4PM',

    // Footer
    'footer.description': 'Professional masonry services for Ottawa and the National Capital Region. Quality craftsmanship you can trust.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.license': 'Licensed & Insured',

    // CTA
    'cta.title': 'Ready to Transform Your Property?',
    'cta.description': 'Get a free, no-obligation quote for your masonry project. Our experts are ready to help bring your vision to life.',
    'cta.button': 'Get Free Quote',
    'cta.call': 'Or call us at',

    // Gallery
    'gallery.title': 'Our Work',
    'gallery.subtitle': 'Browse our portfolio of completed masonry projects',
    'gallery.all': 'All Projects',
    'gallery.residential': 'Residential',
    'gallery.commercial': 'Commercial',
    'gallery.restoration': 'Restoration',

    // Common
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.callUs': 'Call Us',
    'common.emailUs': 'Email Us',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.gallery': 'Galerie',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Soumission Gratuite',

    // Hero
    'hero.title': 'Maçonnerie Artisanale Expert',
    'hero.subtitle': 'Ottawa et Environs',
    'hero.description': 'Transformez votre propriété avec des travaux de brique, pierre et béton de qualité supérieure. Plus de 20 ans d\'expérience au service d\'Ottawa, Gatineau et la région de la capitale nationale.',
    'hero.cta': 'Demander une Estimation',
    'hero.callNow': 'Appelez Maintenant',

    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Solutions de maçonnerie professionnelles pour projets résidentiels et commerciaux',
    'services.brick.title': 'Brique et Pierre',
    'services.brick.desc': 'Installation et réparation experte de façades en brique et pierre naturelle, murs et éléments décoratifs.',
    'services.chimney.title': 'Réparation de Cheminée',
    'services.chimney.desc': 'Restauration complète de cheminée, rejointoiement et imperméabilisation pour protéger votre maison.',
    'services.concrete.title': 'Béton et Pavage',
    'services.concrete.desc': 'Entrées durables, patios, allées et solutions de béton décoratif.',
    'services.restoration.title': 'Restauration Patrimoniale',
    'services.restoration.desc': 'Restauration spécialisée de maçonnerie historique préservant le caractère original.',
    'services.foundation.title': 'Réparation de Fondation',
    'services.foundation.desc': 'Réparations structurelles de fondation, imperméabilisation et services de renforcement.',
    'services.tuckpointing.title': 'Rejointoiement',
    'services.tuckpointing.desc': 'Réparation professionnelle des joints de mortier pour prolonger la vie de votre maçonnerie.',
    'services.learnMore': 'En Savoir Plus',
    'services.viewAll': 'Voir Tous les Services',

    // About
    'about.title': 'À Propos de MarkMasonry',
    'about.subtitle': 'Bâtir la Confiance, Brique par Brique',
    'about.description': 'Depuis plus de deux décennies, MarkMasonry est le choix de confiance pour les services de maçonnerie à Ottawa et dans la région environnante. Notre équipe d\'artisans qualifiés combine techniques traditionnelles et innovation moderne pour livrer des résultats exceptionnels.',
    'about.experience': 'Ans d\'Expérience',
    'about.projects': 'Projets Complétés',
    'about.satisfaction': 'Satisfaction Client',
    'about.warranty': 'Ans de Garantie',
    'about.cta': 'Découvrir Notre Histoire',

    // Testimonials
    'testimonials.title': 'Ce Que Disent Nos Clients',
    'testimonials.subtitle': 'Avis réels de propriétaires et entreprises d\'Ottawa',

    // Areas
    'areas.title': 'Zones de Service',
    'areas.subtitle': 'Fiers de servir la région de la capitale nationale',
    'areas.description': 'Nous offrons des services de maçonnerie professionnels dans tout Ottawa et les communautés environnantes, y compris Gatineau, Kanata, Orléans, Barrhaven, Nepean, Gloucester, et plus.',

    // Contact
    'contact.title': 'Obtenez Votre Soumission Gratuite',
    'contact.subtitle': 'Prêt à commencer votre projet? Contactez-nous aujourd\'hui pour une estimation gratuite et sans obligation.',
    'contact.form.name': 'Nom Complet',
    'contact.form.email': 'Adresse Courriel',
    'contact.form.phone': 'Numéro de Téléphone',
    'contact.form.service': 'Service Requis',
    'contact.form.message': 'Détails du Projet',
    'contact.form.submit': 'Demander une Soumission',
    'contact.form.submitting': 'Envoi...',
    'contact.form.success': 'Merci! Nous vous contacterons dans les 24 heures.',
    'contact.info.title': 'Coordonnées',
    'contact.info.address': '123 rue Mason, Ottawa, ON K1A 0B1',
    'contact.info.phone': '(613) 555-MASON',
    'contact.info.email': 'info@markmasonry.ca',
    'contact.info.hours': 'Lun-Ven: 7h - 18h | Sam: 8h - 16h',

    // Footer
    'footer.description': 'Services de maçonnerie professionnels pour Ottawa et la région de la capitale nationale. Artisanat de qualité en qui vous pouvez avoir confiance.',
    'footer.services': 'Services',
    'footer.company': 'Entreprise',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    'footer.license': 'Licencié et Assuré',

    // CTA
    'cta.title': 'Prêt à Transformer Votre Propriété?',
    'cta.description': 'Obtenez une soumission gratuite et sans obligation pour votre projet de maçonnerie. Nos experts sont prêts à donner vie à votre vision.',
    'cta.button': 'Soumission Gratuite',
    'cta.call': 'Ou appelez-nous au',

    // Gallery
    'gallery.title': 'Nos Réalisations',
    'gallery.subtitle': 'Parcourez notre portfolio de projets de maçonnerie complétés',
    'gallery.all': 'Tous les Projets',
    'gallery.residential': 'Résidentiel',
    'gallery.commercial': 'Commercial',
    'gallery.restoration': 'Restauration',

    // Common
    'common.learnMore': 'En Savoir Plus',
    'common.viewAll': 'Voir Tout',
    'common.callUs': 'Appelez-nous',
    'common.emailUs': 'Écrivez-nous',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
