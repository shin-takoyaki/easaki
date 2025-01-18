import React from 'react';
import { Phone, Clock, MapPin, Shield, Thermometer, Wind, Wrench, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1631545805172-38e4bfb00602?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">うんこ</h1>
              <p className="text-xl mb-8">Professional air conditioning services for your home and business. Available 24/7 for all your cooling needs.</p>
              <div className="flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                  Schedule Service
                </button>
                <button className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Thermometer className="w-8 h-8" />, title: 'AC Installation', description: 'Expert installation of new air conditioning systems' },
              { icon: <Wrench className="w-8 h-8" />, title: 'Maintenance & Repair', description: 'Regular maintenance and emergency repair services' },
              { icon: <Wind className="w-8 h-8" />, title: 'Air Quality', description: 'Indoor air quality assessment and improvement' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Clock className="w-6 h-6" />, title: '24/7 Service' },
              { icon: <Shield className="w-6 h-6" />, title: 'Licensed & Insured' },
              { icon: <MapPin className="w-6 h-6" />, title: 'Local Experts' },
              { icon: <Phone className="w-6 h-6" />, title: 'Fast Response' }
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
              <h2 className="text-3xl font-bold mb-4">Need Emergency Service?</h2>
              <p className="text-blue-100">Our team is available 24/7 for urgent repairs</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Call Now
              </button>
              <button className="border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition">
                Get Quote
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
              <h3 className="text-white font-bold text-lg mb-4">Cool Comfort AC</h3>
              <p className="text-sm">Professional air conditioning services for residential and commercial clients.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>AC Installation</li>
                <li>Maintenance & Repair</li>
                <li>Emergency Services</li>
                <li>Air Quality Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@coolcomfort.com</li>
                <li>Address: 123 Cool Street</li>
                <li>City, State 12345</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Hours</h4>
              <ul className="space-y-2 text-sm">
                <li>Monday - Friday: 8am - 6pm</li>
                <li>Saturday: 9am - 4pm</li>
                <li>Sunday: Closed</li>
                <li>Emergency: 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            © {new Date().getFullYear()} Cool Comfort AC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;