import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServiceAreas = () => {
  const { t } = useLanguage();

  const areas = [
    'Ottawa',
    'Gatineau',
    'Kanata',
    'Orleans',
    'Barrhaven',
    'Nepean',
    'Gloucester',
    'Stittsville',
    'Manotick',
    'Rockland',
    'Aylmer',
    'Hull',
  ];

  return (
    <section className="section-padding bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              {t('areas.title')}
            </h2>
            <p className="text-primary font-medium text-lg mb-6">
              {t('areas.subtitle')}
            </p>
            <p className="text-secondary-foreground/80 text-lg leading-relaxed mb-8">
              {t('areas.description')}
            </p>

            {/* Areas Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-secondary-foreground/80"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Visual */}
          <div className="relative">
            <div className="bg-secondary-foreground/5 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <path
                    d="M50,150 Q100,100 150,120 T250,100 T350,150"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  />
                  <circle cx="200" cy="150" r="60" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/50" />
                  <circle cx="200" cy="150" r="100" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/30" />
                  <circle cx="200" cy="150" r="140" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/20" />
                </svg>
              </div>
              <div className="relative text-center py-12">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 shadow-elevated">
                  <MapPin size={32} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2">Ottawa, ON</h3>
                <p className="text-secondary-foreground/70">National Capital Region</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
