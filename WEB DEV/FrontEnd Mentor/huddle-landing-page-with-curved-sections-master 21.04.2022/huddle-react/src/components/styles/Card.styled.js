import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({bgColor, theme}) => bgColor || theme.colors.neutral_pale_blue};
    padding: 60px 10%;
    flex-direction: ${({layout}) => layout || 'row'};

    img{
        width: 80%;
    }

    p{
        width: 65%;
        opacity: 1;
    }

    & > div{
        flex: 1;
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
        text-align: center;
        p{
            width: 100%;
            margin-inline: auto;
        }
    }
`

export const WavyBg = styled.div`
    display: ${({display}) => display || 'flex'};
    width: 100%;

    img{
        width: 100%;
    }
`