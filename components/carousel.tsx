"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    url: "/images/l1.svg",
    alt: "Logo",
  },
  {
    url: "/images/l2.svg",
    alt: "Logo",
  },
  {
    url: "/images/l3.svg",
    alt: "Logo",
  },
  {
    url: "/images/l4.svg",
    alt: "Logo",
  },
  {
    url: "/images/l5.svg",
    alt: "Logo",
  },
  {
    url: "/images/l6.svg",
    alt: "Logo",
  },
  {
    url: "/images/l7.svg",
    alt: "Logo",
  },
  {
    url: "/images/l8.svg",
    alt: "Logo",
  },
  {
    url: "/images/l9.svg",
    alt: "Logo",
  },
  {
    url: "/images/l10.svg",
    alt: "Logo",
  },
  {
    url: "/images/l11.svg",
    alt: "Logo",
  },
  {
    url: "/images/l12.svg",
    alt: "Logo",
  },
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        className="items-center justify-center flex text-2xl md:pb-10 px-10 font-bold
        bg-gradient-to-r from-black to-gray-400
        bg-clip-text text-transparent
        "
      >
        More than 100+ brands have boost their business with VoiceflowAI Inc
      </div>

      <div className="grid grid-cols-3 p-4 md:flex">
        <AnimatePresence custom={currentImage}>
          {images.map((image, index) => (
            <motion.div
              className="flex items-center justify-center w-40 h-40"
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImage ? 1 : 0.8,
                scale: index === currentImage ? 1.2 : 1,
                transition: { duration: 0.5 },
              }}
              exit={{ opacity: 0 }}
              custom={index}
              transition={{
                opacity: { duration: 0.5 },
              }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={200}
                height={200}
                className="object-contain h-20 w-20 items-center justify-center flex mx-auto"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;
