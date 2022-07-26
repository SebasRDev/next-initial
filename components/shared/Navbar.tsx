import navStyles from "../../styles/components/navbar/Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav className={navStyles.menu__container}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink text={text} href={href} key={href} />
      ))}
    </nav>
  );
};
