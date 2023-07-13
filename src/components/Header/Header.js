import { Wrapper, StyledContainer, ShowButton, AngleUp, Info } from './Header.styled';
import HeaderInner from '../HeaderInner/HeaderInner';
import Logo from '../Logo/Logo';
import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Wrapper>
            <StyledContainer>
                <Logo />
                <ShowButton type='button' onClick={() => setIsOpen(isOpen => !isOpen)}>
                    <AngleUp isOpen={isOpen}/>
                </ShowButton>
                <Info isOpen={isOpen}>
                    <HeaderInner />
                </Info>
            </StyledContainer>
        </Wrapper>
    );
}

export default Header;