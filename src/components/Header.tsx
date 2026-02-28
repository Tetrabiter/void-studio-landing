import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-white border-b-2 border-black"
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black flex items-center justify-center">
            <Plus className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-black text-xl tracking-tighter">VOID.STUDIO</span>
        </div>

        <nav className="hidden md:flex gap-8 uppercase font-bold text-xs">
          <a href="#services" className="hover:underline">Услуги</a>
          <a href="#pricing" className="hover:underline">Цены</a>
          <a href="#upsells" className="hover:underline">Апселлы</a>
          <a href="#contact" className="hover:underline">Контакты</a>
        </nav>

        <a href="#contact" className="brutal-btn text-xs">
          Связаться
        </a>
      </div>
    </motion.header>
  );
};
