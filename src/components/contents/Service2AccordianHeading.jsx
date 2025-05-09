import { RightArrow } from "../icons";
export default function Service2AccordianHeading({ title }) {
  return (
    <div>
      <a
        href="#"
        className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
      >
        {title}
        <RightArrow />
      </a>
    </div>
  );
}
