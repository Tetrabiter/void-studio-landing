import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        title: "Лендинг",
        priceKZT: "150 000 ₸",
        priceRUB: "27 500 ₽",
        priceUSD: "400 $",
        description: "Одностраничный сайт для быстрых продаж и лидогенерации.",
        steps: ["Брифинг", "Прототип", "Дизайн & Логика", "Деплой"]
    },
    {
        title: "Сайт-визитка",
        priceKZT: "150 000 ₸",
        priceRUB: "27 500 ₽",
        priceUSD: "400 $",
        description: "3–5 страниц о вашей компании, портфолио и контакты.",
        steps: ["Брифинг", "Прототип", "Дизайн & Логика", "Деплой"]
    },
    {
        title: "Корпоративный",
        priceKZT: "от 250 000 ₸",
        priceRUB: "от 45 000 ₽",
        priceUSD: "от 700 $",
        description: "Многофункциональное решение для крупных компаний.",
        steps: ["Индивидуальная структура", "Каталог", "Блог", "Личный кабинет"]
    }
];

export const Pricing = () => {
    return (
        <section id="pricing" className="py-24 px-4 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <h2 className="text-5xl md:text-7xl mb-4">ЦЕНЫ</h2>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Три пакета. Прозрачный процесс.</p>
                    </div>
                    <div className="text-right border-l-2 md:border-l-0 md:border-r-2 border-white pl-4 md:pl-0 md:pr-4">
                        <span className="text-xs font-bold uppercase block text-gray-400">Ориентир</span>
                        <span className="text-2xl font-black">УНИВ: $USD</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="border-2 border-white p-8 flex flex-col hover:bg-white hover:text-black transition-colors group"
                        >
                            <h3 className="text-3xl mb-4">{plan.title}</h3>
                            <div className="mb-6">
                                <div className="text-4xl font-black mb-1">{plan.priceUSD}</div>
                                <div className="text-sm opacity-60 font-bold">
                                    {plan.priceKZT} / {plan.priceRUB}
                                </div>
                            </div>
                            <p className="mb-8 font-bold text-sm min-h-[48px]">{plan.description}</p>

                            <div className="mt-auto">
                                <div className="text-xs font-black uppercase mb-4 border-b border-current pb-2">Этапы работы:</div>
                                <ul className="space-y-2 mb-8">
                                    {plan.steps.map(step => (
                                        <li key={step} className="flex items-center gap-2 text-xs font-bold">
                                            <Check className="w-4 h-4" /> {step}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact" className="block text-center border-2 border-current py-3 font-black uppercase text-xs group-hover:bg-black group-hover:text-white transition-colors">
                                    Заказать
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
