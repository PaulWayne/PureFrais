"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark-blue text-gray-300">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Address */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Le meilleur nettoyage de votre ville</h3>
            <p className="text-gray-400 font-semibold">Adresse</p>
            <p className="text-sm">France — 15 Rue de la République, Bureau 478 Paris, 75001</p>
          </div>

          {/* Say Hello */}
          <div>
            <p className="font-semibold text-gray-400">Contactez-nous</p>
            <a href="mailto:info@example.com" className="text-sm block hover:text-brand-teal">info@purefrais.com</a>
            <a href="tel:+33123456789" className="text-lg font-bold text-white mt-2 block hover:text-brand-teal">+33 1 23 45 67 89</a>
          </div>

          {/* Socials */}
          <div>
             <p className="font-semibold text-gray-400">Réseaux Sociaux</p>
             <ul className="text-sm space-y-1 mt-2">
                <li><a href="#" className="hover:text-brand-teal">Facebook</a></li>
                <li><a href="#" className="hover:text-brand-teal">Twitter</a></li>
                <li><a href="#" className="hover:text-brand-teal">Instagram</a></li>
             </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-semibold text-gray-400">Newsletter</p>
            <form className="flex mt-3 border-b border-gray-500 py-2">
              <input type="email" placeholder="Entrez votre adresse e-mail" className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none" />
              <button type="submit" className="text-white hover:text-brand-teal">
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
            <div className="mt-4 flex items-center">
                <input type="checkbox" id="agree" className="form-checkbox h-4 w-4 bg-transparent border-gray-500 text-brand-teal focus:ring-brand-teal" />
                <label htmlFor="agree" className="ml-2 text-xs text-gray-400">J'accepte la <a href="#" className="underline hover:text-white">Politique de Confidentialité</a></label>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-brand-dark-blue py-4 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center text-xs text-gray-500">
          <span>AncoraThemes © 2024. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;