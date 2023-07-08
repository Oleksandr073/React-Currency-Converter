import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../icons/currency-exchange.svg';

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    color: inherit;
    fill: #FFFFFF;
    transition: color 200ms ease;

    &:hover,
    &:focus {
        color: #146C94;
        
        svg {
            fill: #146C94;
        }
    }
`;

export const Icon = styled(LogoIcon)`
    margin-right: 10px;
    transition: fill 200ms ease;
`;