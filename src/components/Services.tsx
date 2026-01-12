import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Home, Flame, Construction, Building2, Hammer, Droplets, LayoutTemplate } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t('services.brick.title'),
      description: t('services.brick.desc'),
    },
    {
      icon: Flame,
      title: t('services.chimney.title'),
      description: t('services.chimney.desc'),
    },
    {
      icon: Construction,
      title: t('services.concrete.title'),
      description: t('services.concrete.desc'),
    },
    {
      icon: Building2,
      title: t('services.restoration.title'),
      description: t('services.restoration.desc'),
    },
    {
      icon: Wrench,
      title: t('services.foundation.title'),
      description: t('services.foundation.desc'),
    },
    {
      icon: Hammer,
      title: t('services.tuckpointing.title'),
      description: t('services.tuckpointing.desc'),
    },
    {
      icon: Droplets,
      title: t('services.caulking.title'),
      description: t('services.caulking.desc'),
    },
    {
      icon: LayoutTemplate,
      title: t('services.windowsills.title'),
      description: t('services.windowsills.desc'),
    },
  ];

  return (
    <section className="section-padding bg-warm-gradient">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-primary font-medium group/link"
              >
                {t('services.learnMore')}
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg">
              {t('services.viewAll')}
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
