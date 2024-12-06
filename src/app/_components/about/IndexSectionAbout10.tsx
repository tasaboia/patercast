import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
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
        threshold: 0.2, // A animação será ativada quando 20% da seção estiver visível.
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

  return (
    <section ref={sectionRef} className="py-8 overflow-hidden bg-primary-500">
      <div className="container p-8 lg:p-0 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-between flex-wrap-reverse lg:flex-wrap lg:items-center">
            {/* Image with animation */}
            <motion.div
              className="lg:-m-8"
              initial={{ x: -200, opacity: 0 }}
              animate={
                isVisible ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }
              }
              transition={{ duration: 1 }}
            >
              <Image
                width={600}
                height={400}
                className="rounded-3xl"
                src="/images/img-calltoaction.png"
                alt="image"
              />
            </motion.div>

            {/* Text content with animation */}
            <motion.div
              className="w-full md:w-1/2 p-6 lg:p-12 lg:m-12"
              initial={{ x: 200, opacity: 0 }}
              animate={
                isVisible ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }
              }
              transition={{ duration: 1 }}
            >
              <h2 className="mb-6 text-6xl md:text-8xl text-white tracking-tighter">
                Por que criamos esta comunidade?
              </h2>
              <motion.p
                className="mb-10 text-white max-w-lg text-lg font-sans"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Para homens que querem ser pais melhores, maridos mais presentes
                e líderes em seus lares. Se você deseja crescer e se conectar
                com uma rede que compartilha os mesmos valores, este é o seu
                lugar.
              </motion.p>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={isVisible ? { scale: 1 } : { scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
              >
                <Link
                  className="inline-block text-center px-4 py-2 lg:px-8 lg:py-4 tracking-tighter   bg-orange-500 hover:bg-orange-400 text-primary-500 focus:ring-4 focus:ring-orange-400 focus:ring-opacity-40 font-sans font-bold text-md lg:text-xl uppercase rounded-full transition duration-300"
                  href="#pricing"
                >
                  EU ME ENCAIXO NESSE GRUPO DE HOMENS!
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
