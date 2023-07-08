import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.section`
    padding: 50px 0;
    text-align: center;
`;

export const Title = styled.h2`
    margin-bottom: 10px;
    font-size: 48px;
`;

export const Description = styled.b`
    display: block;
    margin-bottom: 10px;
    font-size: 24px;
`;

export const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: inherit;

    transition: color 200ms ease;

    &:hover {
        color: #19A7CE;
    }
`;