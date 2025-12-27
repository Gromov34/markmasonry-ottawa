import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t, language } = useLanguage();

  const testimonials = language === 'en' ? [
    {
      name: 'Sarah Thompson',
      location: 'Kanata, ON',
      text: 'MarkMasonry transformed our old brick chimney into a stunning focal point. Their attention to detail and professionalism exceeded our expectations. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Jean-Pierre Dubois',
      location: 'Gatineau, QC',
      text: 'Exceptional quality work on our heritage home restoration. The team was knowledgeable about preserving historical character while making necessary repairs. Very satisfied.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      location: 'Orleans, ON',
      text: 'They installed a beautiful natural stone retaining wall and patio. The project was completed on time and within budget. The results speak for themselves!',
      rating: 5,
    },
  ] : [
    {
      name: 'Sarah Thompson',
      location: 'Kanata, ON',
      text: 'MarkMasonry a transformé notre vieille cheminée en brique en un point focal magnifique. Leur attention aux détails et leur professionnalisme ont dépassé nos attentes. Hautement recommandé!',
      rating: 5,
    },
    {
      name: 'Jean-Pierre Dubois',
      location: 'Gatineau, QC',
      text: 'Travail de qualité exceptionnelle sur la restauration de notre maison patrimoniale. L\'équipe connaissait bien la préservation du caractère historique tout en effectuant les réparations nécessaires.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      location: 'Orléans, ON',
      text: 'Ils ont installé un magnifique mur de soutènement et un patio en pierre naturelle. Le projet a été complété à temps et dans le budget. Les résultats parlent d\'eux-mêmes!',
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 shadow-soft border border-border/50 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Quote size={16} className="text-primary-foreground" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-heading font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
