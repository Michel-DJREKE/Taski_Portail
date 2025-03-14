
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden bg-hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-medium bg-taski-primary/10 text-taski-primary rounded-full">
              <span className="mr-1.5">✨</span> Nouvelle version disponible
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-balance">
              Gérez vos projets avec <span className="text-gradient">simplicité et élégance</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl leading-relaxed">
              TASKI vous aide à organiser, suivre et gérer votre travail avec une interface intuitive et des outils puissants pour une productivité maximale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/register">
                <Button size="lg" className="bg-taski-primary hover:bg-taski-primary/90 text-white w-full sm:w-auto button-effect">
                  Commencer gratuitement
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto button-effect">
                Voir la démo
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-foreground/70">
              <div className="flex items-center">
                <CheckCircle size={16} className="text-taski-primary mr-2" />
                <span>Sans carte bancaire</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-taski-primary mr-2" />
                <span>Configuration simple</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-taski-primary mr-2" />
                <span>Annulez à tout moment</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full lg:w-1/2 relative animate-fade-in animation-delay-300">
            <div className="relative z-10">
              <div className="hero-card p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground">Projet Marketing Q2</h3>
                    <p className="text-sm text-foreground/60">Dernière mise à jour: aujourd'hui</p>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs font-medium border-2 border-white">JD</div>
                    <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center text-white text-xs font-medium border-2 border-white">MR</div>
                    <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-white text-xs font-medium border-2 border-white">AS</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-taski-primary/5 rounded-lg border border-taski-primary/10">
                    <div className="w-4 h-4 rounded-full bg-taski-primary mr-3 flex-shrink-0"></div>
                    <div className="flex-grow">
                      <p className="font-medium">Finaliser la stratégie sociale</p>
                      <p className="text-xs text-foreground/60">Échéance: 24 juin</p>
                    </div>
                    <div className="ml-2 px-2 py-1 text-xs bg-taski-primary/10 text-taski-primary rounded-full">
                      En cours
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-white rounded-lg border border-border">
                    <div className="w-4 h-4 rounded-full bg-taski-gray mr-3 flex-shrink-0"></div>
                    <div className="flex-grow">
                      <p className="font-medium">Créer les visuels campagne</p>
                      <p className="text-xs text-foreground/60">Échéance: 28 juin</p>
                    </div>
                    <div className="ml-2 px-2 py-1 text-xs bg-muted text-foreground/60 rounded-full">
                      À faire
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-white rounded-lg border border-border">
                    <div className="w-4 h-4 rounded-full bg-taski-gray mr-3 flex-shrink-0"></div>
                    <div className="flex-grow">
                      <p className="font-medium">Préparer le rapport mensuel</p>
                      <p className="text-xs text-foreground/60">Échéance: 30 juin</p>
                    </div>
                    <div className="ml-2 px-2 py-1 text-xs bg-muted text-foreground/60 rounded-full">
                      À faire
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-card p-4 md:p-5 absolute -top-6 -right-6 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Réunion client terminée</p>
                    <p className="text-xs text-foreground/60">il y a 10 minutes</p>
                  </div>
                </div>
              </div>

              <div className="hero-card p-4 md:p-5 absolute -bottom-5 -left-5 animate-float animation-delay-1000">
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-taski-primary h-full rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="font-medium text-sm whitespace-nowrap">65%</span>
                </div>
              </div>
            </div>
            
            {/* Decoration elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full bg-gradient-radial from-taski-primary/5 to-transparent -z-10 animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
