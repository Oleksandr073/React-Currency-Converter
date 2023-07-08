import { Wrapper, StyledContainer, Info } from './Header.styled';
import HeaderInner from '../HeaderInner/HeaderInner';
import Logo from '../Logo/Logo';

function Header() {
    return (
        <Wrapper>
            <StyledContainer>
                <Logo />
                <Info>
                    <HeaderInner />
                </Info>
            </StyledContainer>
        </Wrapper>
    );
}

export default Header;