import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "エアコン設置工事",
      description: "新規設置から取り替えまで、お客様のニーズに合わせて対応いたします。",
      image: "/images/services/installation.png",
    },
    {
      title: "電気工事",
      description: "安全で確実な電気工事を提供いたします。",
      image: "/images/services/electrical.png",
    },
    {
      title: "人材派遣",
      description: "貴社の業務に精通した、最適な人材をご紹介いたします。",
      image: "/images/services/dispatch.png",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          サービス内容
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;