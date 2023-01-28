import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px 15px 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${(prop) => prop.theme.secondry};

  p {
    margin-bottom: 0;
  };

  @media (max-width: 768px) {
    p {
        font-size: 15px;
    };

    img {
      max-width: 40px;
    };
  };
`;
