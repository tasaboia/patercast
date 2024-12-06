import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Product() {
  return (
    <section className="overflow-hidden ">
      <div className="w-full h-full bg-primary-600">
        <motion.div
          className="container px-4 mx-auto bg-primary-400 rounded-6xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="py-14 bg-gradient-radial-dark rounded-6xl">
            {/* Título */}
            <motion.div
              className="md:max-w-2xl mx-auto text-center px-4"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-ebGaramond mb-6 text-4xl lg:text-6xl text-white tracking-5xl">
                Tudo o que a Comunidade PaterCast tem a oferecer:
              </h2>
            </motion.div>

            {/* Primeira Linha de Cards */}
            <motion.div
              className="flex flex-wrap justify-around w-[70%] pt-6 mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Card 1 */}
              <motion.div
                className="flex py-4 flex-col justify-center items-center text-center max-w-80"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/icons/live-icon.png"
                  width={87}
                  height={93}
                  alt=""
                  className="pb-4"
                />
                <p className="text-lg font-sans font-bold text-white">
                  Encontros ao vivo:
                </p>
                <p className="text-lg font-sans text-white">
                  Converse diretamente com os hosts e convidados do PaterCast.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="flex py-4 flex-col justify-center items-center text-center max-w-80"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/icons/open-book-icon.png"
                  width={87}
                  height={93}
                  alt=""
                  className="pb-4"
                />
                <p className="text-lg font-sans font-bold text-white">
                  Ebooks exclusivos:
                </p>
                <p className="text-lg font-sans text-white">
                  Amplie sua visão e aprendizado com conteúdos autorais.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="flex py-4 flex-col justify-center items-center text-center max-w-80"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/icons/book-list.png"
                  width={113}
                  height={88}
                  alt=""
                  className="pb-4"
                />
                <p className="text-lg font-sans font-bold text-white">
                  Sorteios mensais de livros:
                </p>
                <p className="text-lg font-sans text-white">
                  Receba materiais que edifiquem sua jornada.
                </p>
              </motion.div>
            </motion.div>

            {/* Segunda Linha de Cards */}
            <motion.div
              className="flex flex-wrap justify-around w-[50%] pt-6 mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Card 4 */}
              <motion.div
                className="flex py-4 flex-col justify-center items-center text-center max-w-80"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/icons/call-icon.png"
                  width={117}
                  height={98}
                  alt=""
                  className="pb-4"
                />
                <p className="text-lg font-sans font-bold text-white">
                  Aulas transformadoras:
                </p>
                <p className="text-lg font-sans text-white">
                  Aprenda mensalmente sobre temas fundamentais para ser um pai e
                  líder melhor.
                </p>
              </motion.div>

              {/* Card 5 */}
              <motion.div
                className="flex py-4 flex-col justify-center items-center text-center max-w-80"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/icons/all-hands.png"
                  width={112}
                  height={113}
                  alt=""
                  className="pb-4"
                />
                <p className="text-lg font-sans font-bold text-white">
                  Rede de apoio:
                </p>
                <p className="text-lg font-sans text-white">
                  Conecte-se com outros homens engajados e compartilhe
                  experiências valiosas.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
