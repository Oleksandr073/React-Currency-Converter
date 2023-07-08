import { StyledLink, Icon } from './Logo.styled';

function Logo() {
    return (
        <StyledLink to='/'>
            <Icon
                alt="Логотип обміну валют"
                width={40}
                height={40}
            />
            Обмін валют
        </StyledLink>
    );
}

export default Logo;