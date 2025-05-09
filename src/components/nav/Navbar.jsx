function SingleNav({ text, href = "#", target = "_self", current = false }) {
  const currentMenu =
    "text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700  dark:text-white";
  const NotcurrentMenu =
    " text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700  dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <li>
      <a
        href={'"' + href + '"'}
        target={target}
        className={`block py-2 pl-3 pr-4 ${
          current ? currentMenu : NotcurrentMenu
        } lg:p-0`}
      >
        {text}
      </a>
    </li>
  );
}

export default function HeaderNav({ navList }) {
  const navLists = navList.map((item) => {
    return (
      <SingleNav
        text={item.text}
        href={item.href}
        taregt={item.target}
        current={item.current}
      />
    );
  });
  return (
    <div
      className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
      id="mobile-menu-2"
    >
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {navLists}
      </ul>
    </div>
  );
}
