import styled from "styled-components";

export const Container = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  margin-top: 16.4rem;
  position: relative;
  height: fit-content;
  max-height: 26rem;

  display: flex;
  justify-content: space-between;
  box-shadow: inset 75px 3px 0px 0px ${({ theme }) => theme.COLORS.DARK_400};

  border-radius: 1rem;
  height: 260px;

  align-items: center;

  background: ${({ theme }) => theme.GRADIENTS.BACKGROUND_200};

  .image {
    width: 125rem;
    transform: translateY(-12.5%);
    overflow: hidden;
    height: 34.5rem;
    
  }

  img {
    transform: scaleX(-1);
  }

  .text {
    width: 100%;
    text-align: left;
  }

  h1 {
    font-size: 4rem;
    font-weight: 500;
  }

  p {
    
    font-size: 1.4rem;
    font-weight: 400;
  }

  @media (max-width: 1024px) {
    width: 95rem;
    box-shadow: inset 60px 3px 0px 0px ${({ theme }) => theme.COLORS.DARK_400};

    

    .image {
      width: 100rem;
    }
  }

  @media (max-width: 768px) {
    width: 75rem;

    .text {
    width: 73%;
    text-align: left;
  }
    
    .image {
      width: 85rem;
    }

    h1 {
    font-size: 2.8rem;
    font-weight: 600;
  }

  p {
    font-size:1.9rem;
    font-weight: 400;
  }
  }

  @media (max-width: 500px) {
    margin-top: 5.4rem;
    max-height: 12rem;
    box-shadow: inset 15px 3px 0px 0px ${({ theme }) => theme.COLORS.DARK_400};
    max-width: 37.6rem;
    height: fit-content;
    position: relative;

    .text {
    width: 100%;
    text-align: left;
  }
    
    .image {
      width: 29.1rem;
      transform: translateY(-3%);
      overflow: hidden;
      height: 12.9rem;
    }

    h1 {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.52rem;

  }

  p {
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.68rem;
    font-family: ${({ theme }) => theme.FONTS.Secondary};
  }
  }
`;
