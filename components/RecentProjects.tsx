"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectSlideProps {
  project: any;
  index: number;
  isActive: boolean;
}

const ProjectSlide = ({ project, index, isActive }: ProjectSlideProps) => {
  const slideRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  return (
    <motion.div
      ref={slideRef}
      className="w-full h-full flex justify-center px-2 lg:px-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{
        transformOrigin: "center",
        transform: isActive
          ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
          : "none",
      }}
    >
      <div className="relative w-full h-full">
        <PinContainer
          title={project.link}
          href={project.link}
          containerClassName="w-full h-full "
        >
          <motion.div
            className="relative w-[400px] h-[200px] lg:h-[250px]  overflow-hidden rounded-3xl mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Container avec fond par défaut */}
            <div
              className="relative w-full h-full overflow-hidden rounded-3xl"
              style={{ backgroundColor: "#13162D" }}
            >
              {/* Image de fond conditionnelle */}
              <div className="absolute inset-0">
                <Image
                  src="/bg.png"
                  alt="background"
                  fill
                  className="object-cover opacity-30"
                  onError={() => {}}
                />
              </div>

              {/* Image du projet */}
              <motion.div
                className="absolute inset-0 z-10 flex items-center justify-center p-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {!imageError ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-contain md:object-contain lg:object-cover drop-shadow-2xl"
                      priority={isActive}
                      onError={() => setImageError(true)}
                    />
                  </div>
                ) : (
                  // Fallback élégant si l'image ne se charge pas
                  <div className="w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-purple-800/20 rounded-2xl flex items-center justify-center border border-white/10">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        <svg
                          className="w-8 h-8 text-white/60"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                      <p className="text-xs text-white/60 font-medium">
                        {project.title}
                      </p>
                      <p className="text-xs text-white/40 mt-1">
                        Aperçu du projet
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Overlay subtil pour améliorer la lisibilité */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1
              className="font-bold text-lg lg:text-xl line-clamp-2 text-white mb-2"
              title={project.title}
            >
              {project.title}
            </h1>

            <p
              className="text-sm font-light line-clamp-2 lg:line-clamp-3 text-neutral-300"
              title={project.des}
            >
              {project.des}
            </p>
          </motion.div>

          <motion.div
            className="flex items-center justify-between mt-4 lg:mt-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center">
              {project.iconLists
                .slice(0, 4)
                .map((icon: string, iconIndex: number) => (
                  <motion.div
                    key={iconIndex}
                    className="border border-white/20 rounded-full bg-black/50 backdrop-blur-sm w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${4 * iconIndex}px)`,
                      zIndex: project.iconLists.length - iconIndex,
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Image
                      width={16}
                      height={16}
                      src={icon}
                      alt="technology"
                      className="w-4 h-4 lg:w-5 lg:h-5"
                    />
                  </motion.div>
                ))}
              {project.iconLists.length > 4 && (
                <div className="border border-white/20 rounded-full bg-black/50 backdrop-blur-sm w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center ml-2">
                  <span className="text-xs text-white/60">
                    +{project.iconLists.length - 4}
                  </span>
                </div>
              )}
            </div>

            <motion.a
              href={project.link}
              target="_blank"
              className="flex justify-center items-center group text-purple-400 hover:text-purple-300 transition-colors"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <p className="text-xs lg:text-sm font-medium">Voir</p>
              <motion.div
                className="ml-1 lg:ml-2"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaLocationArrow className="w-3 h-3 lg:w-4 lg:h-4" />
              </motion.div>
            </motion.a>
          </motion.div>
        </PinContainer>
      </div>
    </motion.div>
  );
};

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
  disabled?: boolean;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
  disabled,
}: CarouselControlProps) => {
  return (
    <motion.button
      className={`w-12 h-12 lg:w-14 lg:h-14 flex items-center mx-2 lg:mx-4 justify-center bg-neutral-900/80 backdrop-blur-sm border border-white/10 rounded-full focus:border-purple-400 focus:outline-none transition-all duration-300 ${
        type === "previous" ? "rotate-180" : ""
      } ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:border-purple-400/50"
      }`}
      title={title}
      onClick={handleClick}
      disabled={disabled}
      whileHover={
        disabled
          ? {}
          : {
              scale: 1.05,
              y: -2,
              backgroundColor: "rgba(139, 92, 246, 0.1)",
            }
      }
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <IconArrowNarrowRight className="text-neutral-300 w-5 h-5 lg:w-6 lg:h-6" />
    </motion.button>
  );
};

const RecentProjects = () => {
  const [current, setCurrent] = useState(0);

  // Calculate slides based on screen size
  const getProjectsPerSlide = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1024 ? 3 : 1; // 3 on desktop (lg+), 1 on mobile/tablet
    }
    return 1;
  };

  const [projectsPerSlide, setProjectsPerSlide] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setProjectsPerSlide(getProjectsPerSlide());
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate total slides
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? totalSlides - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next >= totalSlides ? 0 : next);
  };

  // Get projects for current slide
  const getCurrentSlideProjects = () => {
    const startIndex = current * projectsPerSlide;
    return projects.slice(startIndex, startIndex + projectsPerSlide);
  };

  // Auto-play functionality (optionnel)
  useEffect(() => {
    if (totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 12000); // Change slide every 12 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <motion.div
      className="py-20"
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="heading text-center mb-16"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Quelques <span className="text-purple">projets récents</span>
      </motion.h1>

      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className={`grid gap-4 lg:gap-6 ${
                projectsPerSlide === 3
                  ? "grid-cols-1 lg:grid-cols-3"
                  : "grid-cols-1"
              } min-h-[600px] lg:min-h-[800px]`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {getCurrentSlideProjects().map((project, index) => (
                <div key={`${current}-${project.id}`} className="h-full">
                  <ProjectSlide
                    project={project}
                    index={index}
                    isActive={true}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls - Only show if more than 1 slide */}
        {totalSlides > 1 && (
          <motion.div
            className="flex justify-center items-center mt-8 lg:mt-16 gap-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <CarouselControl
              type="previous"
              title="Projets précédents"
              handleClick={handlePreviousClick}
            />

            {/* Indicators */}
            <div className="flex space-x-2 lg:space-x-3">
              {Array.from({ length: totalSlides }, (_, index) => (
                <motion.button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-purple-500 w-6 lg:w-8"
                      : "bg-white/30 hover:bg-white/50 w-2"
                  }`}
                  onClick={() => setCurrent(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <CarouselControl
              type="next"
              title="Projets suivants"
              handleClick={handleNextClick}
            />
          </motion.div>
        )}

        {/* Project Counter */}
        <motion.div
          className="text-center mt-6 lg:mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="text-white/60 text-sm font-medium">
            {projectsPerSlide === 3
              ? `Slide ${current + 1} / ${totalSlides} (${
                  projects.length
                } projets)`
              : `${current + 1} / ${projects.length}`}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RecentProjects;
