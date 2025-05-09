function List({ label, link = "#", target = "_self" }) {
  return (
    <li class="mb-4">
      <a href={link} class=" hover:underline" target={target}>
        {label}
      </a>
    </li>
  );
}

export default function FooterMenus({ title, list }) {
  const totalList = list.map((item) => (
    <List
      key={item.id}
      label={item.text}
      link={item.link}
      target={item.target}
    />
  ));
  return (
    <div>
      <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {title}
      </h3>
      <ul class="text-gray-500 dark:text-gray-400">{totalList}</ul>
    </div>
  );
}
