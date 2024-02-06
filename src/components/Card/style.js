import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  border-radius: 0.3rem;
  margin-top: 16.4rem;
  width: 1120px;
  height: 260px;
  background: ${({ theme }) => theme.GRADIENTS.BACKGROUND_200};

  @media (max-width: 500px) {
    margin-top: 4.4rem;
    width: 376px;
    height: 120px;
  }
`;
