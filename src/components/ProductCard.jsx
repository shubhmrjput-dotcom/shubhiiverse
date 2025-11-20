import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="animate-on-scroll bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:shadow-2xl hover:shadow-accent-cyan/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:rotate-x-2 hover:rotate-y-2 transform-gpu">
      <div className="relative mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300/1e293b/64748b?text=Product+Image';
          }}
        />
        <span className="absolute top-2 left-2 bg-accent-purple text-white text-xs px-2 py-1 rounded-full">
          {product.tag}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
      <p className="text-slate-300 text-sm mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-accent-cyan">{product.price}</span>
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-accent-cyan to-accent-purple text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all duration-300 transform hover:scale-105"
        >
          Buy / DM
        </a>
      </div>
    </div>
  );
};

export default ProductCard;