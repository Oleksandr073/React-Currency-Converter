import { styled } from 'styled-components';
import Container from '../Container/Container';

export const Wrapper = styled.header`
    width: 100%;
    padding: 20px 0;
    color: #FFFFFF;
    background-color: #19A7CE;
`;

export const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Info = styled.div`
    min-width: 360px;
    display: flex;
    justify-content: center;
`;