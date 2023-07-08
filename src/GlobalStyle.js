import { createGlobalStyle } from 'styled-components'
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2a2a2a;
        background-color: #F6F1F1;
    }

    p, h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        margin-bottom: 0;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
`;

export default GlobalStyle;