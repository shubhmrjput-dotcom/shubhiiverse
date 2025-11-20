// src/components/HeroBrand.jsx
import React from "react";

export default function HeroBrand() {
  return (
    <section className="w-full bg-gradient-to-br from-black via-slate-900 to-slate-950 text-white py-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* LEFT – TEXT */}
        <div className="flex-1 space-y-4">
          <p className="text-sm tracking-[0.25em] uppercase text-slate-400">
            Fashion • Fitness • Reels
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            ShubhiiVerse:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              shop my grind & my vibe.
            </span>
          </h1>
          <p className="text-slate-300 max-w-xl text-sm md:text-base">
            I create cinematic fashion & fitness reels. Here you can grab the
            exact tools, gear, and sessions I actually use in my journey.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#shop"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-sm font-semibold shadow-lg shadow-cyan-500/30 hover:scale-[1.03] transition"
            >
              Shop my stuff
            </a>
            <a
              href="https://instagram.com/YOUR_INSTAGRAM"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full border border-slate-600 text-sm font-semibold hover:border-cyan-400 hover:text-cyan-300 transition"
            >
              Watch my reels
            </a>
          </div>

          <p className="text-xs text-slate-500">
            Built for followers who ask: “Bro, where do you get this look / edit
            / setup from?”
          </p>
        </div>

        {/* RIGHT – CARD */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-72 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-transparent border border-slate-700 overflow-hidden shadow-xl shadow-purple-500/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(168,85,247,0.4),_transparent_55%)]" />
            <div className="relative h-full flex flex-col justify-end p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300 mb-1">
                Creator • Athlete
              </p>
              <p className="text-lg font-semibold">Shubhii</p>
              <p className="text-xs text-slate-300">
                Fashion + fitness + cinematic chaos. All in one link.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}