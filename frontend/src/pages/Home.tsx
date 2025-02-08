import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Shield, Truck, Star, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ctaBackground from '../assets/images/hero/cta-background.jpg';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <img
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070"
            alt="Cardamom Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Premium Quality<br />
                  <span className="text-[#8BC34A]">Cardamom & Spices</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl">
                  Experience the authentic flavors of Kerala's finest cardamom, expertly processed and exported worldwide.
                </p>
                <div className="flex space-x-4">
                  <Link
                    to="/contact"
                    className="bg-[#2D5A27] text-white px-8 py-4 rounded-lg hover:bg-[#234820] transition-all transform hover:scale-105 inline-flex items-center space-x-2 shadow-lg"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/about"
                    className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all transform hover:scale-105 inline-flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md z-20">
          <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center text-white"
            >
              <div className="text-3xl font-bold mb-1">20+</div>
              <div className="text-sm opacity-80">Years of Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center text-white"
            >
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-sm opacity-80">Global Partners</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center text-white"
            >
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm opacity-80">Quality Assured</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-[#F2F5E6] via-[#E8EFE2] to-[#F7F5E8]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2A3B22] mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the difference of working with a trusted leader in the spice industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Assurance",
                description:
                  "Rigorous quality control at every step ensures premium grade spices",
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Sustainable Practices",
                description:
                  "Committed to environmentally conscious farming and processing methods",
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Global Reach",
                description:
                  "Efficient export services reaching markets worldwide",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Certified Excellence",
                description:
                  "Internationally recognized certifications and standards",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Team",
                description:
                  "Dedicated professionals with years of industry experience",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Customer Satisfaction",
                description:
                  "Committed to exceeding customer expectations every time",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-[#F2F5E6] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:from-[#F7F5E8] hover:to-[#E8EFE2]"
              >
                <div className="bg-[#2D5A27]/15 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2D5A27]/25 transition-colors duration-300">
                  {React.cloneElement(feature.icon, {
                    className: "w-8 h-8 text-[#2D5A27]",
                  })}
                </div>
                <h3 className="text-xl font-bold text-[#2A3B22] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-[#F7F5E8] via-[#E8EFE2] to-[#F4F7F4]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              State-of-the-art facilities for processing and exporting premium quality cardamom
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fworkersmachinery.en.made-in-china.com%2Fproduct%2FFZgGeWvTXipm%2FChina-Easy-Operation-Hot-Air-Dryer-Cardamom-Drying-Machine-Tray-Dryer.html&psig=AOvVaw2I2GXhvUeyoRjM7t---TSm&ust=1738478983102000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCKxIzxoYsDFQAAAAAdAAAAABAJ"
                  alt="Cardamom Dryer"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">Electric Cardamom Dryer</h3>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-white to-[#F2F5E6]">
                <p className="text-gray-700 mb-6">
                  Our state-of-the-art cardamom drying facility ensures optimal moisture content and preserves
                  the natural qualities of cardamom. We use advanced technology to maintain consistent quality.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <Star className="w-5 h-5 text-[#2D5A27] mr-2" />
                    Temperature controlled drying
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Star className="w-5 h-5 text-[#2D5A27] mr-2" />
                    Moisture content monitoring
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Star className="w-5 h-5 text-[#2D5A27] mr-2" />
                    Quality preservation techniques
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Star className="w-5 h-5 text-[#2D5A27] mr-2" />
                    High capacity processing
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fworkersmachinery.en.made-in-china.com%2Fproduct%2FFZgGeWvTXipm%2FChina-Easy-Operation-Hot-Air-Dryer-Cardamom-Drying-Machine-Tray-Dryer.html&psig=AOvVaw2I2GXhvUeyoRjM7t---TSm&ust=1738478983102000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCKxIzxoYsDFQAAAAAdAAAAABAJ"
                  alt="Export Trading"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">Cardamom Export Trading</h3>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-white to-[#F2F5E6]">
                <p className="text-gray-700 mb-6">
                  We specialize in exporting premium quality cardamom and spices to international markets,
                  ensuring timely delivery and compliance with trade regulations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <Star className="w-5 h-5 text-[#2D5A27] mr-2" />
                    International market expertise
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Star className="w-5 h-5 text-[#2D5A27] mr-2" />
                    Quality assurance certificates
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Star className="w-5 h-5 text-[#2D5A27] mr-2" />
                    Efficient logistics management
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Star className="w-5 h-5 text-[#2D5A27] mr-2" />
                    Competitive pricing
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ctaBackground}
            alt="Spice Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2F17]/90 to-[#1A2F17]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience<br />Premium Quality Spices?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your requirements and discover how we can serve your business needs
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#1A2F17] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center space-x-2 shadow-lg"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;