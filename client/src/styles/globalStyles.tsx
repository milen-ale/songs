// globalStyles.tsx
import { Global, css } from '@emotion/react';

const globalStyles = css`
  /* Define your global styles here */

  /* Center headings */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
    color: #fff;
  }

  /* Apply transitions */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    transition: all 0.3s ease-in-out;
    color: #fff;
  }

  /* Reset body styles */
  body {
    margin: 0;
    min-width: 320px;
    display:grid;
    background-color: #696969;
    /* Remove display: flex; and place-items: center; */
  }
  button|{
    text-align: center;
  }
`;

const GlobalStyles: React.FC = () => <Global styles={globalStyles} />;

export default GlobalStyles;
