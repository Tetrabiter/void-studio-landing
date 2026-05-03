import Logo from "./ui/Logo";

export const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-black py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Logo />

        <div className="text-center md:text-left text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
          © 2026 VOID WEB STUDIO. ВСЕ ПРАВА ЗАЩИЩЕНЫ. <br />
          СОЗДАНО ДЛЯ ТЕХ, КТО ИЩЕТ СОВЕРШЕНСТВО.
        </div>
      </div>

      <div className="mt-12 text-center overflow-hidden whitespace-nowrap opacity-5 select-none pointer-events-none">
        <span className="text-9xl font-display font-black uppercase">
          VOID • VOID • VOID • VOID • VOID • VOID • VOID • VOID • VOID • VOID •
          VOID • VOID • VOID • VOID • VOID • VOID • VOID • VOID
        </span>
      </div>
    </footer>
  );
};
