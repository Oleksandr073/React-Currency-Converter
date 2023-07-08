import { CurrenciesContext } from '../../contexts/Contexts';
import { useContext } from 'react';
import ConversionSectionInner from '../ConversionSectionInner/ConversionSectionInner';
import { Wrapper, StyledContainer } from './ConversionSection.styled';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import NoCurrenciesMsg from '../NoCurrenciesMsg/NoCurrenciesMsg';

function ConversionSection() {
    return (
        <Wrapper>
            <StyledContainer>
                <ConversionSectionContent />
            </StyledContainer>
        </Wrapper>
    );
}

function ConversionSectionContent() {
    const { currencies, isLoading, isError } = useContext(CurrenciesContext);
    
    if (isLoading) return <Loader color='#19A7CE' size={70} />;
    if (isError) return <Error color='#19A7CE' size={200} />;
    if (!currencies?.length) return <NoCurrenciesMsg />;

    return <ConversionSectionInner currencies={currencies} />
}

export default ConversionSection;