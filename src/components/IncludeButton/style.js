import styled from "styled-components";

export const DishIncludeButton = styled.button`
  color: #FFF;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
  background-color: ${({theme}) => theme.COLORS.TOMATO_200};
  font-family: ${({theme}) => theme.FONTS.Primary};


  @media (max-width: 500px) {
    padding: .6rem 6rem;
  }
`;