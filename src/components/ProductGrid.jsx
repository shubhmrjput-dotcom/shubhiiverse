// src/components/ProductGrid.jsx
import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ProductGrid() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold text-white mb-6">Shop the Verse</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}