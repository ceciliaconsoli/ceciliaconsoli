import type { NextPage } from "next";
import About from "../components/sections/about/about";
import Contacts from "../components/sections/contacts/contacts";
import Hero from "../components/sections/hero/hero";
import Portfolio from "../components/sections/portfolio/portfolio";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <div id="portfolio">
        <Portfolio />
      </div>
      <About />
      <div id="contacts">
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
