import React from "react";
import Navbar from "./components/Navbar";
import HeroBrand from "./components/HeroBrand";
import ProductGrid from "./components/ProductGrid";
import FeaturedBundle from "./components/FeaturedBundle";

function App() {
  return (
    <div className="bg-[#020617] min-h-screen text-white">
      <Navbar />

      <HeroBrand />

      <ProductGrid />

      <div className="p-6">
        <FeaturedBundle />
      </div>
    </div>
  );
}

export default App;