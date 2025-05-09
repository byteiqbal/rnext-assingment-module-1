import CopyRight from "./contents/CopyRight";
import FooterMenus from "./contents/footerMenus";
import Socials from "./contents/Social";
import { Logo } from "./images/index";
const footerMenuList = [
  {
    title: "Company",
    list: [
      { id: 1, text: "About", link: "#", target: "_self" },
      { id: 2, text: "Careers", link: "#", target: "_self" },
      { id: 3, text: "Brand Center", link: "#", target: "_self" },
      { id: 4, text: "Blog", link: "#", target: "_self" },
    ],
  },
  {
    title: "Help center",
    list: [
      { id: 1, text: "Discord Server", link: "#", target: "_self" },
      { id: 2, text: "Twitter", link: "#", target: "_self" },
      { id: 3, text: "Facebook", link: "#", target: "_self" },
      { id: 4, text: "Contact Us", link: "#", target: "_self" },
    ],
  },
  {
    title: "Legal",
    list: [
      { id: 1, text: "Privacy Policy", link: "#", target: "_self" },
      { id: 2, text: "Licensing", link: "#", target: "_self" },
      { id: 3, text: "Terms", link: "#", target: "_self" },
    ],
  },
  {
    title: "Company",
    list: [
      { id: 1, text: "About", link: "#", target: "_self" },
      { id: 2, text: "Careers", link: "#", target: "_self" },
      { id: 3, text: "Brand Center", link: "#", target: "_self" },
      { id: 4, text: "Blog", link: "#", target: "_self" },
    ],
  },
  {
    title: "Download",
    list: [
      { id: 1, text: "iOS", link: "#", target: "_self" },
      { id: 2, text: "Android", link: "#", target: "_self" },
      { id: 3, text: "Windows", link: "#", target: "_self" },
      { id: 4, text: "MacOS", link: "#", target: "_self" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {footerMenuList.map((item) => (
            <FooterMenus
              key={item.id}
              title={item.title}
              list={item.list}
              target={item.target}
            />
          ))}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <a
          href="#"
          className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Logo />
        </a>

        <div className="text-center">
          <CopyRight />

          <Socials />
        </div>
      </div>
    </footer>
  );
}
