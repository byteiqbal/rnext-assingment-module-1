import {
  DribbleIcon,
  FaceBookIcon,
  GitHubIcon2,
  InstaGramIcon,
  TweeterIcon,
} from "../icons";
const socialList = [
  {
    id: 1,
    link: "#",
    icon: <FaceBookIcon />,
  },
  {
    id: 2,
    link: "#",
    icon: <InstaGramIcon />,
  },
  {
    id: 3,
    link: "#",
    icon: <TweeterIcon />,
  },
  {
    id: 4,
    link: "#",
    icon: <GitHubIcon2 />,
  },
  {
    id: 5,
    link: "#",
    icon: <DribbleIcon />,
  },
];

function ListSocial({ link, icon }) {
  return (
    <li>
      <a
        href={link}
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
      >
        {icon}
      </a>
    </li>
  );
}
export default function Socials() {
  const totalList = socialList.map((item) => (
    <ListSocial key={item.id} link={item.link} icon={item.icon} />
  ));

  return <ul className="flex justify-center mt-5 space-x-5">{totalList}</ul>;
}
