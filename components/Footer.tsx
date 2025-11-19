import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 py-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold tracking-tighter text-white">3 Студио</h3>
          <p className="text-neutral-500 text-sm mt-2">© 2024 Third Studio. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">Instagram</a>
          <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">Telegram</a>
          <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">Behance</a>
        </div>
      </div>
    </footer>
  );
};