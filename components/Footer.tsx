"use client";
import { Footer as FooterType } from "@/types/footer";
import React from "react";

type Props = {
  footer: FooterType;
};
const Footer: React.FC<Props> = ({ footer }) => {
  return (
    <footer className="bg-brand-dark-blue text-gray-300">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Address */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {footer.text}
            </h3>
            <p className="text-gray-400 font-semibold">Adresse</p>
            <p className="text-sm">{footer.address}</p>
          </div>

          {/* Say Hello */}
          <div>
            <p className="font-semibold text-gray-400">Contactez-nous</p>
            <a
              href={`mailto:${footer.email}`}
              className="text-sm block hover:text-brand-teal"
            >
              {footer.email}
            </a>
            <a
              href={`tel:${footer.phone}`}
              className="text-lg font-bold text-white mt-2 block hover:text-brand-teal"
            >
              {footer.phone}
            </a>
          </div>

          <div>
            <p className="font-semibold text-gray-400">Zone d'intervention</p>
            <span>{footer.zone_intervention}</span>
          </div>
          {/* Socials */}
          <div>
            <p className="font-semibold text-gray-400">Réseaux Sociaux</p>
            <ul className="text-sm space-y-1 mt-2">
              <li>
                <a
                  href={footer.socialLinks.facebook}
                  className="hover:text-brand-teal"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={footer.socialLinks.twitter}
                  className="hover:text-brand-teal"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href={footer.socialLinks.instagram}
                  className="hover:text-brand-teal"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-brand-dark-blue py-4 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center text-xs text-gray-500">
          <span>PureFrais © 2025. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
