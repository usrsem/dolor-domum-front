import React from "react";
import { Image } from "@chakra-ui/react";

/*
 * Exports icon components with names as capitalized
 * elements of icons array
 */

const icons = ["person", "address"];

const components = {};

const capitalize = (text) => text[0].toUpperCase() + text.substring(1);

icons.forEach(
  (icon) =>
    (components[capitalize(icon)] = () => (
      <Image src={`/images/icons/${icon}.svg`} alt="icon" />
    ))
);

console.log(components);
export default components;
