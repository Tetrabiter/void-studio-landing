import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Settings, MessageSquare } from "lucide-react";

const upsells = [
    {
        title: "SEO-аудит и базовая оптимизация",
        price: "20 000 ₽",
        icon: TrendingUp,
        category: "Инструменты привлечения",
        description: "SEO-аудит и базовая оптимизация для вашего проекта."
    },
    {
        title: "Сквозная аналитика",
        price: "20 000 ₽",
        icon: BarChart3,
        category: "Инструменты привлечения",
        description: "Подключение сквозной аналитики и отслеживание эффективности."
    },
    {
        title: "Подключение CRM",
        price: "от 25 000 ₽",
        icon: Settings,
        category: "Автоматизация бизнеса",
        description: "AmoCRM / Bitrix24 (настройка отправки лидов и базовых форм)."
    },
    {
        title: "Чат-бот на сайт",
        price: "15 000 ₽",
        icon: MessageSquare,
        category: "Автоматизация бизнеса",
        description: "Установка виджета для Telegram / WhatsApp."
    }
];

export const Upsells = () => {
    return (
        <section id="upsells" className="py-16 sm:py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl mb-4 uppercase">Дополнительные услуги</h2>
                    <p className="font-bold uppercase tracking-widest text-sm text-gray-500">Инструменты привлечения и автоматизация бизнеса.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                    {upsells.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border-2 border-black -ml-0.5 -mt-0.5 p-8 flex flex-col gap-4 group hover:bg-black hover:text-white transition-all cursor-default"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <item.icon className="w-8 h-8" />
                                <span className="text-[10px] font-black uppercase bg-black text-white px-2 py-1 group-hover:bg-white group-hover:text-black transition-colors rounded">
                                    {item.category}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-tighter">{item.title}</h3>
                            <p className="text-sm font-medium opacity-70 mb-4">{item.description}</p>
                            <div className="mt-auto pt-4 border-t border-black group-hover:border-white transition-colors">
                                <span className="text-2xl font-black">{item.price}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 bg-gray-50 border border-gray-200 border-l-4 border-l-black p-6">
                    <p className="font-bold text-sm uppercase mb-2">Важно:</p>
                    <p className="text-sm font-medium text-gray-700">
                        Если нужна полноценная настройка воронки продаж, сложная логика в CRM или разработка сценариев для чат-бота — это обсуждается отдельно, т.к. требует погружения в бизнес-процессы.
                    </p>
                </div>
            </div>
        </section>
    );
};
