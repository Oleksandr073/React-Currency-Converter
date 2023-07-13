import { styled } from "styled-components";
import Container from "../Container/Container";

export const Wrapper = styled.section`
    padding: 50px 0;
`;

export const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
    gap: 40px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;