import styled from "styled-components";
import { Flex } from "./Flex.styled";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.white};
    padding: 40px 0;
    margin-inline: 5%;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block: 40px;

    @media(max-width: ${({theme}) => theme.mobile}){
        margin-block: 20px;
    }
`

export const Logo = styled.img`
    @media(max-width: ${({theme}) => theme.mobile}){
        width: 50%;
    }
    
`

export const Image = styled.img`
    width: 70%;
    display: block;
    margin-inline: auto;

    @media(max-width: ${({theme}) => theme.mobile}){
        width: 100%;
    }
`

export const FlexHeroCenter = styled(Flex)`
    text-align: center;
    margin-top: 20vh;
    margin-bottom: 100px;

    p{
        opacity: 1;
        width: 55ch;
        margin-inline: auto;
        margin-bottom: 50px;
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        margin-top: 10vh;

        p{
            width: 100%;
        }
    }
`

export const FlexNumbers = styled.div`
    display: flex;
    justify-content: center;

    margin-block: 100px;
    margin-inline: auto;

    div{
        padding-inline: 10%;

        p{
            text-align: center;
        }

        img{
            width: 20%;
        }
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
        text-align: center;

        div{
            padding-block: 8%;
            padding-inline: 0;
        }
    }
`
