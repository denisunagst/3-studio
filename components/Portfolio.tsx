
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const projects = [
  { id: 1, title: "Neon Future", category: "Commercial", image: "https://picsum.photos/800/600?random=1" },
  { id: 2, title: "Eco Vision", category: "Documentary", image: "https://picsum.photos/800/600?random=2" },
  { id: 3, title: "Cyber Pulse", category: "Music Video", image: "https://picsum.photos/800/600?random=3" },
  { id: 4, title: "Abstract Mind", category: "Art", image: "https://picsum.photos/800/600?random=4" },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-neutral-900/30 backdrop-blur-sm scroll-mt-32">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Избранные работы</h2>
            <p className="text-neutral-400 max-w-md">
              Синтез человеческого воображения и машинного интеллекта.
            </p>
          </div>
          <a href="#" className="hidden md:block text-sm border-b border-white/30 pb-1 hover:border-white transition-colors mt-4 md:mt-0">
            Смотреть все проекты
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative cursor-pointer overflow-hidden rounded-xl"
            >
              <div className="aspect-video w-full bg-neutral-800/50 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                   <Play className="w-6 h-6 text-white fill-current" />
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <h3 className="text-xl font-medium text-white">{project.title}</h3>
                <span className="text-xs text-neutral-500 uppercase tracking-wider border border-neutral-700 px-2 py-1 rounded">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
             <a href="#" className="text-sm border-b border-white/30 pb-1 hover:border-white transition-colors">
            Смотреть все проекты
          </a>
        </div>
      </div>
    </section>
  );
};
