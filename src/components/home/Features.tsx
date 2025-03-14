
import React from 'react';
import { Activity, Users, Clock, CheckCircle, PanelRight, Calendar, Bell, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Activity size={24} className="text-taski-primary" />,
      title: "Gestion des tâches",
      description: "Créez, organisez et suivez vos tâches. Définissez des priorités, des échéances et attribuez des tâches à votre équipe.",
    },
    {
      icon: <Users size={24} className="text-taski-primary" />,
      title: "Collaboration en équipe",
      description: "Travaillez efficacement en équipe avec des outils de collaboration en temps réel, des commentaires et des assignations claires.",
    },
    {
      icon: <Clock size={24} className="text-taski-primary" />,
      title: "Suivi en temps réel",
      description: "Suivez la progression de vos projets en temps réel. Visualisez les avancées et identifiez rapidement les blocages.",
    },
    {
      icon: <PanelRight size={24} className="text-taski-primary" />,
      title: "Vues personnalisables",
      description: "Choisissez parmi plusieurs vues pour visualiser vos projets: Kanban, liste, calendrier ou chronologie.",
    },
    {
      icon: <Calendar size={24} className="text-taski-primary" />,
      title: "Planification avancée",
      description: "Planifiez vos projets avec précision grâce à des outils de calendrier intégrés et des échéanciers détaillés.",
    },
    {
      icon: <Bell size={24} className="text-taski-primary" />,
      title: "Rappels intelligents",
      description: "Ne manquez jamais une échéance grâce à des notifications personnalisables et des rappels automatiques.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-taski-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium bg-taski-primary/10 text-taski-primary rounded-full">
            <span className="mr-1.5">
              <Star size={12} />
            </span> 
            Fonctionnalités
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Tout ce dont vous avez besoin pour <span className="text-gradient">gérer vos projets</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Des outils puissants et intuitifs qui vous aident à rester organisé et productif, du brainstorming initial jusqu'à la livraison finale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 w-12 h-12 flex items-center justify-center rounded-xl bg-taski-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-24 bg-white rounded-2xl shadow-elevation overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-medium bg-taski-primary/10 text-taski-primary rounded-full">
                <CheckCircle size={12} className="mr-1.5" /> 
                Suivi de performance
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Visualisez votre progression et optimisez vos processus
              </h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Grâce à nos tableaux de bord personnalisables, suivez en temps réel la performance de vos projets et de votre équipe. Identifiez les tendances, les goulots d'étranglement et les opportunités d'amélioration pour optimiser votre productivité.
              </p>
              <ul className="space-y-3">
                {[
                  "Tableaux de bord personnalisables",
                  "Graphiques et diagrammes interactifs",
                  "Suivi du temps et des ressources",
                  "Rapports automatisés",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle size={18} className="text-taski-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-taski-primary/5 p-8 flex items-center justify-center">
              <div className="bg-white p-6 rounded-xl shadow-subtle w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-semibold">Performance de l'équipe</h4>
                  <div className="text-sm text-foreground/60">
                    Juin 2024
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Tâches complétées</span>
                      <span className="text-sm font-semibold">73%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-2 bg-taski-primary rounded-full" style={{width: '73%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Respect des délais</span>
                      <span className="text-sm font-semibold">85%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Efficacité</span>
                      <span className="text-sm font-semibold">62%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-2 bg-orange-500 rounded-full" style={{width: '62%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Satisfaction client</span>
                      <span className="text-sm font-semibold">91%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full" style={{width: '91%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
