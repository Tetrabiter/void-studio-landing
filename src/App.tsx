import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { Upsells } from "./components/Upsells";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <Pricing />
        <Upsells />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
