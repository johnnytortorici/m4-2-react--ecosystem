import  { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Raleway', sans-serif;
        font-size: 1.1em;
        padding: 30px 50px;
    }

    p {
        padding: 10px 0;
    }
`;

export default GlobalStyles;