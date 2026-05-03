import { motion } from "framer-motion";
import Logo from "./ui/Logo";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-white border-b-2 border-black"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex gap-8 uppercase font-bold text-xs">
          <a href="#services" className="hover:underline">
            Услуги
          </a>
          <a href="#pricing" className="hover:underline">
            Цены
          </a>
          <a href="#upsells" className="hover:underline">
            Апселлы
          </a>
          <a href="#contact" className="hover:underline">
            Контакты
          </a>
        </nav>

        <a href="#contact" className="brutal-btn text-xs">
          Связаться
        </a>
      </div>
    </motion.header>
  );
};
