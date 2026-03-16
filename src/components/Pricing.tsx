import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        title: "Лендинг",
        price: "27 500 ₽",
        description: "Одностраничный сайт для сбора заявок.",
        steps: [
            "Первый экран (заголовок + CTA)",
            "Услуги/Преимущества",
            "О компании",
            "Отзывы/Кейсы",
            "Контакты",
            "Форма захвата заявки"
        ]
    },
    {
        title: "Корпоративный",
        price: "от 45 000 ₽",
        description: "Многофункциональный сайт для компаний.",
        steps: [
            "Главная с новостями/акциями",
            "Каталог товаров/услуг",
            "О компании",
            "Блог/Новости",
            "Контакты с картой",
            "Личный кабинет (опционально)"
        ]
    }
];

const workSteps = [
    "Заявка и заполнение брифа",
    "Создание прототипа",
    "Разработка дизайна",
    "Верстка и программирование",
    "Правки и финализация",
    "Запуск и передача проекта"
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
                        <span className="text-xs font-bold uppercase block text-gray-400">Валюта</span>
                        <span className="text-2xl font-black">RUB (₽)</span>
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
                                <div className="text-4xl font-black mb-1">{plan.price}</div>
                            </div>
                            <p className="mb-8 font-bold text-sm min-h-[48px]">{plan.description}</p>

                            <div className="mt-auto">
                                <div className="text-xs font-black uppercase mb-4 border-b border-current pb-2">
                                    {plan.title === "Корпоративный" ? "Структура индивидуально:" : "Базовая структура:"}
                                </div>
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

                <div className="mt-24 border-t-2 border-white pt-16">
                    <h2 className="text-4xl md:text-5xl mb-12 uppercase">Как проходит работа:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {workSteps.map((step, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <div className="text-3xl font-black text-gray-600">0{index + 1}</div>
                                <div className="text-lg font-bold mt-1 uppercase">{step}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
