import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";

import Logo from "../public/logo.webp";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
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
            <Link href={siteConfig.links.whatsapp} target="_blank">
              <Button
                className="btn bg-gradient-to-tr from-secondary to-primary text-white shadow-lg max-w-80 h-16 sm:h-14 uppercase font-semibold mt-4 px-6"
                radius="full"
              >
                Resolva Seu Caso Hoje{" "}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container bg-white text-center">
        <div>
          <h2 className="text-secondary">
            Atuamos nas Principais Áreas do Direito
          </h2>
        </div>
      </section>

      <section className="container text-center">
        <div>
          <h2>FAQs (perguntas frequentes)</h2>
        </div>
      </section>

      <section className="container bg-white text-center">
        <div>
          <h2 className="text-secondary">
            Perguntas Comuns sobre Seus Direitos{" "}
          </h2>
        </div>
      </section>
    </DefaultLayout>
  );
}
