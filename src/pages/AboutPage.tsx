import { Helmet } from 'react-helmet-async';
import { Award, Users, ThumbsUp, Shield, CheckCircle, Target, Heart, Lightbulb } from 'lucide-react';
import Layout from '@/components/Layout';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage = () => {
  const { t, language } = useLanguage();

  const stats = [
    { icon: Award, value: '10+', label: t('about.experience') },
    { icon: Users, value: '2,500+', label: t('about.projects') },
    { icon: ThumbsUp, value: '98%', label: t('about.satisfaction') },
    { icon: Shield, value: '5', label: t('about.warranty') },
  ];

  const values = language === 'en' ? [
    {
      icon: Target,
      title: 'Quality Craftsmanship',
      description: 'We take pride in every project, using premium materials and time-tested techniques to deliver exceptional results that stand the test of time.',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We listen to your needs, communicate clearly throughout the project, and ensure you\'re delighted with the final result.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Tradition',
      description: 'We blend traditional masonry craftsmanship with modern techniques and materials to provide the best possible solutions for your project.',
    },
  ] : [
    {
      icon: Target,
      title: 'Artisanat de Qualité',
      description: 'Nous sommes fiers de chaque projet, utilisant des matériaux de qualité supérieure et des techniques éprouvées pour des résultats exceptionnels.',
    },
    {
      icon: Heart,
      title: 'Client d\'Abord',
      description: 'Votre satisfaction est notre priorité. Nous écoutons vos besoins, communiquons clairement tout au long du projet et assurons votre satisfaction.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation et Tradition',
      description: 'Nous combinons l\'artisanat traditionnel de maçonnerie avec des techniques et matériaux modernes pour les meilleures solutions.',
    },
  ];

  const certifications = language === 'en' 
    ? ['Licensed & Insured', 'WSIB Certified', 'Heritage Restoration Specialist', 'BBB Accredited', 'Member of Ontario Masonry Contractors Association']
    : ['Licencié et Assuré', 'Certifié WSIB', 'Spécialiste en Restauration Patrimoniale', 'Accrédité BBB', 'Membre de l\'Association des Entrepreneurs en Maçonnerie de l\'Ontario'];

  return (
    <>
      <Helmet>
        <title>{language === 'en' ? 'About Us | MarkMasonry Ottawa' : 'À Propos | MarkMasonry Ottawa'}</title>
        <meta 
          name="description" 
          content={language === 'en'
            ? "Learn about MarkMasonry, Ottawa's trusted masonry experts since 2004. Licensed, insured, and committed to quality craftsmanship in the National Capital Region."
            : "Découvrez MarkMasonry, les experts en maçonnerie de confiance d'Ottawa depuis 2004. Licencié, assuré et engagé envers un artisanat de qualité."}
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-hero-gradient">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                {t('about.title')}
              </h1>
              <p className="text-xl text-primary-foreground/80">
                {t('about.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  {language === 'en' ? 'Our Story' : 'Notre Histoire'}
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    {language === 'en'
                      ? 'Founded in 2014, MarkMasonry has grown from a small family business to one of Ottawa\'s most trusted masonry contractors. Our founder, Mark Johnson, started with a simple mission: deliver exceptional quality and honest service to every customer.'
                      : 'Fondée en 2014, MarkMasonry est passée d\'une petite entreprise familiale à l\'un des entrepreneurs en maçonnerie les plus fiables d\'Ottawa. Notre fondateur, Mark Johnson, a commencé avec une mission simple: offrir une qualité exceptionnelle et un service honnête à chaque client.'}
                  </p>
                  <p>
                    {language === 'en'
                      ? 'Today, we\'re proud to have completed over 2,500 projects across the National Capital Region. From heritage restorations in the ByWard Market to modern commercial facades in Kanata, our team brings expertise and dedication to every job.'
                      : 'Aujourd\'hui, nous sommes fiers d\'avoir complété plus de 2 500 projets dans la région de la capitale nationale. Des restaurations patrimoniales au marché By aux façades commerciales modernes à Kanata, notre équipe apporte expertise et dévouement à chaque travail.'}
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                    alt="MarkMasonry team at work"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={32} className="text-primary" />
                  </div>
                  <p className="font-heading text-4xl font-bold text-foreground mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                {language === 'en' ? 'Our Values' : 'Nos Valeurs'}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 shadow-soft border border-border/50 text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4">
                {language === 'en' ? 'Certifications & Memberships' : 'Certifications et Adhésions'}
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-secondary-foreground/10 px-6 py-3 rounded-full"
                >
                  <CheckCircle size={18} className="text-primary" />
                  <span className="text-secondary-foreground">{cert}</span>
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

export default AboutPage;
