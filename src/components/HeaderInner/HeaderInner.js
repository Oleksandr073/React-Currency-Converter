import CurrencyPriceDisplay from '../CurrencyPriceDisplay/CurrencyPriceDisplay';
import { useContext } from 'react';
import { CurrenciesContext, IsLoadingContext, IsErrorContext } from '../../contexts/Contexts';
import { List } from './HeaderInner.styled';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import NoCurrenciesMsg from '../NoCurrenciesMsg/NoCurrenciesMsg';

function HeaderInner() {
    const currencies = useContext(CurrenciesContext);
    const isLoading = useContext(IsLoadingContext);
    const isError = useContext(IsErrorContext);

    if (isLoading) return <Loader color='#146C94' size={40} />;
    if (isError) return <Error color='#146C94' size={40} />;
    if (!currencies?.length) return <NoCurrenciesMsg />;

    const popularCurrencies = currencies.filter(({ cc }) =>
        cc === 'EUR' ||
        cc === 'USD'
    );

    return (
        <List>
            {popularCurrencies.map(({ cc, rate }) =>
                <li key={cc}>
                    <CurrencyPriceDisplay currency={cc} rate={rate} />
                </li>
            )}
        </List>
    );
}

export default HeaderInner;