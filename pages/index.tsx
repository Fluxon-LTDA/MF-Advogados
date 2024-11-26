import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useState } from "react";

import Logo from "../public/logo.webp";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  const faqs = [
    {
      question:
        "O que é o direito civil e quais são suas principais áreas de atuação?",
      lawyer: {
        name: "Dr. João Silva",
        photo: "/Perfil.jpeg",
        comment:
          "O direito civil regula relações pessoais e patrimoniais entre indivíduos. Ele abrange áreas como contratos, propriedade, família e sucessões.",
      },
    },
    {
      question: "Como posso proteger meu patrimônio no casamento?",
      lawyer: {
        name: "Dra. Maria Oliveira",
        photo: "/Perfil.jpeg",
        comment:
          "Existem várias formas de proteger o patrimônio no casamento, como o pacto antenupcial, que pode definir o regime de bens.",
      },
    },
    {
      question:
        "Quais são os direitos de uma pessoa em um processo de divórcio?",
      lawyer: {
        name: "Dr. Carlos Pereira",
        photo: "/Perfil.jpeg",
        comment:
          "Em um divórcio, as partes têm direito à divisão de bens, pensão alimentícia, guarda de filhos e outras questões relacionadas ao casamento.",
      },
    },
    {
      question: "Como posso realizar a adoção de uma criança?",
      lawyer: {
        name: "Dra. Sofia Lima",
        photo: "/Perfil.jpeg",
        comment:
          "A adoção exige um processo judicial, onde serão avaliadas as condições do adotante e o melhor interesse da criança.",
      },
    },
    {
      question: "Quais são os passos para abrir uma empresa no Brasil?",
      lawyer: {
        name: "Dr. João Silva",
        photo: "/Perfil.jpeg",
        comment:
          "Para abrir uma empresa no Brasil, é necessário realizar o registro na junta comercial, obter o CNPJ e cumprir com outras obrigações legais.",
      },
    },
    {
      question: "Como posso garantir a pensão alimentícia após o divórcio?",
      lawyer: {
        name: "Dra. Maria Oliveira",
        photo: "/Perfil.jpeg",
        comment:
          "A pensão alimentícia pode ser acordada de forma amigável ou determinada judicialmente, levando em conta a necessidade e capacidade financeira de quem paga.",
      },
    },
    {
      question: "O que é necessário para regularizar a situação de um imóvel?",
      lawyer: {
        name: "Dr. Carlos Pereira",
        photo: "/Perfil.jpeg",
        comment:
          "É importante garantir que todos os documentos do imóvel estejam em ordem, como o registro de propriedade e o pagamento de impostos.",
      },
    },
    {
      question:
        "Quais são os direitos do trabalhador em caso de demissão sem justa causa?",
      lawyer: {
        name: "Dr. Carlos Pereira",
        photo: "/Perfil.jpeg",
        comment:
          "Em caso de demissão sem justa causa, o trabalhador tem direito a receber a rescisão contratual, aviso prévio, férias proporcionais e FGTS.",
      },
    },
    {
      question: "Como posso contestar uma multa de trânsito?",
      lawyer: {
        name: "Dra. Sofia Lima",
        photo: "/Perfil.jpeg",
        comment:
          "É possível contestar uma multa de trânsito através de um recurso administrativo ou judicial, dependendo das circunstâncias do caso.",
      },
    },
    {
      question: "Quais são os requisitos para a elaboração de um testamento?",
      lawyer: {
        name: "Dr. João Silva",
        photo: "/Perfil.jpeg",
        comment:
          "Para fazer um testamento, é necessário que o testador esteja em pleno uso de suas faculdades mentais e atenda aos requisitos legais para garantir a validade do documento.",
      },
    },
    {
      question: "Posso herdar bens de um parente que não fez testamento?",
      lawyer: {
        name: "Dra. Maria Oliveira",
        photo: "/Perfil.jpeg",
        comment:
          "Sim, os bens de uma pessoa falecida que não deixou testamento são transmitidos aos herdeiros legais de acordo com a ordem da sucessão legítima.",
      },
    },
    {
      question: "O que é a usucapião e como posso pedir essa regularização?",
      lawyer: {
        name: "Dr. Carlos Pereira",
        photo: "/Perfil.jpeg",
        comment:
          "A usucapião é a aquisição de um bem imóvel pela posse contínua e incontestada por um determinado período. O pedido é feito por meio de ação judicial.",
      },
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <DefaultLayout>
      <section
        className="flex flex-col items-center justify-center gap-4 sm:bg-top md:bg-center lg:bg-center xl:bg-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="absolute w-full h-full bg-cover bg-center opacity-75"
          style={{
            backgroundImage: 'url("fundo.webp")',
            backgroundAttachment: "scroll",
          }}
        />
        <div className="relative z-10 flex items-center justify-between w-full max-w-screen-xl px-4">
          <div className="flex flex-col items-center sm:items-start justify-center gap-2">
            <Image
              priority
              alt="Logo"
              className="translate-y-[-60px] sm:translate-y-[-70px] hidden"
              height={120}
              src={Logo}
              width={120}
            />
            <h1>
              Defenda Seus Direitos{" "}
              <span className="text-secondary sm:block sm:text-left">
                com Quem Entende
              </span>
            </h1>
            <Link
              className="mt-8"
              href={siteConfig.links.whatsapp}
              target="_blank"
            >
              <Button
                className="btn bg-gradient-to-tr from-secondary to-primary text-white shadow-lg max-w-80 h-20 sm:h-16 text-base sm:text-lg uppercase font-semibold px-6"
                radius="full"
              >
                Resolva Seu Caso Hoje!{" "}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* <section className="container bg-white text-center">
        <div>
          <h2 className="text-secondary">
            Atuamos nas Principais Áreas do Direito
          </h2>
        </div>
      </section> */}

      <section className="container text-center bg-secondary">
        <div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white">
            Perguntas Comuns sobre Seus Direitos{" "}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 mt-10 px-4 sm:px-16">
            <div>
              {faqs.slice(0, 4).map((faq, index) => (
                <div key={index} className="mb-6">
                  <div
                    className="p-4 bg-white text-gray-600 cursor-pointer rounded-md shadow-md hover:bg-primary"
                    role="button"
                    tabIndex={0}
                    onClick={() => handleClick(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleClick(index);
                      }
                    }}
                  >
                    <h3 className="text-sm sm:text-base font-semibold">
                      {faq.question}
                    </h3>
                  </div>
                  {activeIndex === index && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-inner">
                      <div className="flex items-center">
                        <Image
                          priority
                          alt={faq.lawyer.name}
                          className="w-16 h-16 rounded-full mr-4"
                          height={100}
                          src={faq.lawyer.photo}
                          width={100}
                        />
                        <div>
                          <strong className="block text-secondary text-left">
                            {faq.lawyer.name}
                          </strong>
                          <p className="text-gray-600 text-left">
                            {faq.lawyer.comment}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div>
              {faqs.slice(4, 8).map((faq, index) => (
                <div key={index + 4} className="mb-6">
                  <div
                    className="p-4 bg-white text-gray-600 cursor-pointer rounded-md shadow-md hover:bg-primary"
                    role="button"
                    tabIndex={0}
                    onClick={() => handleClick(index + 4)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleClick(index + 4);
                      }
                    }}
                  >
                    <h3 className="text-sm sm:text-base font-semibold">
                      {faq.question}
                    </h3>
                  </div>
                  {activeIndex === index + 4 && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-inner">
                      <div className="flex items-center">
                        <Image
                          priority
                          alt={faq.lawyer.name}
                          className="w-16 h-16 rounded-full mr-4"
                          height={100}
                          src={faq.lawyer.photo}
                          width={100}
                        />
                        <div>
                          <strong className="block text-secondary text-left">
                            {faq.lawyer.name}
                          </strong>
                          <p className="text-gray-600 text-left">
                            {faq.lawyer.comment}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="container bg-white text-center">
        <div>
          <h2 className="text-secondary">Outra seção...</h2>
        </div>
      </section> */}
    </DefaultLayout>
  );
}
