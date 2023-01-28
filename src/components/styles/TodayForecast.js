import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
  };
`;
