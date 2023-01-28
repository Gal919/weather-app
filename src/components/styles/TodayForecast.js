import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 90%;
  };
`;
