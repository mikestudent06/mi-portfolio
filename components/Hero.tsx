"use client";

import { motion } from "framer-motion";
import { FaFile, FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { SparklesCore } from "./ui/sparkles";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const Hero = () => {
  // Variants d'animation pour la réutilisabilité
  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 },
    },
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInDown = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.5 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };

  const buttonVariant = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "backOut" },
    },
  };

  return (
    <div className="relative w-full flex justify-between items-center h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Hero Content */}
      <div className="relative h-full w-full flex flex-col-reverse md:flex-row justify-center items-center px-6 pb-32">
        {/* Section texte */}
        <motion.div
          className="w-1/2 flex flex-col justify-center items-center text-center"
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="uppercase tracking-widest text-xs text-primary dark:text-blue-200 mb-2"
            variants={fadeInDown}
            initial="hidden"
            animate="visible"
          >
            Réussir c&apos;est aider les autres à réussir ! &#128512;
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <TextGenerateEffect
              className="text-[32px] md:text-4xl lg:text-5xl leading-tight mb-4 text-gray-800 dark:text-gray-100"
              words="Transformez vos idées en réalité digitale."
            />
          </motion.div>

          <motion.p
            className="text-sm md:text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
          >
            Bonjour, je suis Michel MOUHANI, développeur web basé au Congo
            Brazzaville.
          </motion.p>

          <motion.div
            className="flex items-center gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="#about"
              variants={buttonVariant}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <MagicButton
                title="Voir mon travail"
                icon={<FaLocationArrow />}
                position="right"
              />
            </motion.a>

            <motion.a
              href="/cv.pdf"
              download="CV"
              variants={buttonVariant}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <MagicButton
                title="Voir mon cv"
                icon={<FaFile />}
                position="right"
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Section image */}
        <motion.div
          className="w-1/2 flex justify-center items-center"
          variants={slideInFromRight}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full mt-4">
                  <motion.img
                    src={"/me.jpeg"}
                    height="1000"
                    width="1000"
                    className="h-auto w-full object-contain rounded-xl group-hover/card:shadow-xl"
                    alt="Profile image"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
