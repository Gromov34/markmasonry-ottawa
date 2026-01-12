import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Flame, Construction, Building2, Wrench, Hammer, Droplets, LayoutTemplate, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import serviceBrickImg from '@/assets/service-brick.jpg';
import serviceChimneyImg from '@/assets/service-chimney.jpg';
import serviceConcreteImg from '@/assets/service-concrete.jpg';
import serviceRestorationImg from '@/assets/service-restoration.jpg';
import serviceFoundationImg from '@/assets/service-foundation.jpg';
import serviceTuckpointingImg from '@/assets/service-tuckpointing.jpg';
import serviceCaulkingImg from '@/assets/gallery/brick-caulking.jpg';
import serviceWindowSillsImg from '@/assets/gallery/concrete-repair.jpg';

const ServicesPage = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t('services.brick.title'),
      description: t('services.brick.desc'),
      features: language === 'en' 
        ? ['New brick installation', 'Stone veneer facades', 'Retaining walls', 'Decorative accents', 'Brick matching']
        : ['Installation de briques neuves', 'Façades en pierre', 'Murs de soutènement', 'Accents décoratifs', 'Appariement de briques'],
      image: serviceBrickImg,
    },
    {
      icon: Flame,
      title: t('services.chimney.title'),
      description: t('services.chimney.desc'),
      features: language === 'en'
        ? ['Full chimney rebuild', 'Crown repair', 'Flashing installation', 'Waterproofing', 'Cap installation']
        : ['Reconstruction complète', 'Réparation de couronne', 'Installation de solin', 'Imperméabilisation', 'Installation de chapeau'],
      image: serviceChimneyImg,
    },
    {
      icon: Construction,
      title: t('services.concrete.title'),
      description: t('services.concrete.desc'),
      features: language === 'en'
        ? ['Driveways', 'Patios & walkways', 'Stamped concrete', 'Foundation slabs', 'Concrete repair']
        : ['Entrées de garage', 'Patios et allées', 'Béton estampé', 'Dalles de fondation', 'Réparation de béton'],
      image: serviceConcreteImg,
    },
    {
      icon: Building2,
      title: t('services.restoration.title'),
      description: t('services.restoration.desc'),
      features: language === 'en'
        ? ['Historic preservation', 'Color matching', 'Period-appropriate repairs', 'Structural assessment', 'Documentation']
        : ['Préservation historique', 'Appariement des couleurs', 'Réparations appropriées', 'Évaluation structurelle', 'Documentation'],
      image: serviceRestorationImg,
    },
    {
      icon: Wrench,
      title: t('services.foundation.title'),
      description: t('services.foundation.desc'),
      features: language === 'en'
        ? ['Crack repair', 'Waterproofing', 'Underpinning', 'Parging', 'Drainage solutions']
        : ['Réparation de fissures', 'Imperméabilisation', 'Sous-œuvre', 'Crépis', 'Solutions de drainage'],
      image: serviceFoundationImg,
    },
    {
      icon: Hammer,
      title: t('services.tuckpointing.title'),
      description: t('services.tuckpointing.desc'),
      features: language === 'en'
        ? ['Mortar removal', 'Joint repointing', 'Color matching', 'Weather sealing', 'Preventive maintenance']
        : ['Retrait du mortier', 'Rejointoiement', 'Appariement des couleurs', 'Étanchéité', 'Entretien préventif'],
      image: serviceTuckpointingImg,
    },
    {
      icon: Droplets,
      title: t('services.caulking.title'),
      description: t('services.caulking.desc'),
      features: language === 'en'
        ? ['Window caulking', 'Door sealing', 'Expansion joints', 'Silicone application', 'Weatherproofing']
        : ['Calfeutrage de fenêtres', 'Étanchéité des portes', 'Joints de dilatation', 'Application de silicone', 'Imperméabilisation'],
      image: serviceCaulkingImg,
    },
    {
      icon: LayoutTemplate,
      title: t('services.windowsills.title'),
      description: t('services.windowsills.desc'),
      features: language === 'en'
        ? ['Stone sills', 'Concrete sills', 'Sill replacement', 'Custom fabrication', 'Restoration work']
        : ['Appuis en pierre', 'Appuis en béton', 'Remplacement d\'appuis', 'Fabrication sur mesure', 'Travaux de restauration'],
      image: serviceWindowSillsImg,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{language === 'en' ? 'Our Services | MarkMasonry Ottawa' : 'Nos Services | MarkMasonry Ottawa'}</title>
        <meta 
          name="description" 
          content={language === 'en'
            ? "Complete masonry services in Ottawa: brick work, chimney repair, concrete, heritage restoration, foundation repair, and tuckpointing. Free quotes available."
            : "Services complets de maçonnerie à Ottawa: travaux de brique, réparation de cheminée, béton, restauration patrimoniale, réparation de fondation et rejointoiement."}
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-hero-gradient">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                {t('services.title')}
              </h1>
              <p className="text-xl text-primary-foreground/80">
                {t('services.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <service.icon size={24} className="text-primary" />
                      </div>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle size={18} className="text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button variant="default" size="lg">
                        {t('nav.getQuote')}
                        <ArrowRight size={18} />
                      </Button>
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="rounded-2xl overflow-hidden shadow-elevated">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </Layout>
    </>
  );
};

export default ServicesPage;
