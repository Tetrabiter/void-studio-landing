import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Обязательное поле";
    }

    const contactValue = formData.contact.trim();
    if (!contactValue) {
      newErrors.contact = "Обязательное поле";
    } else {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue);
      const isTelegram =
        /^@[a-zA-Z0-9_]{4,}$/.test(contactValue) ||
        /^(https?:\/\/)?(t\.me|telegram\.me)\/[a-zA-Z0-9_]{4,}$/.test(
          contactValue,
        );

      if (!isEmail && !isTelegram) {
        newErrors.contact =
          "Введите корректный email или Telegram (напр. @username)";
      }
    }

    const messageValue = formData.message.trim();
    if (!messageValue) {
      newErrors.message = "Обязательное поле";
    } else if (messageValue.length < 30) {
      newErrors.message = "Минимум 30 символов";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }

    setErrors({});
    setSubmitted(true);
    // In a real app, you would handle form submission here
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-black text-white overflow-hidden"
    >
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
              <span className="bg-white text-black px-2 inline-block -rotate-2">
                НАЧАТЬ?
              </span>
            </h2>
            <p className="max-w-md text-gray-400 font-bold uppercase mb-12">
              Оставьте заявку, и мы свяжемся с вами в течение 24 часов. Никакого
              спама, только конструктивный диалог о вашем проекте.
            </p>
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
                  animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {Object.keys(errors).length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="bg-red-500 text-white p-4 border-2 border-black flex items-center gap-3 font-bold uppercase text-sm"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Пожалуйста, исправьте ошибки ниже</span>
                    </motion.div>
                  )}

                  <div className="relative">
                    <div className="space-y-2">
                      <label
                        className={`text-xs font-black uppercase tracking-widest block transition-colors ${errors.name ? "text-red-500" : ""}`}
                      >
                        Как вас зовут?
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Иван Иванов"
                        className={`w-full bg-transparent border-b-2 py-2 focus:outline-none font-bold placeholder:text-gray-300 transition-colors ${
                          errors.name
                            ? "border-red-500 text-red-500 focus:border-red-500"
                            : "border-black focus:border-gray-500"
                        }`}
                      />
                    </div>
                    <AnimatePresence>
                      {errors.name && (
                        <motion.span
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-red-500 text-xs font-black uppercase absolute -bottom-5 left-0"
                        >
                          {errors.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="relative pt-2">
                    <div className="space-y-2">
                      <label
                        className={`text-xs font-black uppercase tracking-widest block transition-colors ${errors.contact ? "text-red-500" : ""}`}
                      >
                        Ваш Email / Telegram
                      </label>
                      <input
                        type="text"
                        value={formData.contact}
                        onChange={(e) =>
                          handleChange("contact", e.target.value)
                        }
                        placeholder="@username or email"
                        className={`w-full bg-transparent border-b-2 py-2 focus:outline-none font-bold placeholder:text-gray-300 transition-colors ${
                          errors.contact
                            ? "border-red-500 text-red-500 focus:border-red-500"
                            : "border-black focus:border-gray-500"
                        }`}
                      />
                    </div>
                    <AnimatePresence>
                      {errors.contact && (
                        <motion.span
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-red-500 text-xs font-black uppercase absolute -bottom-5 left-0"
                        >
                          {errors.contact}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="relative pt-2">
                    <div className="space-y-2">
                      <label
                        className={`text-xs font-black uppercase tracking-widest block transition-colors ${errors.message ? "text-red-500" : ""}`}
                      >
                        О чем ваш проект?
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        placeholder="Расскажите немного о ваших целях..."
                        className={`w-full bg-transparent border-b-2 py-2 focus:outline-none font-bold placeholder:text-gray-300 resize-none transition-colors ${
                          errors.message
                            ? "border-red-500 text-red-500 focus:border-red-500"
                            : "border-black focus:border-gray-500"
                        }`}
                      ></textarea>
                    </div>
                    <AnimatePresence>
                      {errors.message && (
                        <motion.span
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-red-500 text-xs font-black uppercase absolute -bottom-5 left-0"
                        >
                          {errors.message}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    type="submit"
                    className="brutal-btn w-full flex items-center justify-center gap-3 py-4 text-xl mt-8"
                  >
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
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", contact: "", message: "" });
                    }}
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
