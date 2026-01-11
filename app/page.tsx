"use client";

import Image from "next/image";
import { motion, Variants } from "motion/react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { y: 10, opacity: 0, filter: "blur(10px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.3 },
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="relative mx-auto flex h-screen max-w-7xl flex-col gap-16 px-6 pt-28">
        <header className="z-20 flex items-baseline-last justify-between">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2.5"
          >
            <motion.div
              variants={item}
              initial="hidden"
              animate="show"
              className="relative h-6 w-6 md:h-8 md:w-8"
            >
              <Image
                src="/safedep.svg"
                alt="SafeDep Logo"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              variants={item}
              className="text-xl font-medium tracking-tight text-white/90 md:text-2xl"
            >
              SafeDep
            </motion.div>
          </motion.div>
        </header>

        <main className="relative z-10 flex h-full w-full flex-col items-start">
          <h1 className="flex flex-col text-6xl leading-[0.9] font-medium tracking-tighter text-white/80 sm:text-7xl md:text-9xl lg:text-[8rem]">
            <motion.div
              className="flex"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {Array.from("Internship").map((char, idx) => (
                <motion.span key={idx} variants={item}>
                  {char}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="flex"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    delayChildren: 1.0,
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {Array.from("Task").map((char, idx) => (
                <motion.span key={idx} variants={item}>
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </h1>
        </main>

        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 z-0 h-[35vh] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/illustrations/background1.png")',
          }}
        />

        <div className="pointer-events-none absolute bottom-0 left-0 z-5 hidden h-[35vh] w-[12%] bg-linear-to-r from-black/95 via-black/60 to-transparent sm:block" />
        <div className="pointer-events-none absolute right-0 bottom-0 z-5 hidden h-[35vh] w-[12%] bg-linear-to-l from-black/95 via-black/60 to-transparent sm:block" />
      </div>
    </div>
  );
}
