import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
              ShubhiiVerse
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('shop')} className="text-white hover:text-accent-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Shop
              </button>
              <button onClick={() => scrollToSection('bundles')} className="text-white hover:text-accent-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Bundles
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-accent-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-accent-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent-cyan p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-950/95">
            <button onClick={() => scrollToSection('shop')} className="text-white hover:text-accent-cyan block px-3 py-2 rounded-md text-base font-medium">
              Shop
            </button>
            <button onClick={() => scrollToSection('bundles')} className="text-white hover:text-accent-cyan block px-3 py-2 rounded-md text-base font-medium">
              Bundles
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-accent-cyan block px-3 py-2 rounded-md text-base font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-accent-cyan block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;