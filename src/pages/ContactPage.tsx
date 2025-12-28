import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import QuoteForm from '@/components/QuoteForm';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactPage = () => {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: language === 'en' ? 'Phone' : 'Téléphone',
      value: '+1 437-552-3366',
      href: 'tel:+14375523366',
    },
    {
      icon: Mail,
      label: language === 'en' ? 'Email' : 'Courriel',
      value: t('contact.info.email'),
      href: 'mailto:markmasonry10@gmail.com',
    },
    {
      icon: MapPin,
      label: language === 'en' ? 'Address' : 'Adresse',
      value: t('contact.info.address'),
      href: '#',
    },
    {
      icon: Clock,
      label: language === 'en' ? 'Hours' : 'Heures',
      value: t('contact.info.hours'),
      href: '#',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{language === 'en' ? 'Contact Us | MarkMasonry Ottawa' : 'Contactez-nous | MarkMasonry Ottawa'}</title>
        <meta 
          name="description" 
          content={language === 'en'
            ? "Contact MarkMasonry for a free quote on your masonry project in Ottawa. Call (613) 555-MASON or fill out our online form. Fast response guaranteed."
            : "Contactez MarkMasonry pour une soumission gratuite sur votre projet de maçonnerie à Ottawa. Appelez (613) 555-MASON ou remplissez notre formulaire en ligne."}
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-hero-gradient">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                {t('contact.title')}
              </h1>
              <p className="text-xl text-primary-foreground/80">
                {t('contact.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form Column */}
              <div className="lg:col-span-3">
                <QuoteForm />
              </div>

              {/* Info Column */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 mb-8">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                    {t('contact.info.title')}
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <info.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                          <p className="font-medium text-foreground">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft border border-border/50">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin size={48} className="text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        {language === 'en' ? 'Ottawa, Ontario' : 'Ottawa, Ontario'}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {language === 'en' ? 'Serving the National Capital Region' : 'Desservant la région de la capitale nationale'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ContactPage;
