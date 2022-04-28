import styled from "styled-components";
import { Container } from "./Container.styled";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.neutral_dark_cyan};
    color: #fff;
    padding: 100px 0 60px;
    width: 100%;
`

export const WavyBg = styled.div`
    display: flex;

    img{
        width: 100%;
    }
`

export const FootContainer = styled.div`
    margin-inline: 5%;
    display: flex;
    justify-content: space-between;

    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: column-reverse;
        gap: 100px;

        #mail{
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    } 

    div{
        width: 40%;

        p{
            opacity: 1;
            width: 40ch;
        }

        @media(max-width: ${({theme}) => theme.mobile}){
            width: 100%;
            p{
                width: 100%;
            }
        } 
        
        div{
            width: 100%;
            display: flex;
            gap: 5%;
            align-items: center;

            img{
                width: 25px;
            }

            input{
                width: 100%;
                padding: 15px 10px;
                border-radius: 5px;
            }

            button{
                border-radius: 5px;
            }

            @media(max-width: ${({theme}) => theme.mobile}){
                margin-inline: auto;
                width: 70%;

                button{
                    padding: 10px 25px;
                }
            }
        }
    }
`

export const Credits = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: ${({theme}) => theme.mobile}){
        margin-top: 10%;
        margin-inline: 5%;
        text-align: center;
    }

    p:last-child{
        opacity: 0.8;
        margin: 0;
        a{
            opacity: 0.7;
            color: #fff;
            text-decoration: none;
            
            &:active, &:focus, &:hover{
                opacity: 1;
            }
        }
    }
`