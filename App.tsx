

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './app/page';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-brand-dark-blue relative">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;