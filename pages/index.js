import { React } from "react";
import Greeting from "../components/greeting.js";
import ShortAbout from "../components/short-about.js";
import Partners from "../components/partners.js";
import ContactUs from "../components/contact-us.js";
import Footer from "../components/footer.js";

const HomePage = () => {
  return (
    <>
      <Greeting
        title="Hello there"
        text="Providing you with the optimal ways to keep the ideal temperature in your building all year round."
        imagePath="/images/main/1.jpg"
        delay={0.1}
      />
      <ShortAbout
        text="The idea of drawing energy from the environment has nowadays moved from the realm of wishful thinking to the realm of practical implementation "
        imagePath="/images/short-about/1.jpg"
        delay={0.2}
      />
      <Partners />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;
