import BtnPink from "../buttons/BtnPink";
import { CheckGreenIcon } from "../icons";
import PricePerTime from "./PricePerTime";

function ListItem({ text }) {
  return (
    <li className="flex items-center space-x-3">
      <CheckGreenIcon />
      <span>{text}</span>
    </li>
  );
}

export default function PricingTable({
  name,
  details,
  price,
  time,
  list,
  Link,
}) {
  const packageListContent = list.map((item) => (
    <ListItem key={item.id} text={item.text} />
  ));

  return (
    <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{name}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {details}
      </p>

      <PricePerTime price={price} time={time} />

      <ul role="list" className="mb-8 space-y-4 text-left">
        {packageListContent}
      </ul>

      <BtnPink
        text="Get started"
        href={Link}
        target="_self"
        className="bg-purple-600 hover:bg-purple-700  focus:ring-purple-200  px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
      />

      {/* <a
        href="#"
        className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
      >
        Get started
      </a> */}
    </div>
  );
}
