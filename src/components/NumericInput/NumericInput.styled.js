import { styled } from 'styled-components';

export const InputStyled = styled.input`
    padding: 8px;
    background-color: #FFFFFF;
    border: 2px solid #19A7CE;
    border-radius: 5px;

    transition: border 100ms linear;

    &:focus,
    &:hover {
        outline: none;
        border: 2px solid #146C94;
    }
`;