import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 40px;
    background-color: ${prop => prop.theme.background};
`;

export const Title = styled.div`
    display: flex;
    align-items: center; 

    i {
        margin-left: 10px;
        font-size: 30px;
        color: ${prop => prop.theme.primery};
    };
`;

export const ToggleContiner = styled.div`
    display: flex;
    align-items: center; 

    i:first-of-type {
        color: ${prop => prop.theme.sunIcon};
    }

    i {
        color: ${prop => prop.theme.moonIcon};
    }
`;

