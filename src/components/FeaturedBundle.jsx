import React from 'react';

const FeaturedBundle = () => {
  return (
    <section id="bundles" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 md:p-12 hover:shadow-2xl hover:shadow-accent-purple/30 transition-all duration-500 hover:-translate-y-2 hover:rotate-x-1 transform-gpu">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Creator x Athlete Bundle</h2>
            <p className="text-lg text-slate-300">Get the cinematic reel pack + transformation plan together and save more. For the ones who lift heavy and post harder.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <span className="text-4xl font-bold text-accent-magenta">₹2999</span>
            </div>
            <a
              href="https://wa.me/XXXXXXXXXXX?text=I'm interested in the Creator x Athlete Bundle"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-accent-magenta to-accent-purple text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-accent-magenta/50 transition-all duration-300 transform hover:scale-105"
            >
              Unlock Bundle
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBundle;