import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-masonry.jpg';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground/90 text-sm font-medium mb-6 animate-fade-in">
              {t('hero.subtitle')}
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {t('hero.title')}
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link to="/contact">
                <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                  {t('hero.cta')}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+14375523366">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  <Phone size={20} />
                  {t('hero.callNow')}
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-sm">Free Estimates</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-sm">10+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-right hidden lg:block" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="MarkMasonry construction work in Ottawa"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-6 shadow-card animate-scale-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-primary">10+</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">{t('about.experience')}</p>
                  <p className="text-sm text-muted-foreground">Ottawa Region</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
