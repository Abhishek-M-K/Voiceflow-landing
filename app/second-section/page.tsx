"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    name: "Customizable",
    description:
      "Pick from 100s of AI solutions to leverage your business needs, and build your brand from home.",
    image: "/images/features/custom.png",
    alt: "logo",
  },
  {
    name: "Zuper Fast",
    description:
      "Deploy your professional business website in less than 5 hours, and start selling online.",
    image: "/images/features/flash-dynamic-color.png",
    alt: "logo",
  },
  {
    name: "Integration",
    description:
      "Integrate as many AI tools as you want to uplift your business management strategies.",
    image: "/images/features/icon-journey.png",
    alt: "logo",
  },
  {
    name: "Layered Structure",
    description:
      "Choose from the tools that follow layered structure, meaning they wont affect functionality of other tools.",
    image: "/images/features/icon-layer.png",
    alt: "logo",
  },
  {
    name: "Safety & Security",
    description:
      "Get SSL certificate for your website to ensure safety of your customers.",
    image: "/images/features/sheild-dynamic-color.png",
    alt: "logo",
  },
  {
    name: "Customer Support",
    description: "Get 24/7 support from our team of experts.",
    image: "/images/features/icon-support-1.png",
    alt: "logo",
  },
];

const SecondSection = () => {
  return (
    <div>
      <div className="flex-col items-center justify-center">
        <div
          className="flex justify-center text-3xl md:text-4xl font-bold pt-5 pb-10
                    bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent"
        >
          Product Features
        </div>

        <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4 md:px-40">
          {features.map((feature) => (
            <div
              className="flex-col gap-y-6 border pb-10 rounded-xl p-8 
                items-center justify-center w-full hover:scale-105 transform transition-all
                duration-500 ease-in-out"
            >
              <div className="text-gray-600 text-3xl font-bold">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={100}
                  height={100}
                  className="object-contain h-20 w-20 items-center justify-center flex"
                />
                <div>
                  <div
                    className="text-2xl pb-4 bg-gradient-to-t
                    from-black to-gray-400 bg-clip-text text-transparent"
                  >
                    {feature.name}
                  </div>

                  <div
                    className="bg-gradient-to-r from-gray-800 to-gray-400 
                  text-lg bg-clip-text text-transparent"
                  >
                    {feature.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
