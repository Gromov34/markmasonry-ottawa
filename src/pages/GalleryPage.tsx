import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';

const GalleryPage = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      id: 1,
      title: language === 'en' ? 'Foundation Preparation' : 'Préparation de la Fondation',
      description: language === 'en' 
        ? 'Laying concrete blocks for a solid residential foundation. Every block is carefully leveled and aligned.'
        : 'Pose de blocs de béton pour une fondation résidentielle solide. Chaque bloc est soigneusement nivelé et aligné.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: language === 'en' ? 'Chimney Brick Removal' : 'Démolition de Cheminée',
      description: language === 'en'
        ? 'Carefully dismantling an old chimney brick by brick. Safety and precision are our priorities.'
        : 'Démontage minutieux d\'une vieille cheminée brique par brique. Sécurité et précision sont nos priorités.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: language === 'en' ? 'Mortar Joint Cutting' : 'Découpe des Joints de Mortier',
      description: language === 'en'
        ? 'Using specialized tools to cut out old, deteriorated mortar joints before repointing.'
        : 'Utilisation d\'outils spécialisés pour découper les anciens joints de mortier détériorés avant le rejointoiement.',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: language === 'en' ? 'Fresh Tuckpointing' : 'Rejointoiement Frais',
      description: language === 'en'
        ? 'Applying new mortar to brick joints. The color is matched perfectly to the original.'
        : 'Application de nouveau mortier dans les joints de briques. La couleur est parfaitement assortie à l\'original.',
      image: 'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: language === 'en' ? 'Brick Wall Construction' : 'Construction de Mur en Briques',
      description: language === 'en'
        ? 'Building a new brick wall for a residential home. Each row is checked for level and plumb.'
        : 'Construction d\'un nouveau mur de briques pour une maison résidentielle. Chaque rangée est vérifiée.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: language === 'en' ? 'Concrete Mixing' : 'Mélange de Béton',
      description: language === 'en'
        ? 'Preparing the perfect concrete mix for foundation work. The right consistency is crucial.'
        : 'Préparation du mélange de béton parfait pour les travaux de fondation. La bonne consistance est cruciale.',
      image: 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      title: language === 'en' ? 'Stone Patio Installation' : 'Installation de Patio en Pierre',
      description: language === 'en'
        ? 'Installing natural stone pavers for a backyard patio. Creating outdoor living spaces for families.'
        : 'Installation de pavés en pierre naturelle pour un patio arrière. Création d\'espaces de vie extérieurs.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      title: language === 'en' ? 'Chimney Cap Repair' : 'Réparation du Chapeau de Cheminée',
      description: language === 'en'
        ? 'Rebuilding the chimney crown to prevent water damage. Essential maintenance for homeowners.'
        : 'Reconstruction de la couronne de cheminée pour prévenir les dégâts d\'eau. Entretien essentiel.',
      image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 9,
      title: language === 'en' ? 'Retaining Wall Build' : 'Construction de Mur de Soutènement',
      description: language === 'en'
        ? 'Building a stone retaining wall to manage yard drainage and create beautiful landscaping.'
        : 'Construction d\'un mur de soutènement en pierre pour gérer le drainage et créer un bel aménagement.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 10,
      title: language === 'en' ? 'Brick Cleaning & Sealing' : 'Nettoyage et Scellement de Briques',
      description: language === 'en'
        ? 'Power washing and sealing brick surfaces to protect against Ottawa\'s harsh winters.'
        : 'Lavage sous pression et scellement des surfaces de briques pour protéger contre les hivers rigoureux.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 11,
      title: language === 'en' ? 'Step Repair' : 'Réparation d\'Escalier',
      description: language === 'en'
        ? 'Rebuilding front porch steps with new bricks. Safe, sturdy, and beautiful results.'
        : 'Reconstruction des marches du porche avant avec de nouvelles briques. Résultats sûrs et beaux.',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 12,
      title: language === 'en' ? 'Foundation Waterproofing' : 'Imperméabilisation de Fondation',
      description: language === 'en'
        ? 'Applying waterproof membrane to basement foundation walls. Protecting homes from moisture.'
        : 'Application de membrane imperméable aux murs de fondation du sous-sol. Protection contre l\'humidité.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
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
