import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';

const GalleryPage = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: t('gallery.all') },
    { id: 'residential', label: t('gallery.residential') },
    { id: 'commercial', label: t('gallery.commercial') },
    { id: 'restoration', label: t('gallery.restoration') },
  ];

  const projects = [
    {
      id: 1,
      category: 'residential',
      title: language === 'en' ? 'Victorian Home Brick Repair' : 'Réparation de Briques Maison Victorienne',
      location: 'Glebe, Ottawa',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      category: 'residential',
      title: language === 'en' ? 'Natural Stone Patio' : 'Patio en Pierre Naturelle',
      location: 'Kanata, ON',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      category: 'commercial',
      title: language === 'en' ? 'Commercial Building Facade' : 'Façade de Bâtiment Commercial',
      location: 'ByWard Market',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      category: 'restoration',
      title: language === 'en' ? 'Heritage Stone Restoration' : 'Restauration de Pierre Patrimoniale',
      location: 'Parliament Hill Area',
      image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 5,
      category: 'residential',
      title: language === 'en' ? 'Chimney Rebuild' : 'Reconstruction de Cheminée',
      location: 'Orleans, ON',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 6,
      category: 'commercial',
      title: language === 'en' ? 'Retail Storefront' : 'Façade de Commerce',
      location: 'Westboro, Ottawa',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 7,
      category: 'restoration',
      title: language === 'en' ? 'Historic Church Restoration' : 'Restauration d\'Église Historique',
      location: 'Sandy Hill, Ottawa',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 8,
      category: 'residential',
      title: language === 'en' ? 'Stone Retaining Wall' : 'Mur de Soutènement en Pierre',
      location: 'Gatineau, QC',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>{language === 'en' ? 'Our Work Gallery | MarkMasonry Ottawa' : 'Galerie de Nos Travaux | MarkMasonry Ottawa'}</title>
        <meta 
          name="description" 
          content={language === 'en'
            ? "Browse our portfolio of masonry projects in Ottawa. See our brick work, stone installations, chimney repairs, and heritage restorations."
            : "Parcourez notre portfolio de projets de maçonnerie à Ottawa. Voyez nos travaux de brique, installations de pierre, réparations de cheminée et restaurations patrimoniales."}
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-hero-gradient">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                {t('gallery.title')}
              </h1>
              <p className="text-xl text-primary-foreground/80">
                {t('gallery.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                    activeFilter === filter.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-foreground hover:bg-muted border border-border'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">{project.location}</p>
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

export default GalleryPage;
