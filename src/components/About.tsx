import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, ThumbsUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, value: '20+', label: t('about.experience') },
    { icon: Users, value: '2,500+', label: t('about.projects') },
    { icon: ThumbsUp, value: '98%', label: t('about.satisfaction') },
    { icon: Shield, value: '5', label: t('about.warranty') },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Masonry craftsman at work"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Accent Shape */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brick/10 rounded-2xl -z-10" />
          </div>

          {/* Content Column */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('about.title')}
            </h2>
            <p className="text-primary font-medium text-lg mb-6">
              {t('about.subtitle')}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="default" size="lg">
                {t('about.cta')}
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
