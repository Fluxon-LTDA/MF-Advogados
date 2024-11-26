import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import Logo from "../public/logo.webp";

import { Head } from "./head";

import { siteConfig } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      {/* <Navbar /> */}
      <main className="flex-grow">{children}</main>
      <footer className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-around p-4">
        <div className="hidden sm:flex sm:flex-row">
          <p> MFM Advogados Associados | </p>
          <p className="mx-2"> OAB/RS 125.562 </p>
          <p> | Todos os direitos reservados</p>
        </div>

        <div className="flex flex-col sm:hidden items-center">
          <Image priority alt="Logo" src={Logo} width={70} />
          <p className="hidden sm:block">MFM Advogados Associados.</p>
          <p>Todos os direitos reservados.</p>
          <p> OAB/RS 125.562.</p>
        </div>
        <Link
          className="flex justify-start items-center gap-1"
          href={siteConfig.links.fluxon_instagram}
          target="_blank"
          title="Instagram"
        >
          <div className="flex items-center gap-4">
            <p>Site desenvolvido por Fluxon Digital.</p>

            <FaRegUserCircle className="text-white text-xl" />
          </div>
        </Link>
      </footer>
    </div>
  );
}
