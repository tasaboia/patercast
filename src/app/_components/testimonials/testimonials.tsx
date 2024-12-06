import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
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
        threshold: 0.2, // Ativa quando 20% da seção está visível
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
      transition: {
        staggerChildren: 0.3, // Atraso entre os filhos
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)" },
  };

  const starVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-14 overflow-hidden bg-primary-600 font-sans"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-10 md:max-w-3xl justify-center items-center flex flex-col gap-6 text-center mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-ebGaramond text-7xl lg:text-8xl text-white tracking-tighter-xl">
            Histórias reais e um investimento com propósito
          </h2>
          <h3 className="text-white text-2xl max-w-lg">
            Veja o impacto da Comunidade PaterCast na vida de outros homens:
          </h3>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-6 rounded-3xl"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {[1, 2].map((item, index) => (
            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 rounded-3xl"
              key={index}
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="relative px-9 py-10 h-full rounded-3xl bg-gradient-radial-dark bg-primary-400 ">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
                >
                  <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-primary-600"></div>
                  <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-primary-600"></div>
                </div>
                <motion.div
                  className="flex justify-start gap-2 mb-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                >
                  {[...Array(5)].map((_, index) => (
                    <motion.svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="text-[#E8A755] w-8 h-8"
                      variants={starVariants}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: index * 0.2, // Atraso em cascata
                      }}
                    >
                      <path d="M12 .587l3.668 7.429 8.2 1.193-5.932 5.778 1.4 8.163L12 18.896l-7.336 3.854 1.4-8.163L.132 9.209l8.2-1.193z" />
                    </motion.svg>
                  ))}
                </motion.div>
                <h3 className="text-2xl text-white">
                  {index === 0
                    ? "“A Comunidade tem sido um divisor de águas para minha formação como homem e futuro pai. Meu relacionamento e minha visão de paternidade foram transformados!”"
                    : "“Aprendi ferramentas para ser um marido melhor e desenvolver minha família de forma profunda, sem perder a individualidade de cada um.”"}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
