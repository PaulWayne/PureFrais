
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 w-full">
            <img 
              src="https://picsum.photos/id/1060/800/600" 
              alt="Équipe de nettoyage professionnelle" 
              className="rounded-lg shadow-2xl" 
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl lg:text-4xl font-bold text-custom-blue mb-4">
              À propos de notre entreprise de nettoyage
            </h2>
            <p className="text-gray-600 mb-6">
              Nous sommes une équipe de professionnels passionnés, dédiés à fournir des services de nettoyage de la plus haute qualité. Notre mission est de créer des environnements propres, sains et accueillants pour nos clients.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-custom-yellow mr-3"></i>
                <span>Personnel qualifié et formé</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-custom-yellow mr-3"></i>
                <span>Produits écologiques et efficaces</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-custom-yellow mr-3"></i>
                <span>Satisfaction client 100% garantie</span>
              </li>
            </ul>
            <a href="#" className="bg-custom-blue text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all shadow-lg">
              EN SAVOIR PLUS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
