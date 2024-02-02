import styled from "styled-components";

export const Container = styled.div `
  
  background-color: ${({theme}) => theme.COLORS.DARK_700};
  width: 100%;

  .content {
    display: flex;
    padding: 2.4rem 12.3rem;  
    align-items: center;
    justify-content: center;
  }
  
  .content > img:nth-child(1) {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    padding-right: 1rem;
    
  }

  .search {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }

  .search label input {
    background: url(../src/assets/VectorSearch.svg) no-repeat;
    background-position: 14rem center;
    padding: 1.2rem 1.4rem;
    width: 58rem;
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    text-align: center;
  }

  .search h1 {
    flex-wrap: nowrap;
    font-size: 2.4rem;
    font-family: ${({theme}) => theme.FONTS.Primary};
  }

  .search > button {
    padding: 1.2rem 3.2rem;
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    border: none;
    display: flex;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    align-items: center;
    gap: 1.1rem;
  }

  .content > a {
    padding-right: 0rem;
    background: none;
    border: none;
    padding-left: 3.2rem;
  }
  


  
`;