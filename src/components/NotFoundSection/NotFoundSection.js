import Container from '../Container/Container';
import { Wrapper, Title, Description, StyledLink } from './NotFoundSection.styled';

function NotFoundSection() {
    return (
        <Wrapper>
            <Container>
                <Title>404</Title>
                <Description>Сторінки не існує</Description>
                <StyledLink to='/'>На головну</StyledLink>
            </Container>
        </Wrapper>
    );
}

export default NotFoundSection;