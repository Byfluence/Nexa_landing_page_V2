import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Clock, Bell } from 'lucide-react';

// Replace these with your actual product data!
const products = [
  {
    title: "AI Chatbot",
    description: "An intelligent assistant that helps users find answers instantly, automate workflows, and boost productivity.",
    image: "https://your-cdn.com/images/chatbot.png"
  },
  {
    title: "Realtime Analytics",
    description: "Monitor your platform’s performance, usage, and user behavior with live, actionable insights.",
    image: "https://your-cdn.com/images/analytics.png"
  },
  {
    title: "Smart Notifications",
    description: "Get notified about important events, updates, and trends tailored to your needs.",
    image: "https://your-cdn.com/images/notifications.png"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.2
    }
  }),
};

const TechnologiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative backdrop-blur-lg bg-white/5 rounded-2xl p-12 border border-white/10 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl" />
          <div className="relative">
            {/* Title Section */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <Rocket className="w-24 h-24 text-blue-400" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Our Technologies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
            >
              Explore the cutting-edge products powering our platform.
            </motion.p>

            {/* Glassmorphism Cards Section */}
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 justify-center mb-8">
              {products.map((product, i) => (
                <motion.div
                  key={product.title}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  className="backdrop-blur-md bg-white/20 border border-white/20 rounded-xl p-8 flex flex-col items-center shadow-xl"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-24 h-24 object-cover rounded-xl border-2 border-white/30 mb-4"
                  />
                  <h2 className="text-2xl font-bold text-white mt-2 mb-2">{product.title}</h2>
                  <p className="text-gray-300 text-center">{product.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Cutting Edge</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Bell className="w-5 h-5 text-blue-400" />
                <span>Stay Tuned for More</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologiesPage;
