import {
  Airbnb,
  Google,
  Mailchimp,
  Mashable,
  Microsoft,
  Spotify,
} from "../images/index";
function Company({ children }) {
  return (
    <a href="#" className="flex items-center lg:justify-center">
      {children}
    </a>
  );
}

export default function Companies() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <Company>
            <Airbnb />
          </Company>
          <Company>
            <Google />
          </Company>
          <Company>
            <Microsoft />
          </Company>
          <Company>
            <Spotify />
          </Company>
          <Company>
            <Mailchimp />
          </Company>
          <Company>
            <Mashable />
          </Company>
        </div>
      </div>
    </section>
  );
}
