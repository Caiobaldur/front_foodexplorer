import styled from "styled-components";


export const Container = styled.div `
  /* margin: 0 auto; */
  width: 30.4rem;
  height: 46.2rem;
  border: 1px solid red;
  position: relative;
  display: flex;
  justify-content: center;

  > img {
   width : 17.6rem;
   height: 17.6rem;
   margin-top: 2.4rem;
  }

  @media (max-width: 500px) {
    width: 21.0rem;
    height: 29.2rem;
   
    > img {
   width : 8.8rem;
   height: 8.8rem;
   margin-top: 2.4rem;
  }
  }
`;



//botão
export const FavButton = styled.button `
  position: absolute;
  top: 1.6rem;
  right: 1.8rem;

  > svg {
    color: #fff;
    width: 2.4rem;
    height: 2.2rem;
  }

`;