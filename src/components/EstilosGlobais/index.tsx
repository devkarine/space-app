import { createGlobalStyle } from "styled-components";

import GandhiSansRegular from "./fonts/GandhiSans-Regular.otf";
import GandhiSansBold from "./fonts/GandhiSans-Bold.otf";

export const EstilosGlobais = createGlobalStyle`

@font-face {
  font-family: 'GandhiSansRegular';
  src: local('Gandhi Sans Regular'), local('GandhiSansRegular'), scr(${GandhiSansRegular});
}

@font-face {
  font-family: 'GandhiSansBold';
  src: local('Gandhi Sans Bold'), local('GandhiSansBold'), scr(${GandhiSansBold});
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

html {
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%; 
  font-family: GandhiSansRegular, sans-serif;
}

h1{
  font-size: 32px;
}

button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
`;
