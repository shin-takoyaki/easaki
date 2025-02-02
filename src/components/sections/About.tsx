import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function About() {
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

  return (
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
  );
}

export default About;