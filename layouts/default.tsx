import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import Logo from "../public/logo.webp";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-around p-6">
        <div className="hidden sm:flex sm:flex-row">
          <p> MFM Advogados Associados | </p>
          <p className="mx-2"> OAB/RS 125.562 </p>
          <p> | Todos os direitos reservados</p>
        </div>

        <div className="flex flex-col sm:hidden items-center p-6">
          <Image priority alt="Logo" src={Logo} width={70} />
          <p>MFM Advogados Associados.</p>
          <p>Todos os direitos reservados.</p>
          <p> OAB/RS 125.562.</p>
        </div>

        <div className="flex items-center gap-4">
          <p>Site desenvolvido por Fluxon Digital.</p>
          <Link
            className="flex justify-start items-center gap-1"
            href="https://www.instagram.com/diihgoulart/"
            target="_blank"
            title="Instagram"
          >
            <FaRegUserCircle className="text-white text-xl" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
