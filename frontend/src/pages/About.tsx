import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Leaf, Shield, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1599207868884-8e409981d445?q=80&w=2070"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2F17]/90 via-[#2D5A27]/80 to-[#1A2F17]/90" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Our Story
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                A journey of passion, quality, and commitment to delivering the finest cardamom and spices from Kerala
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-[#F7F5E8] via-[#E8EFE2] to-[#F4F7F4]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2070"
                  alt="Cardamom Processing"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl bg-gradient-to-br from-[#F2F5E6] to-white">
                  <p className="text-3xl font-bold text-[#2A3B22]">20+</p>
                  <p className="text-sm text-gray-600">Years of Excellence</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-[#2A3B22] mb-6">
                Heritage of Quality Since 2000
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                JJ Spices began its journey in the lush hills of Kerala, driven by a passion for quality and 
                a deep understanding of spices. Our expertise in cardamom processing and trading has made us 
                a trusted name in the global spice market.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, we continue to maintain our commitment to excellence, combining traditional knowledge 
                with modern technology to deliver premium quality spices to our customers worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-[#F2F5E6] via-[#E8EFE2] to-[#F7F5E8]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2A3B22] mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              These principles guide our operations and reflect our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Assurance",
                description: "Rigorous quality control at every step of processing",
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Sustainability",
                description: "Environmentally conscious practices in farming and processing",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence",
                description: "Commitment to exceeding industry standards",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community",
                description: "Supporting local farmers and their families",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-gradient-to-br from-white to-[#F2F5E6] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:from-[#F7F5E8] hover:to-[#E8EFE2]"
              >
                <div className="bg-[#2D5A27]/15 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2D5A27]/25 transition-colors duration-300">
                  {React.cloneElement(value.icon, {
                    className: "w-8 h-8 text-[#2D5A27]",
                  })}
                </div>
                <h3 className="text-xl font-bold text-[#2A3B22] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1596040033610-d7896d77dd39?q=80&w=2070"
            alt="Vision Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2F17]/90 via-[#2D5A27]/80 to-[#1A2F17]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              To be the most trusted name in premium quality cardamom and spices, 
              setting global standards while supporting sustainable farming practices 
              and empowering local communities.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;