import BtnPink from "../buttons/BtnPink";
export default function Trail() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Start your free trial today
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Try Landwind Platform for 30 days. No credit card required.
          </p>
          <BtnPink
            text="Free trial for 30 days"
            href="#"
            target="_self"
            className="bg-purple-600 hover:bg-purple-700  focus:ring-purple-200  px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
          />
        </div>
      </div>
    </section>
  );
}
