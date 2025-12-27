import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brick-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">M</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">MarkMasonry</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              <Globe size={18} />
              {language === 'en' ? 'FR' : 'EN'}
            </button>
            <a href="tel:+14375523366" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
              <Phone size={18} />
              <span className="font-medium">+1 437-552-3366</span>
            </a>
            <Link to="/contact">
              <Button variant="hero" size="default">
                {t('nav.getQuote')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              <Globe size={18} />
              {language === 'en' ? 'FR' : 'EN'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border animate-fade-in">
            <nav className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/80 hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-4 space-y-3">
                <a
                  href="tel:+14375523366"
                  className="flex items-center gap-2 text-foreground/80 py-2"
                >
                  <Phone size={18} />
                  <span>+1 437-552-3366</span>
                </a>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="hero" size="lg" className="w-full">
                    {t('nav.getQuote')}
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
