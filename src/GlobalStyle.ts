import { createGlobalStyle } from 'styled-components';
import DarkBackground from './assets/dark-grid.svg';
import LightBackground from './assets/light-grid.svg';

const GlobalStyle = createGlobalStyle`
    #root {
      width: 100%;
      height: 100%;
      color: rgb(82, 80, 105);
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

    body[data-theme="dark"] {
      --bg: hsl(220deg 26% 14%);
      --pColor: hsl(214deg 20% 69%);
      --h1Color: hsl(0deg 0% 99%);
      --aColor: hsl(214deg 20% 69%);
      --aHoverColor: hsl(0deg 0% 99%);
      --inputColor: hsl(0deg 0% 99%);
      --background-svg: url(${DarkBackground});
      --social-svg: #dddddd;
    }

    body[data-theme="light"] {
      --bg: hsl(0deg 0% 99%);
      --pColor: hsl(220deg 27% 28%);
      --h1Color: hsl(220deg 26% 14%);
      --aColor: hsl(220deg 27% 28%);
      --aHoverColor: hsl(220deg 26% 14%);
      --inputColor: hsl(0deg 0% 0% / 10%);
      --background-svg: url(${LightBackground});
      --inner-linkedin: #fff;
    }

    .social-svg {
      fill: var(--social-svg);
      margin: 5px 0 0 0;
    }

    body {
      font-family: proxima-nova, sans-serif;
      display: flex;
      justify-content: center;
      background-image: var(--background-svg);
      background-size: 24px 24px;
      color: var(--text-color);
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Remove ugly scrollbar on desktop */
    body::-webkit-scrollbar {
      width: 0.25rem;
    }

    body::-webkit-scrollbar-track {
      background: rgb(9, 31, 45);
    }

    body::-webkit-scrollbar-thumb {
      background: #000000;
    }

    h1,
    h2 {
      color: var(--h1Color);
    }

    p,
    label {
      color: var(--pColor);
    }
    a {
      color: var(--aColor);
      text-decoration: none;
      cursor: pointer;
      size: 100px;
    }

    main {
      max-width: 700px;
      min-width: 700px;
      margin: 1rem 0 1rem 0;
      padding: 1rem;
    }
`;

export default GlobalStyle;
