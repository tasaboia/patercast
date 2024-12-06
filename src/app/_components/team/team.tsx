import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden bg-primary-600">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex px-8 flex-wrap lg:items-center -m-8 lg:-m-12"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div
              className="w-full md:w-1/2 p-8 lg:p-12"
              variants={itemVariants}
            >
              <div className="max-w-max mx-auto">
                <Image
                  src="/images/TEAM.png"
                  width={560}
                  height={752.88}
                  alt=""
                  className="rounded-xl"
                />
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 p-8 lg:p-12 text-lg font-sans"
              variants={itemVariants}
            >
              <h2 className="mb-6 text-8xl font-ebGaramond md:text-10xl text-white tracking-tighter">
                Sobre os <span className="text-orange-500">Criadores</span>
              </h2>
              <p className="mb-10 text-white md:max-w-sm text-justify">
                Somos homens que acreditam no poder transformador de uma{" "}
                <strong>paternidade ativa</strong> e de uma{" "}
                <strong>hombridade saudável.</strong>
              </p>
              <p className="mb-10 text-white md:max-w-sm text-justify">
                Nossa missão é <strong>equipar pais para mudar o mundo</strong>,
                começando dentro de suas próprias casas.
              </p>
            </motion.div>

            <motion.div
              className="w-full justify-center items-center flex"
              variants={itemVariants}
            >
              <Link
                className="w-full flex justify-center items-center max-w-sm text-center gap-4 p-2 tracking-tighter text-white bg-[#4D765E] hover:bg-orange-400  focus:ring-4 focus:ring-orange-400 focus:ring-opacity-40 font-sans font-bold text-md lg:text-xl uppercase rounded-full transition duration-300"
                href="#pricing"
              >
                <Image src="/icons/icon.png" width={30} height={30} alt="" />
                ⁠7 dias de cancelamento
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
