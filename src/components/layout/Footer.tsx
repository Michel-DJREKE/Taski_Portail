
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Produit',
      links: [
        { name: 'Fonctionnalités', href: '#features' },
        { name: 'Tarifs', href: '#pricing' },
        { name: 'Entreprise', href: '#enterprise' },
        { name: 'Mises à jour', href: '#updates' },
      ],
    },
    {
      title: 'Ressources',
      links: [
        { name: 'Blog', href: '#blog' },
        { name: 'Guides', href: '#guides' },
        { name: 'Support', href: '#support' },
        { name: 'Centre d\'aide', href: '#help' },
      ],
    },
    {
      title: 'Entreprise',
      links: [
        { name: 'À propos', href: '#about' },
        { name: 'Carrières', href: '#careers' },
        { name: 'Partenaires', href: '#partners' },
        { name: 'Contactez-nous', href: '#contact' },
      ],
    },
    {
      title: 'Juridique',
      links: [
        { name: 'Confidentialité', href: '#privacy' },
        { name: 'Conditions', href: '#terms' },
        { name: 'Sécurité', href: '#security' },
        { name: 'Conformité', href: '#compliance' },
      ],
    },
  ];

  return (
    <footer className="bg-taski-light dark:bg-taski-dark py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-taski-primary flex items-center justify-center text-white font-bold text-xl">T</div>
              <span className="font-semibold text-xl">TASKI</span>
            </Link>
            <p className="text-sm text-foreground/70 mt-4 max-w-xs">
              TASKI est une plateforme intuitive de gestion de tâches et de projets qui aide les équipes à rester organisées et productives.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-taski-primary transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-foreground/60 hover:text-taski-primary transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-foreground/60 hover:text-taski-primary transition-colors" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="font-medium text-sm text-foreground/80 uppercase tracking-wider mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-sm text-foreground/70 hover:text-taski-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            © {currentYear} TASKI. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-taski-primary transition-colors">
              Confidentialité
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-taski-primary transition-colors">
              Conditions
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-taski-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
