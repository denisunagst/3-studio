
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Film, Zap, PenTool } from 'lucide-react';

export const About: React.FC = () => {
  const [randomImage, setRandomImage] = useState("https://picsum.photos/800/800?grayscale");

  useEffect(() => {
    // Generate a random ID to ensure a new image on reload
    const id = Math.floor(Math.random() * 1000);
    setRandomImage(`https://picsum.photos/800/800?grayscale&random=${id}`);
  }, []);

  const features = [
    {
      icon: <Film className="w-6 h-6" />,
      title: "ИИ видео",
      description: "Создание динамичного видеоконтента с использованием нейросетей"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Скорость",
      description: "Сокращаем время продакшна с недель до дней без потери кинематографического качества."
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Авторский подход",
      description: "Индивидуальный стиль и креативное решение для каждого проекта"
    }
  ];

  return (
    <section id="about" className="pt-16 pb-24 relative scroll-mt-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
                О нас
              </h2>
              <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                Профессиональный уровень качества. Каждый проект проходит ручную доработку: кадр, свет, движение, цвет. Мы добиваемся профессионального результата, а не просто "генерации".
              </p>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                Разумные и гибкие цены под твой проект. Мы оптимизировали процесс так, чтобы ИИ работал быстрее и эффективнее. Ты получаешь видео уровня агентства - по цене в несколько раз ниже.
              </p>
            </motion.div>

            <div className="grid gap-8 mt-12">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-200">{feature.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full h-full">
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square overflow-hidden rounded-2xl"
             >
                <img 
                  src={randomImage}
                  alt="Creative Process" 
                  className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-all duration-700 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
