import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Pricing() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-16 overflow-hidden text-white bg-gradient-to-b from-[#1D342A] to-[#12271F]"
    >
      <div className="container px-4 mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-12 md:max-w-2xl text-center mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-sans text-3xl lg:text-4xl text-white tracking-7xl lg:tracking-4xl font-semibold">
            Invista na transformação de sua vida e na construção de um legado
            duradouro:
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="mb-6 flex px-8 justify-center items-center flex-wrap -m-4 text-xl font-sans text-center gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {/* Monthly Plan */}
          <motion.div
            className="w-full md:w-1/4 p-4 bg-[#151515] rounded-4xl flex flex-col gap-4 hover:scale-105 transition-transform duration-300"
            variants={cardVariants}
          >
            <p className="rounded-2xl   text-center p-2 font-semibold">
              Assinatura <strong>Mensal</strong>
            </p>
            <p className="text-5xl font-bold pb-8">R$ 129 /m</p>
            <Link
              className="w-full py-2  text-center tracking-tighter   bg-orange-500 hover:bg-orange-400 text-primary-500 focus:ring-4 focus:ring-orange-400 focus:ring-opacity-40 font-sans font-bold text-md lg:text-xl uppercase rounded-full transition duration-300"
              target="_blank"
              href="https://hotmart.com/pt-br/marketplace/produtos/comunidade-pastercast/W95234954N?off=myuyctek&fbclid=PAZXh0bgNhZW0CMTEAAabUytJo8wzx7sksZ0nTgbX24FvXjSH96i0_y1_wuO7bM1z1iozwS8m49yw_aem_Eo38u-9CVjYTuaVQU7w_IA"
            >
              Assinar agora
            </Link>
          </motion.div>

          {/* Annual Plan */}
          <motion.div
            className="w-full md:w-1/4 p-4 bg-[#151515] rounded-4xl flex flex-col gap-4 hover:scale-105 transition-transform duration-300 relative"
            variants={cardVariants}
          >
            <div className="absolute -top-4 -right-4 bg-orange-500 text-xs text-white font-bold px-4 py-1 rounded-full">
              Melhor Valor
            </div>
            <p className="rounded-2xl   text-center p-2 font-semibold">
              Assinatura <strong>Anual</strong>
            </p>
            <p className="text-5xl font-bold pb-8">R$ 1.428 /a</p>
            <Link
              className="w-full py-2  text-center tracking-tighter   bg-orange-500 hover:bg-orange-400 text-primary-500 focus:ring-4 focus:ring-orange-400 focus:ring-opacity-40 font-sans font-bold text-md lg:text-xl uppercase rounded-full transition duration-300"
              target="_blank"
              href="https://hotmart.com/pt-br/marketplace/produtos/comunidade-pastercast/W95234954N"
            >
              Assinar agora
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-8 text-xl justify-center items-center font-sans font-semibold text-center py-10"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="italic">
            Pense no impacto que isso terá em sua esposa, seus filhos e nas
            <br />
            próximas gerações. Não vale muito mais do que o valor investido?
          </p>
          <p className="italic font-light">
            Tenha tranquilidade ao se juntar a nós: se dentro de 30 dias você
            <br />
            decidir que a Comunidade não é para você, reembolsaremos o valor
            integral.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
