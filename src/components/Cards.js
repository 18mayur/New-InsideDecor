"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../public/Images/logo.jpg";

export default function DesignPhilosophy() {
  const [active, setActive] = useState(1); // default first expanded

  const cards = [
    {
      id: 1,
      title: "Budget-friendly design solutions",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nihil excepturi temporibus.",
      bg: "/Images/inside-2600919_1280.jpg",
    },
    {
      id: 2,
      title: "Modern furniture ideas",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nihil excepturi temporibus.",
      bg: "/Images/furniture-1840463_1920.jpg",
    },
    {
      id: 3,
      title: "Creative kitchen designs",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nihil excepturi temporibus.",
      bg: "/Images/kitchen-g1bea9c716_1920.jpg",
    },
  ];

  return (
    <section className="container mx-auto py-8 flex flex-col gap-12">
      <div className="flex flex-col justify-center gap-2 items-center">
        <h2 className="md:text-[2.4rem]">Our design philosophy</h2>
        <h4 className="md:text-[1rem]">
          Innovative solutions for every home and budget
        </h4>
      </div>

      {/* Parent handles leaving to revert to default */}
      <div
        className="flex flex-col md:flex-row gap-5 items-stretch"
        onMouseLeave={() => setActive(1)}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layout
            onMouseEnter={() => setActive(card.id)}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            whileHover={{ scale: 1.01 }}
            className={
              // md:basis-1/2 = expanded (col-6), md:basis-1/4 = collapsed (col-3)
              `relative flex flex-col overflow-hidden rounded-xl cursor-pointer flex-1 min-h-[280px] md:min-h-[360px] transition-all duration-300 ease-in-out 
               ${active === card.id ? "md:basis-1/2" : "md:basis-1/4"}`
            }
            style={{
              backgroundImage: `url(${card.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-6">
              <div>
                <div className="mb-3">
                  <Image
                    src={logo}
                    alt="logo"
                    width={42}
                    height={42}
                    className="rounded-full"
                  />
                </div>

                <h3 className="text-white font-bold leading-tight text-[1.6rem] md:text-[2rem]">
                  {card.title}
                </h3>
                <p className="text-white text-[1rem] mt-2 leading-tight">
                  {card.desc}
                </p>
              </div>

              <div className="mt-4">
                <button className="bg-white text-black px-4 py-2 rounded-lg">
                  btn
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
