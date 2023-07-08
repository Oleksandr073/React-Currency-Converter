import { styled } from "styled-components";

const Loader = styled.div`
    height: ${({ size }) => size || '50'}px;
    width: ${({ size }) => size || '50'}px;
    animation: ${({ duration }) => duration || 0.5}s linear infinite loader-spin;
    border-color: ${({ color }) => color || '#000000'};
    border-width: ${({ thickness }) => thickness || '10'}px;
    backface-visibility: hidden;
    border-radius: 50%;
    border-style: solid;
    border-left-color: transparent;
    display: inline-block;

    @keyframes loader-spin { 
        to { transform: rotate(360deg); } 
    }
`;

export default Loader;