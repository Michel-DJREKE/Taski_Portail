
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ui/theme-toggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Fonctionnalités', href: '#features' },
    { name: 'Tarifs', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-subtle dark:bg-black/50 dark:shadow-dark-subtle' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="TASKI accueil"
          >
            <div className="w-8 h-8 rounded-lg bg-taski-primary flex items-center justify-center text-white font-bold text-xl">T</div>
            <span className="font-semibold text-xl">TASKI</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-taski-primary transition-colors duration-200 link-effect dark:text-foreground-dark/80 dark:hover:text-taski-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Auth Buttons & Theme Toggle (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            
            <Link to="/login">
              <Button variant="ghost" className="text-sm font-medium button-effect">
                Connexion
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-taski-primary hover:bg-taski-primary/90 text-white text-sm font-medium button-effect">
                Commencer gratuitement
              </Button>
            </Link>
          </div>

          {/* Mobile Menu & Theme Toggle Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border animate-fade-in dark:bg-background-dark dark:border-border-dark">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium py-2 text-foreground/80 hover:text-taski-primary transition-colors duration-200 dark:text-foreground-dark/80 dark:hover:text-taski-primary"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-col space-y-3 pt-4 border-t border-border dark:border-border-dark">
              <Link to="/login" className="w-full">
                <Button variant="outline" className="w-full justify-center">
                  Connexion
                </Button>
              </Link>
              <Link to="/register" className="w-full">
                <Button className="w-full justify-center bg-taski-primary hover:bg-taski-primary/90 text-white">
                  Commencer gratuitement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
