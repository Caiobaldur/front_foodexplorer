import styled from "styled-components";

export const Container = styled.header`
  
  background-color: ${({theme}) => theme.COLORS.DARK_700};
  width: 100%;

  .content {
    display: flex;
    padding: 2.4rem 12.3rem;  
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1.1rem;
  }

  .search {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }

  .search label input {
    background: url(../src/assets/VectorSearch.svg) no-repeat;
    background-position: 14rem center;
    padding: 1.6rem 13.7rem;
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

  .final {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }
  
@media (max-width: 1024px) {
  .content {
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .search label input {
    display: none;
  }

  .final {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }
}

@media (max-width: 500px) {


 }

  
`;

export const Logout = styled.button`
  
  > svg {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 2.2rem;
    margin-top: .5rem;
  }

  @media (max-width: 500px) {
    display: none;

}

`;

export const MobileReceipt = styled.button`
  
  > svg {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 2.6rem;
    margin-top: .5rem;
    
  }

  @media (max-width: 2560px){
    display: none;
  }

  @media (max-width: 500px) {
    display: block;

}

`;