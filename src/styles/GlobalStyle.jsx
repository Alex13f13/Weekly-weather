import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  body {
    margin: 2vh 6vw;
    padding: 0;
    width: 88vw;
    height: auto;
    font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
    background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
    background-repeat: no-repeat;
    color: rgb(0, 0, 0);
    font-size: 1rem;
    line-height: 1.55;
    text-rendering: optimizeSpeed;
    min-height: 96vh;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 0;
    padding: 0;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 0;
    padding: 0;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.2;
    margin: 0;
    padding: 0;
  }

  h5 {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledGlobalStyle = () => {
	return <GlobalStyle />;
};

export default StyledGlobalStyle;
