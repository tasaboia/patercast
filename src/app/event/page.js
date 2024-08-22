import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Event() {
  return (
    <div className="pt-10 bg-[#f5f5f5]">
      <div className=" overflow-hidden  ">
        <div className="container mx-auto px-4">
          <div className="pt-16 pb-8 px-8 text-center bg-primary-200 rounded-3xl">
            <div className="md:max-w-2xl text-center mx-auto">
              <span
                className="inline-block mb-3 text-sm text-gray-800
               font-bold uppercase tracking-widest"
              >
                Estamos muito felizes de ter por aqui.
              </span>
              <h1 className="font-heading mb-6 text-5xl lg:text-6xl text-gray-200 font-black tracking-tight">
                Todo homem tem uma jornada a viver
              </h1>
              <p className="mb-8 text-xl font-bold text-gray-800">
                Nós queremos que você viva de forma sábia, relevante e saudável!
                Antes de entrar no nosso grupo, pedimos que preencha esse rápido
              </p>
              <div className="flex flex-wrap justify-center mb-20 -m-2">
                <div className="w-full md:w-auto p-2">
                  <Link
                    className="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 rounded-full"
                    href="#grupo-vip"
                  >
                    Iniciar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="grupo-vip" className="py-10 bg-[#f5f5f5]">
        <iframe
          src="https://sbzpt6ah.forms.app/formulario-sem-titulo"
          width="100%"
          height="500"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        />
      </div>

      <div className="py-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="py-16 px-8 text-center bg-orange-500 rounded-3xl">
            <div className="md:max-w-lg mx-auto">
              <h2 className="font-heading mb-6 text-4xl md:text-5xl text-white font-black tracking-tight">
                Pronto!
              </h2>
              <p className="mb-10 text-xl text-blue-100 font-bold">
                Abaixo está o link para o nosso grupo VIP para o evento do dia
                31/08, às 09:00hs:
              </p>
              <div className="flex flex-wrap justify-center -m-2 mb-4">
                <div className="w-auto p-2">
                  <Link
                    target="_blank"
                    className="flex justify-center items-center w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-green-900 hover:bg-green-800 focus:ring-4 focus:ring-green-600 rounded-full"
                    href="https://chat.whatsapp.com/DOsLRK7QNvF2L3zJqTFDXs"
                  >
                    <FaWhatsapp classNameName="mr-2" />
                    Entrar no Grupo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
