import styled from "styled-components";

export const Button = styled.button`
  font-family: 'Open Sans', sans-serif;
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({bg, theme}) => bg || theme.colors.primary_pink};
  color: ${({color, theme}) => color || theme.colors.white};

  &:hover{
      opacity: 0.9;
      transform: scale(0.98);
  }
`


export const ButtonOutline = styled(Button)`
  background-color: ${({bg, theme}) => bg || theme.colors.white};
  color: ${({color, theme}) => color || theme.colors.primary_pink};
  border: 2px solid ${({border, theme}) => border || theme.colors.primary_pink};
  padding: 10px 45px;

  @media(max-width: ${({theme}) => theme.mobile}){
    padding: 10px 20px;
    font-size: 14px;
  }

`