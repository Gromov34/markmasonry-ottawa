import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMemo } from 'react';

const ServiceAreas = () => {
  const { t, language } = useLanguage();

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

  // Generate 20 random work locations around Ottawa area (seeded for consistency)
  const workLocations = useMemo(() => {
    const locations = [
      { lat: 45.4215, lng: -75.6972 }, // Central Ottawa
      { lat: 45.4112, lng: -75.6981 }, // Sandy Hill
      { lat: 45.3876, lng: -75.6960 }, // Alta Vista
      { lat: 45.3515, lng: -75.7572 }, // Barrhaven
      { lat: 45.4501, lng: -75.4803 }, // Orleans
      { lat: 45.2978, lng: -75.9171 }, // Kanata
      { lat: 45.4654, lng: -75.5145 }, // Blackburn Hamlet
      { lat: 45.3956, lng: -75.6234 }, // Hunt Club
      { lat: 45.4087, lng: -75.7512 }, // Westboro
      { lat: 45.4321, lng: -75.7089 }, // Hintonburg
      { lat: 45.4456, lng: -75.6234 }, // Vanier
      { lat: 45.3234, lng: -75.6987 }, // South Keys
      { lat: 45.4678, lng: -75.7456 }, // Carlington
      { lat: 45.3789, lng: -75.7234 }, // Nepean
      { lat: 45.4923, lng: -75.6345 }, // New Edinburgh
      { lat: 45.4567, lng: -75.5678 }, // Cyrville
      { lat: 45.5012, lng: -75.4567 }, // Cumberland
      { lat: 45.4234, lng: -75.7890 }, // Bells Corners
      { lat: 45.3567, lng: -75.6123 }, // Riverside South
      { lat: 45.4789, lng: -75.7012 }, // McKellar Park
    ];
    return locations;
  }, []);

  // Convert lat/lng to SVG coordinates (Ottawa area roughly 45.2-45.55 lat, 75.4-76.0 lng)
  const toSvgCoords = (lat: number, lng: number) => {
    const minLat = 45.25;
    const maxLat = 45.55;
    const minLng = -76.0;
    const maxLng = -75.4;
    
    const x = ((lng - minLng) / (maxLng - minLng)) * 380 + 10;
    const y = ((maxLat - lat) / (maxLat - minLat)) * 280 + 10;
    
    return { x, y };
  };

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

          {/* Interactive Map */}
          <div className="relative">
            <div className="bg-secondary-foreground/5 rounded-2xl p-4 relative overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                {/* Map background pattern */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/10" />
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#grid)" />
                
                {/* Ottawa River */}
                <path
                  d="M0,120 Q80,100 150,110 T280,95 T400,110"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-primary/20"
                  strokeLinecap="round"
                />
                
                {/* Service area circles */}
                <circle cx="200" cy="160" r="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-primary/30" />
                <circle cx="200" cy="160" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-primary/40" />
                
                {/* Work location markers */}
                {workLocations.map((loc, index) => {
                  const { x, y } = toSvgCoords(loc.lat, loc.lng);
                  return (
                    <g key={index} className="cursor-pointer">
                      <circle
                        cx={x}
                        cy={y}
                        r="6"
                        className="fill-primary"
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r="10"
                        className="fill-primary/20"
                      >
                        <animate
                          attributeName="r"
                          from="6"
                          to="14"
                          dur="2s"
                          begin={`${index * 0.1}s`}
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          from="0.4"
                          to="0"
                          dur="2s"
                          begin={`${index * 0.1}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  );
                })}
              </svg>
              
              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-secondary/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-sm text-secondary-foreground/80">
                  {language === 'en' ? 'Completed Projects' : 'Projets Réalisés'}
                </span>
              </div>
              
              {/* Counter badge */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm font-medium">
                20+ {language === 'en' ? 'locations' : 'emplacements'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
