import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 200px;
`;

export const ResContiner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding-left: 30px;
  border: 1px solid ${(prop) => prop.theme.secondry};
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 90%;
  };
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        margin-bottom: 0;
    };
    
    p {
        margin-top: 0;
    };
   
   
    h3 {
        font-size: 30px;
    };
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`;
