import { motion } from "framer-motion";

function Philosophy() {
  const philosophyItems = [
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
  ];

  return (
    <section id="philosophy" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          企業理念
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
