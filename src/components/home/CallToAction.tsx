
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-taski-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-medium bg-white/20 text-white rounded-full backdrop-blur-sm">
            <span className="mr-1.5">🚀</span> Prêt à commencer ?
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Transformez la façon dont votre équipe travaille dès aujourd'hui
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Rejoignez des milliers d'équipes qui utilisent TASKI pour améliorer leur productivité et atteindre leurs objectifs plus rapidement.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Link to="/register">
              <Button size="lg" className="bg-white text-taski-primary hover:bg-white/90 w-full sm:w-auto button-effect">
                Commencer gratuitement
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto button-effect">
              Contacter les ventes
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 text-sm text-white/80">
            <div className="flex items-center">
              <CheckCircle size={16} className="text-white mr-2" />
              <span>Essai gratuit de 14 jours</span>
            </div>
            <div className="flex items-center">
              <CheckCircle size={16} className="text-white mr-2" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center">
              <CheckCircle size={16} className="text-white mr-2" />
              <span>Support réactif</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute left-0 bottom-0 w-full h-20 bg-gradient-to-t from-white/5 to-transparent"></div>
    </section>
  );
};

export default CallToAction;
