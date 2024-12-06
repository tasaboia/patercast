import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CTA() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={sectionRef}
      className="pt-20 pb-24 md:pb-32 overflow-hidden bg-primary-600 bg-[url('/images/background-child.png')] bg-no-repeat bg-bottom bg-cover"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap lg:items-center">
            <div className="w-full md:w-1/2 p-2 lg:p-12">
              <motion.h2
                className="mb-6 font-ebGaramond text-7xl text-white tracking-tighter-xl"
                initial={{ opacity: 0, y: -50 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
                }
                transition={{ duration: 0.8 }}
              >
                O que você encontra na{" "}
                <span className="text-orange-500">Comunidade PaterCast</span>
              </motion.h2>
              <motion.p
                className="mb-8 font-heading italic text-3xl text-white max-w-xs"
                initial={{ opacity: 0, y: -50 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
                }
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                E ainda um bônus especial para você!
              </motion.p>
            </div>
            <motion.div
              className="w-full flex flex-col px-2 lg:p-0 gap-6 md:w-1/2"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <motion.div
                className="border rounded-xl p-4 text-white font-sans font-semibold text-xl border-orange-500"
                variants={itemVariants}
              >
                <p>
                  Na Comunidade PaterCast, você terá acesso a pilares essenciais
                  que transformarão sua jornada:
                </p>
              </motion.div>
              <motion.div
                className="bg-primary-400 p-8 flex flex-col gap-6 text-white font-sans rounded-4xl"
                variants={containerVariants}
              >
                {/* Primeiro ícone e texto */}
                <motion.div className="flex gap-6" variants={itemVariants}>
                  <div>
                    <Image
                      src="/icons/heart-icon.png"
                      alt=""
                      width={71}
                      height={58}
                      className="w-[71px] h-[58px] object-contain"
                    />
                  </div>
                  <div>
                    <strong>Estratégias aplicáveis:</strong>{" "}
                    <span className="font-light">
                      Técnicas práticas para fortalecer sua liderança no lar e
                      sua conexão com seus filhos.
                    </span>
                  </div>
                </motion.div>

                {/* Segundo ícone e texto */}
                <motion.div className="flex gap-6" variants={itemVariants}>
                  <div>
                    <Image
                      src="/icons/network-icon.png"
                      alt=""
                      width={71}
                      height={58}
                      className="w-[71px] h-[58px] object-contain"
                    />
                  </div>
                  <div>
                    <strong>Exercícios e desafios:</strong>{" "}
                    <span className="font-light">
                      Atividades para inspirar sua jornada e criar laços com
                      outros membros.
                    </span>
                  </div>
                </motion.div>

                {/* Terceiro ícone e texto */}
                <motion.div className="flex gap-6" variants={itemVariants}>
                  <div>
                    <Image
                      src="/icons/start-icon.png"
                      alt=""
                      width={71}
                      height={58}
                      className="w-[71px] h-[58px] object-contain"
                    />
                  </div>
                  <div>
                    <strong>Conteúdos únicos:</strong>{" "}
                    <span className="font-light">
                      Sorteios de livros e aulas exclusivas para enriquecer sua
                      visão sobre paternidade.
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
