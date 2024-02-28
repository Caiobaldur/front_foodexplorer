import styled from "styled-components";

export const Container = styled.div`
  /* margin: 0 auto; */
  width: 30.4rem;
  height: 46.2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid red;
  position: relative;
  display: flex;
  justify-content: center;

  .dishDescription {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > .dishDescription img {
    top: 24px;
    width: 17.6rem;
    height: 17.6rem;
    margin-top: 2.4rem;
  }

  > .dishDescription h3 {
    padding: 1.5rem;
    font-size: 2.4rem;
    font-weight: 700;
    width: 25.6rem;
  }

  > .dishDescription p {
    padding: 0 2.4rem 1.5rem 2.4rem;
    font-size: 1.4rem;
    text-align: center;
  }

  .dishPrice {
    color: ${({theme}) => theme.COLORS.CAKE_200};
    font-family: ${({theme}) => theme.FONTS.Secondary};
    font-size: 3.2rem;
    padding-bottom: 1.5rem;
  }

  .wrap-order {
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }

  .quantity {
    font-family: ${({theme}) => theme.FONTS.Secondary};
    width: 2.4rem;
    height: 3rem;
    font-size: 2rem;
  }



  @media (max-width: 500px) {
    width: 21rem;
    height: 29.2rem;

    > img {
      width: 8.8rem;
      height: 8.8rem;
      margin-top: 2.4rem;
    }
  }
`;

//botão
export const FavButton = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.8rem;

  > svg {
    color: #fff;
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const RemoveButton = styled.button`
  > svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #fff;
  }

`;

export const AddButton = styled.button`
> svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #fff;
  }

`;

