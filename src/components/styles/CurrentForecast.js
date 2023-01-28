import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 200px;
    margin-top: 10px;
`;

export const ResContiner = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 50%;
  padding-left: 30px;
  border: 1px solid ${(prop) => prop.theme.secondry};
  border-radius: 20px;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 0 10px 0 20px;
  };
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-bottom: 5px;
  }

  p {
    margin-top: 0;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    img {
      max-width: 150px;
    }
  };
`;
