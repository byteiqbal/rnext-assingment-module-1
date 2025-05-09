export default function BtnPink({
  text,
  href = "#",
  target = "_self",
  className = "",
}) {
  return (
    <a
      href={href}
      target={target}
      className={`text-white focus:ring-4 font-medium rounded-lg text-sm ${className}`}
    >
      {text}
    </a>
  );
}

// bg-purple-600 hover:bg-purple-700  focus:ring-purple-200  px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900
