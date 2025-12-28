import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const QuoteForm = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = language === 'en' ? [
    'Brick & Stone Work',
    'Chimney Repair',
    'Concrete & Paving',
    'Heritage Restoration',
    'Foundation Repair',
    'Tuckpointing',
    'Other',
  ] : [
    'Brique et Pierre',
    'Réparation de Cheminée',
    'Béton et Pavage',
    'Restauration Patrimoniale',
    'Réparation de Fondation',
    'Rejointoiement',
    'Autre',
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;
    
    try {
      const { data, error } = await supabase.functions.invoke('send-telegram', {
        body: { name, email, phone, service, message }
      });
      
      if (error) throw error;
      
      setIsSubmitted(true);
      toast({
        title: language === 'en' ? 'Request Sent!' : 'Demande Envoyée!',
        description: t('contact.form.success'),
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: language === 'en' ? 'Error' : 'Erreur',
        description: language === 'en' 
          ? 'Failed to send request. Please try again.' 
          : 'Échec de l\'envoi. Veuillez réessayer.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
          {language === 'en' ? 'Thank You!' : 'Merci!'}
        </h3>
        <p className="text-muted-foreground">
          {t('contact.form.success')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            {t('contact.form.name')} *
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder={language === 'en' ? 'John Smith' : 'Jean Dupont'}
            className="h-12"
          />
        </div>

        {/* Email & Phone Row */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              {t('contact.form.email')} *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="email@example.com"
              className="h-12"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              {t('contact.form.phone')} *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="(613) 555-0123"
              className="h-12"
            />
          </div>
        </div>

        {/* Service Select */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
            {t('contact.form.service')} *
          </label>
          <Select name="service" required>
            <SelectTrigger className="h-12">
              <SelectValue placeholder={language === 'en' ? 'Select a service' : 'Sélectionnez un service'} />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            {t('contact.form.message')}
          </label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder={language === 'en' 
              ? 'Please describe your project, including any specific requirements or timeline...' 
              : 'Veuillez décrire votre projet, y compris les exigences spécifiques ou le calendrier...'}
            className="resize-none"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="cta"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent" />
              {t('contact.form.submitting')}
            </>
          ) : (
            <>
              <Send size={18} />
              {t('contact.form.submit')}
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default QuoteForm;
