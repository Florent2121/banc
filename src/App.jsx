import React from 'react';
import Hero from './components/sections/Hero';
import Journal from './components/sections/Journal';
import Video from './components/sections/Video';
import Gallery from './components/sections/Gallery';
import Guestbook from './components/sections/Guestbook';
import WeatherWidget from './components/sections/WeatherWidget';

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink selection:bg-raw-green selection:text-white relative">

      {/* Global Grain Overlay */}
      <div className="grain-overlay"></div>

      {/* Widgets */}
      <WeatherWidget />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Journal />
        <Video />
        <Guestbook />
        <Gallery />
      </main>

      {/* Footer */}
      <footer className="bg-ink text-bg py-12 border-t border-ink text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-2xl font-display uppercase tracking-widest mb-4">Le Repos du Sommet</h2>
          <div className="border border-white/20 p-4 w-full max-w-xs mb-8">
            <p className="font-mono text-xs opacity-60 uppercase">
              Merci à<br />
              Maya, Léo, Titouan<br />
              Ceillac
            </p>
          </div>
          <div className="text-[10px] font-mono opacity-40 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
