import React from "react";
import Hero3D from "./components/Hero3D";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import FeaturedBundle from "./components/FeaturedBundle";

function App() {
  return (
    <div className="bg-[#020617] min-h-screen text-white">
      <Navbar />
      <div className="p-6">
        <Hero3D />
      </div>

      <ProductGrid />

      <div className="p-6">
        <FeaturedBundle />
      </div>
    </div>
  );
}

export default App;