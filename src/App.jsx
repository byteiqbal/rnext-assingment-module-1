import Footer from "./components/Footer";
import Header from "./components/Header";
import Companies from "./components/sections/Companies";
import Faq from "./components/sections/Faq";
import Hero from "./components/sections/Hero";
import Pricing from "./components/sections/Pricing";
import Service1 from "./components/sections/Service1";
import Service2 from "./components/sections/Service2";
import Testimonial from "./components/sections/Testimonial";
import Trail from "./components/sections/Trail";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Service1 />
      <Service2 />
      <Testimonial />
      <Pricing />
      <Faq />
      <Trail />
      <Footer />
    </>
  );
}

export default App;
