import BtnPink from "./buttons/BtnPink";
import { Logo } from "./images/index";
import Navbar from "./nav/Navbar";

const navList = [
  { text: "Home", href: "#", current: true },
  { text: "Company", href: "#" },
  { text: "Marketplace", href: "#" },
  { text: "Features", href: "#" },
  { text: "Team", href: "#" },
  { text: "Contact", href: "#" },
];
export default function Header() {
  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="flex items-center">
            <Logo />
          </a>
          <div className="flex items-center lg:order-2">
            <BtnPink
              text="Download"
              className="bg-purple-700 hover:bg-purple-800  focus:ring-purple-300  px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
              target="_blank"
            />
          </div>
          <Navbar navList={navList} />
        </div>
      </nav>
    </header>
  );
}
