import ConversionSectionInner from '../ConversionSectionInner/ConversionSectionInner';
import { Wrapper, StyledContainer } from './ConversionSection.styled';

function ConversionSection() {
    return (
        <Wrapper>
            <StyledContainer>
                <ConversionSectionInner />
            </StyledContainer>
        </Wrapper>
    );
}

export default ConversionSection;