import { createGlobalStyle } from "styled-components";

const FontSecondary = createGlobalStyle`
  @font-face {
    font-family: "Playfair Display";
    src: url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;900&display=swap");
  }

  body {
    font-family: "Playfair Display", serif;
  }
`;


export default FontSecondary;
