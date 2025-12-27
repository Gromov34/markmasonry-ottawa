import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import ServiceAreas from '@/components/ServiceAreas';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>MarkMasonry | Expert Masonry Services Ottawa | Brick, Stone & Concrete</title>
        <meta 
          name="description" 
          content={language === 'en' 
            ? "MarkMasonry provides professional masonry services in Ottawa and surrounding areas. Specializing in brick, stone, chimney repair, and concrete work. Free estimates. 20+ years experience."
            : "MarkMasonry offre des services de maçonnerie professionnels à Ottawa et environs. Spécialisé en brique, pierre, réparation de cheminée et béton. Estimations gratuites. 20+ ans d'expérience."}
        />
        <meta name="keywords" content="masonry Ottawa, brick repair Ottawa, stone work Gatineau, chimney repair, tuckpointing, foundation repair, concrete paving, maçonnerie Ottawa" />
        <link rel="canonical" href="https://markmasonry.ca" />
      </Helmet>
      <Layout>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <ServiceAreas />
        <CTA />
      </Layout>
    </>
  );
};

export default Index;
