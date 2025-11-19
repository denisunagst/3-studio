
import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 40; // Consistent offset with Navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <style>{`
        .glitch-container {
          position: relative;
          display: inline-block;
        }

        .glitch-text {
          position: relative;
          color: white;
          z-index: 1;
          /* Main text shake animation during the glitch phase */
          animation: glitch-main-shake 4.5s infinite;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          opacity: 0;
          z-index: -1;
        }
        
        /* Red/Pink Shift */
        .glitch-text::before {
          color: #ff00c1;
          animation: glitch-shift-1 4.5s infinite;
        }
        
        /* Cyan/Blue Shift */
        .glitch-text::after {
          color: #00fff9;
          animation: glitch-shift-2 4.5s infinite;
        }

        /* 
           TIMING LOGIC: 4.5s Total Cycle
           0s - 3.0s (0% - 66%): Static / Hidden
           3.0s - 4.5s (67% - 100%): Active Glitch (1.5s duration)
        */

        @keyframes glitch-main-shake {
          0%, 66% { transform: translate(0,0); }
          67% { transform: translate(1px, 1px); }
          70% { transform: translate(-1px, -1px); }
          75% { transform: translate(0,0); }
          80% { transform: translate(1px, 0); }
          85% { transform: translate(0, 1px); }
          90% { transform: translate(-1px, 0); }
          100% { transform: translate(0,0); }
        }

        @keyframes glitch-shift-1 {
          0%, 66% { opacity: 0; transform: translate(0); clip-path: inset(0 0 0 0); }
          
          67% { opacity: 1; transform: translate(-4px, 0); clip-path: inset(10% 0 60% 0); }
          69% { opacity: 1; transform: translate(4px, 0); clip-path: inset(80% 0 5% 0); }
          71% { opacity: 0; transform: translate(0); }
          
          76% { opacity: 1; transform: translate(-2px, 2px); clip-path: inset(20% 0 50% 0); }
          78% { opacity: 1; transform: translate(2px, -2px); clip-path: inset(40% 0 20% 0); }
          80% { opacity: 0; transform: translate(0); }

          85% { opacity: 1; transform: translate(3px, 0); clip-path: inset(60% 0 10% 0); }
          87% { opacity: 0; transform: translate(0); }
          
          92% { opacity: 1; transform: translate(-2px, 0); clip-path: inset(30% 0 30% 0); }
          100% { opacity: 0; transform: translate(0); }
        }

        @keyframes glitch-shift-2 {
          0%, 66% { opacity: 0; transform: translate(0); clip-path: inset(0 0 0 0); }
          
          68% { opacity: 1; transform: translate(4px, 0); clip-path: inset(30% 0 40% 0); }
          70% { opacity: 1; transform: translate(-4px, 0); clip-path: inset(10% 0 80% 0); }
          72% { opacity: 0; transform: translate(0); }
          
          77% { opacity: 1; transform: translate(2px, -2px); clip-path: inset(50% 0 30% 0); }
          79% { opacity: 1; transform: translate(-2px, 2px); clip-path: inset(20% 0 60% 0); }
          81% { opacity: 0; transform: translate(0); }

          86% { opacity: 1; transform: translate(-3px, 0); clip-path: inset(10% 0 60% 0); }
          88% { opacity: 0; transform: translate(0); }
          
          93% { opacity: 1; transform: translate(2px, 0); clip-path: inset(40% 0 20% 0); }
          100% { opacity: 0; transform: translate(0); }
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block relative z-20 mb-6">
            <span className="py-1 px-3 rounded-full bg-white/5 text-xs uppercase tracking-widest text-neutral-400 border border-white/5">
              AI Video Generation
            </span>
          </div>
          
          <div className="w-full flex flex-col items-center gap-2 md:gap-4 mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight flex flex-col items-center gap-2">
              <div className="glitch-container">
                <span className="glitch-text block" data-text="ИИ ВИДЕО">ИИ ВИДЕО</span>
              </div>
              <div className="glitch-container">
                <span className="glitch-text block text-neutral-200" data-text="И ИЗОБРАЖЕНИЯ">И ИЗОБРАЖЕНИЯ</span>
              </div>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Авторские и коммерческие проекты для Вашего бизнеса с использованием передовых технологий искусственного интеллекта
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#portfolio"
              onClick={(e) => scrollToSection(e, '#portfolio')}
              className="group relative px-8 py-4 bg-white text-neutral-950 rounded-full font-medium text-sm overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Смотреть портфолио <PlayCircle className="w-4 h-4" />
              </span>
            </a>
            
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-all flex items-center gap-2"
            >
              Связаться с нами <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};
