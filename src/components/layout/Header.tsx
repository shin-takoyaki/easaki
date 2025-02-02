import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import { Phone } from "lucide-react";

function Header() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/headers/presonInstallingAirConditioner.png",
    "/images/headers/family.png",
    "/images/headers/sky.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
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
      <Navigation />
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
  );
}

export default Header;
