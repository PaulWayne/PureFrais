
import React from 'react';

const ContactInput = ({ icon, type, placeholder, name }: { icon: string, type: string, placeholder: string, name: string }) => (
    <div className="flex items-center border-b border-gray-200 py-3 focus-within:border-brand-teal transition-colors">
        <span className="text-gray-400 mr-4 w-5 text-center">
            <i className={`fas fa-${icon}`}></i>
        </span>
        <input 
            type={type} 
            name={name}
            placeholder={placeholder}
            className="w-full bg-transparent focus:outline-none placeholder-gray-500"
        />
    </div>
);

const ContactFormSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">Coordonnées</h2>
            <div className="space-y-4 text-gray-700">
              <p>15 Rue de la République, Bureau 478<br/>Paris, 75001</p>
              <p>info@purefrais.com</p>
              <p className="text-2xl font-bold text-brand-dark-blue mt-4">+33 1 23 45 67 89</p>
            </div>
            <div className="flex space-x-4 mt-8">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-brand-dark-blue hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-brand-dark-blue hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-brand-dark-blue hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <form>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-6">
                <ContactInput icon="user" type="text" name="name" placeholder="Nom" />
                <ContactInput icon="envelope" type="email" name="email" placeholder="Adresse e-mail" />
                <ContactInput icon="phone" type="tel" name="phone" placeholder="Téléphone" />
                <ContactInput icon="bookmark" type="text" name="subject" placeholder="Sujet" />
              </div>
              <div className="mb-8">
                 <div className="flex items-start border-b border-gray-200 py-3 focus-within:border-brand-teal transition-colors">
                    <span className="text-gray-400 mr-4 w-5 text-center mt-1">
                        <i className="fas fa-pen"></i>
                    </span>
                    <textarea 
                      name="message" 
                      placeholder="Comment pouvons-nous vous aider ? N'hésitez pas à nous contacter !" 
                      rows={3}
                      className="w-full bg-transparent focus:outline-none resize-none placeholder-gray-500"
                    ></textarea>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <button type="submit" className="bg-brand-teal text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity shadow-md w-full sm:w-auto">
                  Envoyer le Message
                </button>
                <div className="flex items-center self-start sm:self-center">
                  <input type="checkbox" id="agree-contact" name="agree" className="w-4 h-4 text-brand-teal bg-gray-100 border-gray-300 rounded focus:ring-brand-teal" />
                  <label htmlFor="agree-contact" className="ml-2 text-sm text-gray-600">
                    J'accepte que mes données soient <a href="#" className="underline hover:text-brand-dark-blue">collectées et stockées</a>.
                  </label>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;