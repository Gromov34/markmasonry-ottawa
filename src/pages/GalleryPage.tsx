import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';

// Import real work photos
import chimneyScaffolding from '@/assets/gallery/chimney-scaffolding.jpg';
import brickCaulking from '@/assets/gallery/brick-caulking.jpg';
import chimneyBlocks from '@/assets/gallery/chimney-blocks.jpg';
import concreteRepair from '@/assets/gallery/concrete-repair.jpg';
import chimneyFlue from '@/assets/gallery/chimney-flue.jpg';
import brickRepair from '@/assets/gallery/brick-repair.jpg';

const GalleryPage = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      id: 1,
      title: language === 'en' ? 'Chimney Repair Setup' : 'Préparation Réparation Cheminée',
      description: language === 'en' 
        ? 'Professional scaffolding setup for safe chimney access. We ensure proper safety measures on every residential project.'
        : 'Installation d\'échafaudage professionnel pour un accès sécurisé à la cheminée. Nous assurons des mesures de sécurité appropriées.',
      image: chimneyScaffolding,
    },
    {
      id: 2,
      title: language === 'en' ? 'Brick Caulking Work' : 'Travaux de Calfeutrage de Briques',
      description: language === 'en'
        ? 'Sealing and caulking around window frames to prevent water infiltration. Protecting your home from moisture damage.'
        : 'Scellement et calfeutrage autour des cadres de fenêtres pour prévenir l\'infiltration d\'eau.',
      image: brickCaulking,
    },
    {
      id: 3,
      title: language === 'en' ? 'Chimney Rebuild in Progress' : 'Reconstruction de Cheminée en Cours',
      description: language === 'en'
        ? 'Laying concrete blocks for a new chimney base. Every block is carefully leveled for a solid foundation.'
        : 'Pose de blocs de béton pour une nouvelle base de cheminée. Chaque bloc est soigneusement nivelé.',
      image: chimneyBlocks,
    },
    {
      id: 4,
      title: language === 'en' ? 'Concrete Step Repair' : 'Réparation de Marches en Béton',
      description: language === 'en'
        ? 'Fixing damaged concrete around patio areas. We repair and restore walkways for safety and appearance.'
        : 'Réparation du béton endommagé autour des patios. Nous réparons et restaurons les allées.',
      image: concreteRepair,
    },
    {
      id: 5,
      title: language === 'en' ? 'Chimney Flue Installation' : 'Installation de Conduit de Cheminée',
      description: language === 'en'
        ? 'Installing new chimney flue liners with proper brick work. Ensuring safe and efficient ventilation for your home.'
        : 'Installation de nouveaux conduits de cheminée avec maçonnerie appropriée. Ventilation sûre et efficace.',
      image: chimneyFlue,
    },
    {
      id: 6,
      title: language === 'en' ? 'Brick Wall Repair' : 'Réparation de Mur de Briques',
      description: language === 'en'
        ? 'Repairing and repointing brick walls on residential homes. Using proper techniques to match existing mortar.'
        : 'Réparation et rejointoiement de murs de briques résidentiels. Techniques appropriées pour correspondre au mortier.',
      image: brickRepair,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{language === 'en' ? 'Our Work Gallery | MarkMasonry Ottawa' : 'Galerie de Nos Travaux | MarkMasonry Ottawa'}</title>
        <meta 
          name="description" 
          content={language === 'en'
            ? "See our masonry work in action. Foundation laying, chimney repair, tuckpointing, and more for Ottawa homeowners."
            : "Voyez notre travail de maçonnerie en action. Pose de fondation, réparation de cheminée, rejointoiement et plus pour les propriétaires d'Ottawa."}
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
                {language === 'en' 
                  ? '500+ projects completed for Ottawa homeowners. See our craftsmanship in action.'
                  : '500+ projets réalisés pour les propriétaires d\'Ottawa. Voyez notre savoir-faire en action.'}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
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
