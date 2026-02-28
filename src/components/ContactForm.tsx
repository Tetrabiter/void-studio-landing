import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // In a real app, you would handle form submission here
    };

    return (
        <section id="contact" className="py-24 px-4 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-8xl mb-8 leading-none">
                            ГОТОВЫ <br />
                            <span className="bg-white text-black px-2 inline-block -rotate-2">НАЧАТЬ?</span>
                        </h2>
                        <p className="max-w-md text-gray-400 font-bold uppercase mb-12">
                            Оставьте заявку, и мы свяжемся с вами в течение 24 часов. Никакого спама, только конструктивный диалог о вашем проекте.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 border-b border-gray-800 pb-4">
                                <span className="text-xs font-black text-gray-600">01</span>
                                <span className="text-xl font-bold">hello@void.studio</span>
                            </div>
                            <div className="flex items-center gap-4 border-b border-gray-800 pb-4">
                                <span className="text-xs font-black text-gray-600">02</span>
                                <span className="text-xl font-bold">+7 (700) 000-00-00</span>
                            </div>
                            <div className="flex items-center gap-4 border-b border-gray-800 pb-4">
                                <span className="text-xs font-black text-gray-600">03</span>
                                <span className="text-xl font-bold">Алматы, Казахстан</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white text-black p-8 md:p-12 brutal-border brutal-shadow"
                    >
                        <AnimatePresence mode="wait">
                            {!submitted ? (
                                <motion.form
                                    key="form"
                                    exit={{ opacity: 0, y: -20 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-8"
                                >
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest block">Как вас зовут?</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Иван Иванов"
                                            className="w-full bg-transparent border-b-2 border-black py-2 focus:outline-none focus:border-gray-500 font-bold placeholder:text-gray-300"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest block">Ваш Email / Telegram</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="@username or email"
                                            className="w-full bg-transparent border-b-2 border-black py-2 focus:outline-none focus:border-gray-500 font-bold placeholder:text-gray-300"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest block">О чем ваш проект?</label>
                                        <textarea
                                            required
                                            rows={4}
                                            placeholder="Расскажите немного о ваших целях..."
                                            className="w-full bg-transparent border-b-2 border-black py-2 focus:outline-none focus:border-gray-500 font-bold placeholder:text-gray-300 resize-none"
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="brutal-btn w-full flex items-center justify-center gap-3 py-4 text-xl mt-4">
                                        ОТПРАВИТЬ <Send className="w-5 h-5" />
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center py-20 text-center"
                                >
                                    <CheckCircle2 className="w-24 h-24 mb-6 text-black" />
                                    <h3 className="text-4xl mb-4 leading-none">СПАСИБО!</h3>
                                    <p className="font-bold uppercase text-sm max-w-[250px]">
                                        Ваша заявка принята. <br /> Мы скоро свяжемся с вами.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-8 uppercase text-xs font-black underline hover:no-underline"
                                    >
                                        Вернуться к форме
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
