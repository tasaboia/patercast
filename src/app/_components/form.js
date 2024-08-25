"use client";
import axios from "axios";
import React, { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [issues, setIssues] = useState([]); // Certifique-se de que `issues` está definido aqui

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
      case "issue":
        setIssue(e.target.value);
        break;
      default:
        break;
    }
  };

  const issuesOptions = [
    "Estresse Financeiro",
    "Emocionais e de Bem-Estar",
    "Educacional",
    "Equilíbrio entre Trabalho e Tempo com Família",
    "Disciplina e Comportamento dos Filhos",
    "Tecnologia no Dia a Dia das Crianças",
    "Saúde e Nutrição",
    "Criar Independência",
    "Diferença entre Estilos de Educação",
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
      issue,
    };

    try {
      const response = await axios.post("/api/submit", form, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const content = await response.data;

      console.log(content);
      if (response.status === 201) {
        setSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setIssue("");
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
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 bg-white overflow-hidden rounded-3xl">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 md:max-w-md mx-auto text-center">
              <span className="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">
                Contact Us
              </span>
              <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                Get connected
              </h2>
              <p className="text-gray-500 font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada tellus vestibulum, commodo pulvinar.
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
                    Nome
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
                    Celular
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
                    E-mail
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
                    Quais são os maiores desafios que você encontrou na criação
                    de seus filhos até hoje?
                  </label>
                  <div className="flex flex-col space-y-2">
                    {issuesOptions.map((option, index) => (
                      <label key={index} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="issues"
                          value={option}
                          checked={issues.includes(option)}
                          onChange={handleChange}
                        />
                        <span className="ml-2 text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full p-3.5">
                <div className="flex flex-wrap items-center -m-2 md:justify-end">
                  <div className="w-full md:w-1/2 p-2 ">
                    <div className="flex flex-wrap md:justify-end -m-2">
                      <div className="w-full md:w-auto p-2">
                        <button
                          type="submit"
                          className="block w-full px-8 md:px-16 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                          disabled={loading}
                        >
                          {loading ? "Enviando..." : "Enviar Mensagem"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {success && (
              <p className="text-green-500 font-bold mt-4">
                Mensagem enviada com sucesso!
              </p>
            )}
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
