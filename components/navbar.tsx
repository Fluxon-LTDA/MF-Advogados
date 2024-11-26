import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaBalanceScale } from "react-icons/fa";

import Logo from "../public/logo.webp";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  return (
    <NextUINavbar
      className="!py-2 !hidden sm:!flex"
      maxWidth="2xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full !justify-center sm:!justify-between">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-center items-center gap-1" href="/">
            <Image priority alt="Logo" src={Logo} width={70} />
            {/* <p className="text-inherit hidden sm:block">
              MFM ADVOGADOS ASSOCIADOS
            </p> */}
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex basis-full !gap-12" justify="end">
        <NavbarItem className="hidden sm:flex items-center justify-start gap-2">
          <FaBalanceScale className="text-white text-xl" />
          <p className="text-white text-sm">OAB/RS 125.562</p>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            className="flex justify-start items-center gap-1"
            href={siteConfig.links.instagram}
            title="Instagram"
          >
            <AiFillInstagram className="text-white text-xl" />
            <p className="text-white text-sm">Siga no Instagram</p>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
