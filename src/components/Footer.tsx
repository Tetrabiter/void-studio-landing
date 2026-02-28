import { Plus } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-white border-t-2 border-black py-12 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-black flex items-center justify-center">
                        <Plus className="text-white w-6 h-6" />
                    </div>
                    <span className="font-display font-black text-xl tracking-tighter">VOID.STUDIO</span>
                </div>

                <div className="text-center md:text-left text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                    © 2026 VOID WEB STUDIO. ВСЕ ПРАВА ЗАЩИЩЕНЫ. <br />
                    СОЗДАНО ДЛЯ ТЕХ, КТО ИЩЕТ СОВЕРШЕНСТВО.
                </div>

                <div className="flex gap-6 uppercase font-bold text-xs tracking-widest">
                    <a href="#" className="hover:underline">Dribbble</a>
                    <a href="#" className="hover:underline">Behance</a>
                    <a href="#" className="hover:underline">Instagram</a>
                </div>
            </div>

            <div className="mt-12 text-center overflow-hidden whitespace-nowrap opacity-5 select-none pointer-events-none">
                <span className="text-9xl font-display font-black uppercase">
                    VOID • VOID • VOID • VOID • VOID • VOID • VOID • VOID • VOID • VOID • VOID • VOID • VOID • VOID • VOID • VOID • VOID • VOID
                </span>
            </div>
        </footer>
    );
};
