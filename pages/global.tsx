import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'react-toastify/dist/ReactToastify.css';
import { lighten } from 'polished';
import 'highlight.js/styles/vs2015.css';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    padding: 0;
    margin: 0;
    font-family:  ${({ theme }) => theme.fonts.default};
    background-color: ${({ theme }) => theme.palette.background.default};
    font-size: 1.6rem;
    color: ${({ theme }) => theme.palette.text.primary}
  }

  ul { 
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input { 
   border-radius: 0;
   outline: none;
   border: 1px solid grey;
   padding: 1rem;
  }

  button, input[type="submit"] { 
    display: inline-block;
    cursor: pointer;
    border: 0;
    outline: none;
  }

  button:hover, input[type="submit"]:hover {
    opacity: 0.9;
  }


  h1, h2, h3 { 
    margin: 0;
    /* color: ${({ theme }) =>
      lighten(0.1, theme.palette.text.primary as string)}; */
  }

  h1 {
    font-size: 4.5rem;
    ${({ theme }) => theme.mixins.fontSize({ tablet: 2.4 })};
  }
  h2 {
    font-size: 2.8rem;
    font-weight: 600; 

    ${({ theme }) => theme.mixins.fontSize({ tablet: 2.0 })}
  }
  h3 { 
    font-size: 2.2rem;
    font-weight: normal;

    ${({ theme }) => theme.mixins.fontSize({ tablet: 2.0 })}
  }
  .fade-appear {
     opacity: 1 !important;
  }
`;

export default GlobalStyles;
