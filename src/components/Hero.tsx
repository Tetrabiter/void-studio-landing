import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-4 pt-20">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-6 inline-block bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
                        Веб-студия / Дизайн будущего
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9]">
                        СОЗДАЕМ <br />
                        <span className="bg-black text-white px-2">БЕЗУПРЕЧНЫЙ</span> <br />
                        ЦИФРОВОЙ ОПЫТ
                    </h1>
                    <p className="max-w-xl text-lg md:text-xl mb-12 border-l-4 border-black pl-6">
                        Мы создаем цифровые продукты для тех, кто ценит эстетику минимализма и мощь брутализма. Чистый код, смелый дизайн, реальный результат.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <a href="#contact" className="brutal-btn flex items-center gap-2 text-xl py-4 px-8">
                            Начать проект <ArrowRight className="w-6 h-6" />
                        </a>
                        <a href="#services" className="px-8 py-4 uppercase font-bold text-xl hover:bg-black hover:text-white transition-colors brutal-border">
                            Услуги
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 right-10 hidden lg:block">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 border-2 border-black border-dashed rounded-full flex items-center justify-center text-[10px] text-center font-bold uppercase p-4"
                >
                    Качество в фокусе • Никакого шума •
                </motion.div>
            </div>
        </section>
    );
};
