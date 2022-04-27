import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.footer};
    color: #fff;
    padding: 100px 0 60px;

    ul{
        list-style-type: none;
    }

    ul li{
        margin-bottom: 20px;
    }

    p {
        text-align: center;
    }

    p:last-child{
        opacity: 0.8;
        a{
            opacity: 0.7;
            color: #fff;
            text-decoration: none;
            
            &:active, &:focus, &:hover{
                opacity: 1;
            }
        }
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        text-align: center;

        ul{
            padding: 0;
        }
    } 
`