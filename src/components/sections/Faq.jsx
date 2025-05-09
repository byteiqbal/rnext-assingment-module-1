import FaqAccordian from "../contents/FaqAccordian";

const faqList = [
  {
    id: 1,
    question: "Can I use Landwind in open-source projects?",
    answer: (
      <>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Landwind is an open-source library of interactive components built on
          top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
          more.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to{" "}
          <a
            href="#"
            class="text-purple-600 dark:text-purple-500 hover:underline"
          >
            get started
          </a>{" "}
          and start developing websites even faster with components on top of
          Tailwind CSS.
        </p>
      </>
    ),
  },

  {
    id: 2,
    question: "Is there a Figma file available?",
    answer: (
      <>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Landwind is first conceptualized and designed using the Figma software
          so everything you see in the library has a design equivalent in our
          Figma file.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out the{" "}
          <a
            href="#"
            class="text-purple-600 dark:text-purple-500 hover:underline"
          >
            Figma design system
          </a>
          based on the utility classes from Tailwind CSS and components from
          Landwind.
        </p>
      </>
    ),
  },
  {
    id: 3,
    question: "What are the differences between Landwind and Tailwind UI?",
    answer: (
      <>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          The main difference is that the core components from Landwind are open
          source under the MIT license, whereas Tailwind UI is a paid product.
          Another difference is that Landwind relies on smaller and standalone
          components, whereas Tailwind UI offers sections of pages.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          However, we actually recommend using both Landwind, Landwind Pro, and
          even Tailwind UI as there is no technical reason stopping you from
          using the best of two worlds.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Learn more about these technologies:
        </p>
        <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
          <li>
            <a
              href="#"
              class="text-purple-600 dark:text-purple-500 hover:underline"
            >
              Landwind Pro
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-purple-600 dark:text-purple-500 hover:underline"
            >
              Tailwind UI
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    question: "What about browser support?",
    answer: (
      <>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          The main difference is that the core components from Landwind are open
          source under the MIT license, whereas Tailwind UI is a paid product.
          Another difference is that Landwind relies on smaller and standalone
          components, whereas Tailwind UI offers sections of pages.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          However, we actually recommend using both Landwind, Landwind Pro, and
          even Tailwind UI as there is no technical reason stopping you from
          using the best of two worlds.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Learn more about these technologies:
        </p>
        <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
          <li>
            <a
              href="#"
              class="text-purple-600 dark:text-purple-500 hover:underline"
            >
              Landwind Pro
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-purple-600 dark:text-purple-500 hover:underline"
            >
              Tailwind UI
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

export default function Faq() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
          Frequently asked questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classNamees="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classNamees="text-gray-500 dark:text-gray-400"
          >
            {faqList.map((item) => (
              <FaqAccordian
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
