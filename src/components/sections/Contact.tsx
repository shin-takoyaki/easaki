import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail } from "lucide-react";

function Contact() {
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true });
  
  const contactVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={contactRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            お問い合わせ
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={contactVariants}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-red-600 mr-2" />
                <h3 className="text-xl font-bold">お電話でのお問い合わせ</h3>
              </div>
              {/* TODO 電話番号 修正 */}
              <p className="text-3xl font-bold text-red-600 mb-2">
                0120-000-000
              </p>
              <p className="text-gray-600">受付時間: 平日 9:00～18:00</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-red-600 mr-2" />
                <h3 className="text-xl font-bold">メールでのお問い合わせ</h3>
              </div>
              <p className="text-gray-600 mb-4">
                下記のメールアドレスまでお問い合わせください。
              </p>
              {/* TODO メール 修正 */}
              <p className="text-xl font-bold text-red-600">
                info@airsaki.co.jp
              </p>
            </div>
          </motion.div>
        </div>
      </section>
  );
}

export default Contact;