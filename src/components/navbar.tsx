import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./theme-switcher";
import { LanguageSelect } from "./language-select";
import { Link } from "~/navigation";

export const MyNavbar = () => {
  return (
    <Navbar position="sticky" maxWidth="xl">
      <NavbarBrand>
        <Link
          href="/"
          className="inline-flex gap-x-2 font-serif text-3xl font-bold italic"
        >
          <span className="text-primary">User</span>{" "}
          <span className="text-secondary">Sum</span>
        </Link>
      </NavbarBrand>
      <NavbarContent
        className="hidden gap-4 sm:flex md:gap-8 lg:gap-12"
        justify="center"
      >
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            Ai Painter
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#">Coser</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground" aria-current="page">
            Dancer
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <LanguageSelect />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
