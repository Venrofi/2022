import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@300;400;600;700&display=swap');

    * {
        box-sizing: border-box;
    }

    body{
        background: ${({theme}) => theme.colors.white};
        color: ${({theme}) => theme.colors.neutral_dark_cyan};
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 1.15em;
        margin: 0;
    }

    h1, h2, h3, h4, h5{
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }

    h1{
        font-size: 3rem;
    }

    h2{
        font-size: 5rem;
        margin: 0;
    }

    p{
        opacity: 0.6;
        line-height: 1.5;
    }

    img{
        max-width: 100%;
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        h1{
            font-size: 2rem;
        }
        p{
            font-size: 1rem;

        }
    }
  
`

  export default GlobalStyles