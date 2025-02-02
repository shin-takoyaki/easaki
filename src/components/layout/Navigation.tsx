import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navigation() {
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

  return (
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
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* モバイルメニュー */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="sm:hidden absolute top-16 left-0 w-full bg-white shadow-lg"
              >
                <NavLinks className="block px-4 py-2" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* デスクトップメニュー */}
          <div className="hidden sm:flex sm:space-x-8">
            <NavLinks className="py-0 inline-block" />
          </div>
        </div>
      </div>
    </nav>
  );
}

// 共通のナビゲーションリンク
function NavLinks({ className = "" }) {
  const links = [
    { href: "#services", text: "サービス" },
    { href: "#about", text: "会社概要" },
    { href: "#contact", text: "お問い合わせ" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`text-gray-900 hover:text-red-700 ${className}`}
        >
          {link.text}
        </a>
      ))}
    </>
  );
}

export default Navigation;