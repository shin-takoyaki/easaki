import React from "react";
import {
  Phone,
  Clock,
  MapPin,
  Shield,
  Thermometer,
  Wind,
  Wrench,
  ArrowRight,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1631545805172-38e4bfb00602?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">
                快適な空調を提供します
              </h1>
              <p className="text-xl mb-8">
                あなたのご家庭やビジネスのためのプロフェッショナルな空調サービス。
                <br></br>24時間対応で、すべての冷却ニーズにお応えします。
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                  サービスを予約する
                </button>
                <button className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition">
                  お問い合わせ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            提供するサービス
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Thermometer className="w-8 h-8" />,
                title: "エアコン設置",
                description: "新しい空調システムの専門的な設置",
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "メンテナンス・修理",
                description: "定期的なメンテナンスと緊急修理サービス",
              },
              {
                icon: <Wind className="w-8 h-8" />,
                title: "空気質改善",
                description: "室内空気質の評価と改善",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  詳細はこちら <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            なぜ私たちを選ぶのか
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Clock className="w-6 h-6" />, title: "24時間対応" },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "ライセンス取得 & 保険加入",
              },
              { icon: <MapPin className="w-6 h-6" />, title: "地域密着型" },
              { icon: <Phone className="w-6 h-6" />, title: "迅速な対応" },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                緊急サービスが必要ですか？
              </h2>
              <p className="text-blue-100">
                私たちのチームは24時間対応、緊急修理に駆けつけます。
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                今すぐ電話
              </button>
              <button className="border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition">
                見積もり依頼
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                株式会社エアサキ
              </h3>
              <p className="text-sm">
                住宅・商業施設向けのプロフェッショナルな空調サービス。
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm">
                <li>エアコン設置</li>
                <li>メンテナンス・修理</li>
                <li>緊急サービス</li>
                <li>空気質改善</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">お問い合わせ</h4>
              <ul className="space-y-2 text-sm">
                <li>電話: (555) 123-4567</li>
                <li>メール: info@coolcomfort.com</li>
                <li>住所: 北海道札幌市</li>
                <li>中央区南九条西６丁目２番１８－１０５号</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">営業時間</h4>
              <ul className="space-y-2 text-sm">
                <li>月曜日〜金曜日: 8am - 6pm</li>
                <li>土曜日: 9am - 4pm</li>
                <li>日曜日: 定休日</li>
                <li>緊急対応: 24時間対応</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            © {new Date().getFullYear()} 株式会社エアサキ All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
