import React from "react";
import Greeting from "../components/greeting.js";
import Footer from "../components/footer.js";
import Products from "../components/products.js";

const HeatPumps = () => {
  const products = [
    {
      title: "Air to air heat pumps",
      text: "In addition to heating, Air-source heat pumps can also be used for cooling rooms during the hot season. Thermal energy is taken from the outside air and used to heat or cool air inside the building. The main advantage of air-source heat pumps is the ease of installation without significant investment in the engineering system for their operation.",
      imagePath: "/images/heat-pumps/air2air.jpg",
    },
    {
      title: "Air to water heat pumps",
      text: "Using 1 kWh of electricity, the air-to-water heat pump produces up to 5 kWh of heat energy to heat your home and heat water.",
      imagePath: "/images/heat-pumps/air2water.jpg",
    },
    {
      title: "Fancoils",
      text: "A system with a heat pump and fan coils allows solving ventilation, heating, and cooling tasks simultaneously. Hot or cold water, from the heat pump, will circulate in the fan coil and remove or add heat to the air by a heat transfer. The fan motor speed control inside the fan coil is effectively used to control the temperature.",
      imagePath: "/images/heat-pumps/fancoils.png",
    },
    {
      title: "Swimming pool heat pumps",
      text: "The heat of the outdoor air is transferred to the water in the pool by passing through the heat pump. Pool heat pump work similarly to conventional heat pumps. It acts like a reverse air conditioner, taking the ambient temperature in the air, using an evaporator coil, liquid refrigerant, and a compressor.",
      imagePath: "/images/heat-pumps/swimming-pool.jpg",
    },
  ];
  return (
    <>
      <Greeting title="Heat pumps" text="" imagePath="/images/main/2.jpg" />
      <Products data={products} />
      <Footer />
    </>
  );
};

export default HeatPumps;
