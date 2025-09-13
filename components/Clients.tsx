"use client";

import React, { useState } from "react";
import { companies, testimonials } from "@/data";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Types
interface Testimonial {
  quote: string;
  name: string;
  title: string;
  img: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

// Custom Testimonial Card Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isActive,
  onClick,
  index,
}) => {
  // Define gradient backgrounds for variety
  const gradientBackgrounds: string[] = [
    "from-purple-600/20 via-blue-600/20 to-indigo-700/20",
    "from-blue-600/20 via-cyan-600/20 to-teal-700/20",
    "from-indigo-600/20 via-purple-600/20 to-pink-700/20",
    "from-cyan-600/20 via-blue-600/20 to-purple-700/20",
  ];

  const backgroundGradient =
    gradientBackgrounds[index % gradientBackgrounds.length];

  return (
    <motion.div
      className={`relative cursor-pointer transition-all duration-500 ${
        isActive
          ? "flex-[2] md:flex-[2]"
          : "flex-[0.5] md:flex-[0.5] lg:flex-[0.5]"
      }`}
      onClick={onClick}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
      layout
    >
      <div
        className={`relative h-[400px] sm:h-[450px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br ${backgroundGradient} border border-white/10 backdrop-blur-sm`}
      >
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), 
                             radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-4 sm:p-5 md:p-6 h-full flex flex-col justify-between">
          {/* Profile Section */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white/30 bg-neutral-800 flex-shrink-0">
              <Image
                src={testimonial.img}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg truncate">
                {testimonial.name}
              </h3>
              <p className="text-purple-300 text-xs sm:text-sm truncate">
                {testimonial.title}
              </p>
            </div>
          </div>

          {/* Quote Section - Only show when active */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.2 }}
                className="flex-1 flex items-center mt-4 md:mt-0"
              >
                <div className="bg-black/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 w-full">
                  <div className="text-purple-400 text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">
                    "
                  </div>
                  <p className="text-white/90 text-xs sm:text-sm md:text-sm leading-relaxed italic line-clamp-6 sm:line-clamp-none">
                    {testimonial.quote}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom gradient for inactive cards */}
          {!isActive && (
            <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 md:h-32 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl md:rounded-b-3xl" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const companyVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const Clients: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <motion.section
      id="testimonials"
      className="py-12 sm:py-16 md:py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="heading text-center mb-8 sm:mb-12 md:mb-16 px-4"
        variants={itemVariants}
      >
        Quelques mots des{" "}
        <span className="text-purple">clients satisfaits</span>
      </motion.h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* Custom Testimonials Section */}
        <motion.div
          className="w-full max-w-7xl mx-auto px-4 mb-12 sm:mb-16 md:mb-20"
          variants={itemVariants}
        >
          {/* Desktop and Tablet View */}
          <div className="hidden sm:flex gap-3 md:gap-4 h-[400px] sm:h-[450px] md:h-[500px]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                isActive={activeCard === index}
                onClick={() => setActiveCard(index)}
                index={index}
              />
            ))}
          </div>

          {/* Mobile View - Single Card with Swipe Navigation */}
          <div className="sm:hidden">
            <div className="relative overflow-hidden">
              <motion.div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(-${activeCard * 100}%)`,
                  width: `${testimonials.length * 100}%`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    {/* Mobile-specific testimonial card */}
                    <div className="relative h-auto min-h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-700/20 border border-white/10 backdrop-blur-sm">
                      {/* Pattern overlay */}
                      <div className="absolute inset-0 opacity-5">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), 
                                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
                            backgroundSize: "50px 50px",
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 p-5 space-y-4">
                        {/* Profile Section */}
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 bg-neutral-800 flex-shrink-0">
                            <Image
                              src={testimonial.img}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-white font-semibold text-base">
                              {testimonial.name}
                            </h3>
                            <p className="text-purple-300 text-sm">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>

                        {/* Quote Section */}
                        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <div className="text-purple-400 text-3xl mb-3">"</div>
                          <p className="text-white/90 text-sm leading-relaxed italic">
                            {testimonial.quote}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeCard
                    ? "bg-purple-500 w-6 sm:w-8"
                    : "bg-white/30 hover:bg-white/50 w-2"
                }`}
                onClick={() => setActiveCard(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Companies Section */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-16 max-lg:mt-10 mt-12 sm:mt-16 md:mt-20 px-4"
          variants={containerVariants}
        >
          <motion.h3
            className="w-full text-center text-base sm:text-lg md:text-xl text-white/80 font-medium mb-6 sm:mb-8"
            variants={itemVariants}
          >
            Ils nous font confiance
          </motion.h3>

          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              className="flex max-w-24 sm:max-w-32 md:max-w-60 gap-1 sm:gap-2 items-center"
              variants={companyVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              custom={index}
            >
              <motion.div
                className="relative flex-shrink-0"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={company.img}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="w-4 sm:w-5 md:w-10 filter brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </motion.div>

              <motion.div
                className="relative min-w-0"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="w-16 sm:w-20 md:w-24 filter brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20 w-full max-w-4xl mx-auto px-4"
          variants={containerVariants}
        >
          <motion.div
            className="text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              {testimonials.length}+
            </motion.div>
            <p className="text-white/70 text-sm sm:text-base">
              Clients satisfaits
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            >
              100%
            </motion.div>
            <p className="text-white/70 text-sm sm:text-base">
              Taux de satisfaction
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
            >
              {companies.length}+
            </motion.div>
            <p className="text-white/70 text-sm sm:text-base">
              Entreprises partenaires
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Clients;
