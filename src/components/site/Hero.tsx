import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import construction2Img from "@/assets/archive/construction20.jpeg";
const heroSlides = [
  {
    image: "https://drive.google.com/uc?export=view&id=1VlSYRL66tZSrsprpswOtMkTlYprKaceo",
    text: "Build for Africa\nBacked by Global Expertise",
    position: "top-left",
  },
  {
    image: "/hero2.jpeg",
    text: "Your Trusted Partner\nfor Africa's Critical Industries",
    position: "top-right",
  },
  {
    image: "/hero section3.jpeg",
    text: "",
  },
  {
    image: construction2Img,
    text: "",
  }
];



export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            fetchPriority="high"
            key={currentImageIndex}
            src={heroSlides[currentImageIndex].image}
            alt="Sevengate Background"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container-x h-[100svh] pt-24 pb-16">
        <AnimatePresence mode="wait">
          {(() => {
            const slide = heroSlides[currentImageIndex];
            let alignClasses = "justify-center items-center text-center px-6 md:px-12";
            let textClasses = "text-5xl md:text-7xl";

            if (slide.position === "bottom-right") {
              alignClasses = "justify-end items-end text-right pb-12 md:pb-16 px-6 md:px-12";
              textClasses = "text-3xl md:text-5xl";
            } else if (slide.position === "top-left") {
              alignClasses = "justify-start items-start text-left pt-28 md:pt-36 px-6 md:px-12";
              textClasses = "text-3xl md:text-5xl";
            } else if (slide.position === "top-right") {
              alignClasses = "justify-start items-end text-right pt-28 md:pt-36 px-6 md:px-12";
              textClasses = "text-3xl md:text-5xl";
            }

            return (
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`absolute inset-0 flex flex-col w-full ${alignClasses}`}
              >
                <h1 className={`text-white font-display font-light tracking-wide drop-shadow-md whitespace-pre-line ${textClasses}`}>
                  {slide.text}
                </h1>
              </motion.div>
            );
          })()}
        </AnimatePresence>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {sectors.map((sector) => (
            <Link
              key={sector.title}
              to={sector.link}
              className="group flex flex-col items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <span className="font-sans text-xl md:text-2xl font-light tracking-wide">
                {sector.title}
              </span>
              <div className="h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
