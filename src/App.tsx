import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  Users,
  Wrench,
  Zap,
  ArrowUp,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

function App() {
  // ヘッダー部の画像を切り替えるための画像リスト
  const images = [
    "/images/headerImages/presonInstallingAirConditioner.png",
    "/images/headerImages/family.png",
    "/images/headerImages/sky.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // スクロールトップボタンの表示・非表示を切り替えるためのステート
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // カードの表示アニメーション
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // ハンバーガーメニューの表示・非表示を切り替えるためのステート
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  // サービスセクションの表示アニメーション
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true });
  const servicesVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // 会社概要セクションの表示アニメーション
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true });
  const aboutVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // お問い合わせセクションの表示アニメーション
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`エアコン設置 ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                currentImage === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0"></div>
        </div>

        <nav className="relative z-50 bg-white/90 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* ロゴ */}
              <div className="flex-shrink-0 flex items-center">
                <img
                  src="/images/logo.png"
                  alt="株式会社エアサキ"
                  className="h-8 w-auto mr-2"
                />
              </div>

              {/* ハンバーガーメニューアイコン (スマホ表示時) */}
              <button
                onClick={toggleMenu}
                className="sm:hidden text-gray-900 hover:text-red-700 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>

              {/* メニュー (デフォルト: PC表示) */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="sm:hidden absolute top-16 left-0 w-full bg-white shadow-lg"
                  >
                    <a
                      href="#services"
                      className="block px-4 py-2 text-gray-900 hover:text-red-700 sm:py-0 sm:inline-block"
                    >
                      サービス
                    </a>
                    <a
                      href="#about"
                      className="block px-4 py-2 text-gray-900 hover:text-red-700 sm:py-0 sm:inline-block"
                    >
                      会社概要
                    </a>
                    <a
                      href="#contact"
                      className="block px-4 py-2 text-gray-900 hover:text-red-700 sm:py-0 sm:inline-block"
                    >
                      お問い合わせ
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className={`hidden sm:flex sm:space-x-8`}>
                <a
                  href="#services"
                  className="block px-4 py-2 text-gray-900 hover:text-red-700 sm:py-0 sm:inline-block"
                >
                  サービス
                </a>
                <a
                  href="#about"
                  className="block px-4 py-2 text-gray-900 hover:text-red-700 sm:py-0 sm:inline-block"
                >
                  会社概要
                </a>
                <a
                  href="#contact"
                  className="block px-4 py-2 text-gray-900 hover:text-red-700 sm:py-0 sm:inline-block"
                >
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100%-4rem)] flex items-center">
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-4">
              エアコンひとつで、家がもっと好きになる
            </h2>
            <p className="text-xl mb-8">
              私たちが行う数時間の工事が、これからの数十年を左右する。
              <br />
              そのような想いを胸に、仕事に取り組んでいます。
            </p>
            <a
              href="#contact"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              お問い合わせ
            </a>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            企業理念
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "お客様の快適を未来へつなぐ",
                description:
                  "創業以来、お客様の満足と幸せを第一に考え、高品質な製品・サービスを提供し続けています。最新の技術を活用しながら、お客様の暮らしの質的向上に貢献していきます。",
              },
              {
                title: "地域に根ざし、信頼されるパートナーへ",
                description:
                  "北海道札幌を拠点とし、地域の方々と深いつながりを持ち続けています。地域のニーズに寄り添い、共に成長していくことを目指しています。",
              },
              {
                title: "持続可能な未来への貢献",
                description:
                  "地球環境への配慮を忘れずに事業活動を行い、社会的責任を果たしていきます。省エネ、再生可能エネルギーの活用など、持続可能な社会の実現に貢献します。",
              },
              {
                title: "技術と人の調和",
                description:
                  "最新の技術を活用しながら、お客様一人一人に寄り添うきめ細やかなサービスを提供します。熟練の技術者と先進的な設備が融合し、最高水準の品質を実現します。",
              },
              {
                title: "一歩先を行く価値の創造",
                description:
                  "業界をリードする先進的な製品・サービスの開発に取り組み、お客様の期待を上回る価値を提供します。常に新しいことにチャレンジし、お客様の生活の質的向上に寄与していきます。",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-4 text-red-600">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            事業内容
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={servicesVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              variants={cardVariants}
            >
              <Wrench className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">エアコン設置工事</h3>
              <p className="text-gray-600">
                新規設置から交換まで、熟練の技術者が丁寧に対応いたします。
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              variants={cardVariants}
            >
              <Zap className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">電気工事</h3>
              <p className="text-gray-600">
                安全で確実な電気工事を提供いたします。
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              variants={cardVariants}
            >
              <Users className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">人材派遣</h3>
              <p className="text-gray-600">
                経験豊富な技術者を必要な期間派遣いたします。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20" ref={aboutRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            会社概要
          </h2>
          <motion.div
            className="bg-white shadow-md rounded-lg overflow-hidden"
            variants={aboutVariants}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
          >
            <table className="min-w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900">
                    会社名
                  </th>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    株式会社エアサキ
                  </td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900">
                    所在地
                  </th>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    〒064-0809 北海道札幌市中央区南九条西6丁目2番18-105号
                  </td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900">
                    設立
                  </th>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    2024年4月1日
                  </td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900">
                    事業内容
                  </th>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    エアコン設置工事、電気工事、人材派遣
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* トップ画面へ遷移するボタン */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-red-600 text-white rounded-full shadow-lg transition-opacity duration-300 ${
          showButton ? "opacity-100" : "opacity-0"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-bold mb-2">株式会社エアサキ</p>
            <p className="text-sm text-gray-400">
              〒064-0809 北海道札幌市中央区南九条西6丁目2番18-105号
            </p>
            <p className="text-sm text-gray-400 mt-4">
              &copy; 2024 Airsaki Corporation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
