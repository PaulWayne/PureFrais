

import React from 'react';

const QuoteCtaSection: React.FC = () => {
  return (
    <section
      className="py-20 bg-cover bg-center bg-fixed text-white relative"
      style={{ backgroundImage: "url('https://picsum.photos/id/319/1920/600')" }}
    >
      <div className="absolute inset-0 bg-brand-dark-blue bg-opacity-70"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
          Obtenez un devis gratuit pour votre service de nettoyage
        </h2>
        <p className="text-xl lg:text-2xl mb-6">
          Appelez-nous maintenant : <a href="tel:+33123456789" className="font-bold text-brand-green hover:underline">+33 1 23 45 67 89</a>
        </p>
        <a href="/devis" className="bg-brand-teal text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all shadow-xl text-lg">
          DEMANDER UN DEVIS
        </a>
      </div>
    </section>
  );
};

export default QuoteCtaSection;