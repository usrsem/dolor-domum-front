import React from "react";
import Greeting from "../components/greeting.js";
import Footer from "../components/footer.js";
import Products from "../components/products.js";

const Solar = () => {
  const products = [
    {
      title: "Solar panels",
      text: "Solar panels are one of the best ways to generate clean electricity. They convert the energy of solar radiation into electrical energy through the photovoltaic effect. A solar panel consists of photovoltaic cells sealed on it and protected by special tempered glass with improved light transmission, increasing the efficiency of the panel. After installing and running a solar home power plant, you will no longer need to pay your electricity bill because the sun will provide it.",
      imagePath: "/images/solar/panels.jpg",
    },
    {
      title: "Solar thermal collectors",
      text: "A solar collector is a panel, a few square meters in size, that has a heating element built inside that takes energy directly from the sun. Solar collectors are used for heating swimming pool water, space heating, or hot water. Solar collector operating principle can be compared to a conventional water heater. Solar energy is stored in it and transmitted to a heat exchanger filled with heat transfer fluid, which is heated and begins to circulate through the heating system.",
      imagePath: "/images/solar/thermal-collectors.jpg",
    },
  ];

  return (
    <>
      <Greeting title="Solar!" imagePath="/images/main/3.jpg" />
      <Products data={products} />
      <Footer />
    </>
  );
};

export default Solar;
