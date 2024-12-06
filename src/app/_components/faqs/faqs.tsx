import Link from "next/link";
import React, { useState } from "react";

export default function FAQS() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Não sou pai ou casado, posso participar?",
      answer:
        "Sim! Se você é homem e acredita no impacto que pode gerar, esta comunidade é para você.",
    },
    {
      question: "Como funcionam os encontros ao vivo?",
      answer:
        "São 2 encontros por mês: um com um convidado especial e outro com os hosts, abordando temas práticos e inspiradores.",
    },
    {
      question: "Posso cancelar minha assinatura?",
      answer: "Claro! E você ainda conta com nossa garantia de 7 dias.",
    },
  ];

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 overflow-hidden  font-sans rounded-t-6xl">
      <div className="container px-4 mx-auto">
        <div className="mb-16 md:max-w-2xl text-center mx-auto">
          <h2 className="font-sans font-semibold text-7xl lg:text-8xl text-white tracking-7xl lg:tracking-8xl">
            FAQ
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full p-1.5 mb-4 rounded-5xl bg-gradient-radial-dark"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full border-b text-left py-4 flex justify-between items-center"
              >
                <h3 className="text-2xl text-white tracking-2xl">
                  {faq.question}
                </h3>
                <svg
                  className={`transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  width={21}
                  height={21}
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.56969 7.79634L9.27469 13.5013C9.94844 14.1751 11.0509 14.1751 11.7247 13.5013L17.4297 7.79634"
                    stroke="#F49B00"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-screen py-4 px-12" : "max-h-0"
                }`}
              >
                <p className="text-lg text-white font-sans">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 w-full flex justify-center">
          <Link
            className="  text-center  px-6 py-4 tracking-tighter   bg-orange-500 hover:bg-orange-400 text-primary-500 focus:ring-4 focus:ring-orange-400 focus:ring-opacity-40 font-sans font-bold text-md lg:text-2xl uppercase rounded-full transition duration-300 transform hover:scale-105 animate-fade-in delay-300"
            href="#pricing"
          >
            Tomei minha decisão. Vou fazer parte!
          </Link>
        </div>
      </div>
    </section>
  );
}
