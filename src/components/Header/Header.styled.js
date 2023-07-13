import { styled } from 'styled-components';
import Container from '../Container/Container';
import { ReactComponent as AngleUpIcon } from '../../icons/angle-up.svg';

export const Wrapper = styled.header`
    width: 100%;
    padding: 20px 0;
    color: #FFFFFF;
    background-color: #19A7CE;
    position: relative;
`;

export const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

export const AngleUp = styled(AngleUpIcon)`
    fill: #FFFFFF;
    transform: rotate(${({ isOpen }) => isOpen ? '0' : '180deg'});
    transition: transform 200ms ease;
`;

export const ShowButton = styled.button`
    height: 30px;
    width: 30px;
    padding: 5px;
    cursor: pointer;
    background: none;
    border: none;

    @media screen and (min-width: 769px) {
        display: none;
    }
`;

export const Info = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (min-width: 769px) {
        min-width: 360px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 20px;
        position: absolute;
        top: 100%;
        left: 50%;
        z-index: 1;
        background-color: #19A7CE;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
        transform-origin: top;
        transform: translate(-50%, 0) scaleY(${({ isOpen }) => isOpen ? 1 : 0});
        opacity: ${({ isOpen }) => isOpen ? 1 : 0};
        transition: transform 200ms ease, opacity 200ms ease;
    }
`;