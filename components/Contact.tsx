
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5 scroll-mt-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold mb-4 block">Контакты</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
              Готовы начать <br /> новый проект?
            </h2>
            <p className="text-neutral-400 text-lg mb-12 leading-relaxed max-w-md">
              Свяжитесь с нами, чтобы обсудить, как AI-видео может трансформировать вашу коммуникацию. Мы всегда открыты для смелых идей.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-900/80 flex items-center justify-center text-white backdrop-blur-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Email</p>
                  <a href="mailto:hello@thirdstudio.ai" className="text-white hover:text-neutral-300 transition-colors">hello@thirdstudio.ai</a>
                </div>
              </div>
              
               <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-900/80 flex items-center justify-center text-white backdrop-blur-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Телефон</p>
                  <a href="tel:+79267077677" className="text-white hover:text-neutral-300 transition-colors">+7 (926) 707-76-77</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-900/80 flex items-center justify-center text-white backdrop-blur-sm">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Telegram</p>
                  <a href="https://t.me/+79267077677" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-300 transition-colors">Написать в Telegram</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-900/80 flex items-center justify-center text-white backdrop-blur-sm">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">WhatsApp</p>
                  <a href="https://wa.me/79267077677" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-300 transition-colors">Написать в WhatsApp</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-neutral-900/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase text-neutral-500 tracking-wider mb-2">Имя</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Иван Иванов"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs uppercase text-neutral-500 tracking-wider mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="ivan@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs uppercase text-neutral-500 tracking-wider mb-2">Сообщение</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Расскажите о вашей идее..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSent}
                className={`w-full py-4 rounded-full font-medium text-sm transition-all flex justify-center items-center ${isSent ? 'bg-green-600 text-white' : 'bg-white text-neutral-950 hover:bg-neutral-200'}`}
              >
                {isSubmitting ? 'Отправка...' : isSent ? 'Отправлено!' : 'Отправить сообщение'}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
