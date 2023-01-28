import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  margin-top: 15px;
  padding: 20px 0;
`;

export const SearchContainer = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Search = styled.input`
  min-width: 50%;
  height: 45px;
  margin-right: 10px;
  background-color: ${(prop) => prop.theme.background};
  border: none;
  border-radius: 10px;
  padding-left: 20px;
  font-size: 17px;
  color: ${(prop) => prop.theme.primery};

  &::placeholder {
    color: ${(prop) => prop.theme.secondry};
    opacity: 1;
  };

  &:focus {
    outline: none;
  };
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  color: ${prop => prop.theme.primery};
  background-color: transparent;

  i {
    font-size: 25px;
    cursor: pointer;
    color: ${prop => prop.theme.primery};
  };
`;