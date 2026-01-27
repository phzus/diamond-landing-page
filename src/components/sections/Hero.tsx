  "use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black pb-[100px] pt-32">
      {/* Background Effect (Subtle glow behind text) */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[120px]" />

      <div className="container-diamond relative z-10 flex flex-col items-center text-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl font-distrample text-5xl font-medium tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[6rem] lg:leading-[1.05]"
        >
          {/* Mobile Layout (Default) - match the print provided */}
          <span className="block md:hidden">
            A EXPERIÊNCIA<br />
            DE LAS VEGAS<br />
            NO NORDESTE
          </span>

          {/* Desktop/Tablet Layout */}
          <span className="hidden md:block">
            <span className="block">A EXPERIÊNCIA DE</span>
            <span className="block text-white">LAS VEGAS NO NORDESTE</span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-4xl font-helvetica text-lg font-light leading-relaxed text-white/70 md:text-2xl"
        >
          Atmosfera envolvente dos grandes cassinos internacionais, unindo a emoção
          do esporte da mente à sofisticação de um ambiente seguro, climatizado e
          luxuoso.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
        >
          {/* Secondary CTA (Outline) */}
          <Link
            href="#saiba-mais"
            className="group relative inline-flex h-14 min-w-[160px] items-center justify-center overflow-hidden rounded-full border border-white/20 bg-transparent px-8 font-helvetica text-base font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/5"
          >
            <span className="relative z-10">SAIBA MAIS</span>
          </Link>

          {/* Primary CTA (Solid with Glow) */}
          <Link
            href="#conhecer"
            className="group relative inline-flex h-14 min-w-[200px] items-center justify-center overflow-hidden rounded-full bg-white px-8 font-helvetica text-base font-medium text-black shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              VENHA NOS CONHECER
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
