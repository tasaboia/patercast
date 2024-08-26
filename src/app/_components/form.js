"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [issues, setIssues] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(issues);
  }, [issues]);
  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "issues":
        const issue = e.target.value;
        const isChecked = e.target.checked;
        if (isChecked) {
          setIssues([...issues, issue]);
        } else {
          setIssues(issues.filter((i) => i !== issue));
        }
        break;
      default:
        break;
    }
  };
  const issuesOptions = [
    "Medo do fracasso",
    "Não saber gerir o dinheiro e os recursos",
    "Ausência paterna em minha própria vida",
    "Não me sinto pronto para ser um bom pai",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const form = {
      name,
      email,
      phone,
      issues: issues.join(", "),
    };

    try {
      const response = await axios.post("/api/submit", form, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const content = await response.data;

      if (response.status === 201) {
        setSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setIssues("");
        setShow(true);
        window.open(
          "https://chat.whatsapp.com/DOsLRK7QNvF2L3zJqTFDXs",
          "_blank"
        );
      } else {
        throw new Error(content.message || "Erro ao enviar dados");
      }
    } catch (error) {
      console.log(error);
      setError(true);
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="form" className="py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16  bg-white overflow-hidden rounded-3xl">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 md:max-w-2xl mx-auto text-center">
              <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                Participe do nosso encontro online!
              </h2>
              <p className="text-gray-500 font-bold">
                Estamos criando uma comunidade de homens que se ajudam, aprendem
                sobre paternidade e têm lares saudáveis. Não fique de fora. Tome
                a decisão certa antes que seja tarde demais!
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="p-10 bg-gray-100 border border-gray-100 rounded-3xl"
            >
              <div className="flex flex-wrap -m-5 mb-1">
                <div className="w-full md:w-1/2 p-5">
                  <label
                    className="block mb-2 text-sm text-gray-500 font-bold"
                    htmlFor="name"
                  >
                    Seu nome:
                  </label>
                  <input
                    className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 p-5">
                  <label
                    className="block mb-2 text-sm text-gray-500 font-bold"
                    htmlFor="phone"
                  >
                    Seu número de telefone (DDD + número):
                  </label>
                  <input
                    className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full"
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Digite seu celular"
                    value={phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -m-5">
                <div className="w-full md:w-1/2 p-5">
                  <label
                    className="block mb-2 text-sm text-gray-500 font-bold"
                    htmlFor="email"
                  >
                    Seu melhor e-mail:
                  </label>
                  <input
                    className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="w-full p-5">
                  <label
                    className="block mb-2 text-sm text-gray-500 font-bold"
                    htmlFor="issues"
                  >
                    Para você, quais são as maiores dores envolvendo o tema
                    da paternidade?git a
                  </label>
                  <div className="flex flex-col space-y-3 pt-3">
                    {issuesOptions.map((option, index) => (
                      <label key={index} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="issues"
                          value={option}
                          checked={issues.includes(option)}
                          onChange={handleChange}
                        />
                        <span
                          className="ml-2 text-gray-500
                       text-sm font-bold "
                        >
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full p-3.5 ">
                <div className="flex flex-wrap items-center -m-2 md:justify-end">
                  <div className="w-full md:w-1/2 p-2 ">
                    <div className="flex flex-wrap md:justify-end -m-2">
                      <div className="w-full md:w-auto p-2 flex gap-3 flex-col pt-4">
                        {show ? (
                          <a
                            href="https://chat.whatsapp.com/DOsLRK7QNvF2L3zJqTFDXs"
                            target="_blank"
                            rel="noopener noreferrer" // Adiciona segurança ao abrir o link em nova aba
                            className="inline-flex w-full  py-4 px-6 items-center justify-center text-lg font-medium text-white bg-green-800 hover:bg-green-700 rounded-full transition duration-200"
                          >
                            <FaWhatsapp className="mr-2" />{" "}
                            {/* Ícone do WhatsApp */}
                            Entrar no grupo
                          </a>
                        ) : (
                          <button
                            type="submit"
                            className="block w-full px-8 md:px-16 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                            disabled={loading}
                          >
                            {loading ? "Enviando..." : "Enviar Mensagem"}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            {error && (
              <p className="text-red-500 font-bold mt-4">
                Ocorreu um erro ao enviar a mensagem.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
