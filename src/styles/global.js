import { createGlobalStyle } from "styled-components";


export default createGlobalStyle `

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  body {
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    -webkit-font-smoothing: antialiased;
  }

  :root {
    font-size: 62.5%;
  }

  input, textarea {
    border: none;
  }

  button, input, textarea {
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  ul li{
    text-decoration: none;
    list-style: none;
  }

  img {
    max-width: 100%;    
  }

`; 