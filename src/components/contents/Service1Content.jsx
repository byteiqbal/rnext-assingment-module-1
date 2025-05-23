import { CheckIcon } from "../icons";

function ListItem({ listcontent, listId }) {
  return (
    <li key={listId} className="flex space-x-3">
      <CheckIcon />
      <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
        {listcontent}
      </span>
    </li>
  );
}

export default function Service1Content({ heading, content1, list, content2 }) {
  const listItems = list.map((item) => (
    <ListItem key={item.id} listcontent={item.text} />
  ));

  return (
    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {heading}
      </h2>
      <p className="mb-8 font-light lg:text-xl">{content1}</p>

      <ul
        role="list"
        className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
      >
        {listItems}
      </ul>

      <p className="mb-8 font-light lg:text-xl">{content2}</p>
    </div>
  );
}
