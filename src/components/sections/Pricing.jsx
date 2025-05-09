import PricingTable from "../contents/PricingTable";
const PricingTableContent = [
  {
    name: "Starter",
    details: "Best option for personal use & for your next project.",
    price: "$29",
    time: "month",
    list: [
      { id: 1, text: "Individual configuration" },
      { id: 2, text: "No setup, or hidden fees" },
      { id: 3, text: "Team size: 1 developer" },
      { id: 4, text: "Premium support: 6 months" },
      { id: 5, text: "Free updates: 6 months" },
    ],
    Link: "#",
  },
  {
    name: "Company",
    details: "Relevant for multiple users, extended & premium support.",
    price: "$99",
    time: "month",
    list: [
      { id: 1, text: "Individual configuration" },
      { id: 2, text: "No setup, or hidden fees" },
      { id: 3, text: "Team size: 10 developer" },
      { id: 4, text: "Premium support: 24 months" },
      { id: 5, text: "Free updates: 24 months" },
    ],
    Link: "#",
  },
  {
    name: "Enterprise",
    details: "Best for large scale uses and extended redistribution rights.",
    price: "$499",
    time: "month",
    list: [
      { id: 1, text: "Individual configuration" },
      { id: 2, text: "No setup, or hidden fees" },
      { id: 3, text: "Team size: 100+ developer" },
      { id: 4, text: "Premium support: 36 months" },
      { id: 5, text: "Free updates: 36 months" },
    ],
    Link: "#",
  },
];

export default function Pricing() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {PricingTableContent.map((item, index) => (
            <PricingTable
              key={index}
              name={item.name}
              details={item.details}
              price={item.price}
              time={item.time}
              list={item.list}
              link={item.Link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
