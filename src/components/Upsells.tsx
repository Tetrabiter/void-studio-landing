import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Settings, ShieldCheck, Zap, MessageSquare } from "lucide-react";

const upsells = [
    {
        title: "SEO-аудит & Оптимизация",
        price: "50 000 ₸",
        icon: TrendingUp,
        description: "Базовая оптимизация для видимости в поисковиках."
    },
    {
        title: "Контекстная реклама",
        price: "80 000 ₸",
        icon: BarChart3,
        description: "Настройка Яндекс.Директ / Google Ads на 1 месяц."
    },
    {
        title: "Сквозная аналитика",
        price: "40 000 ₸",
        icon: Zap,
        description: "Подключение Метрики, GA и коллтрекинга."
    },
    {
        title: "Внедрение CRM",
        price: "от 100 000 ₸",
        icon: Settings,
        description: "AmoCRM, Bitrix24 и настройка воронки продаж."
    },
    {
        title: "Телефония & Почта",
        price: "30 000 ₸",
        icon: ShieldCheck,
        description: "Интеграция с корпоративными сервисами связи."
    },
    {
        title: "Чат-боты",
        price: "60 000 ₸",
        icon: MessageSquare,
        description: "Smart-боты в Telegram и WhatsApp для лидов."
    }
];

export const Upsells = () => {
    return (
        <section id="upsells" className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-5xl md:text-7xl mb-4">АПСЕЛЛЫ</h2>
                    <p className="font-bold uppercase tracking-widest text-sm text-gray-500">Дополнительные инструменты для роста вашего бизнеса.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                    {upsells.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border-2 border-black -ml-[2px] -mt-[2px] p-8 flex flex-col gap-4 group hover:bg-black hover:text-white transition-all cursor-default"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <item.icon className="w-8 h-8" />
                                <span className="text-xs font-black uppercase bg-black text-white px-2 py-1 group-hover:bg-white group-hover:text-black transition-colors">
                                    НОВОЕ
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
            </div>
        </section>
    );
};
