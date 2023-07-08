import { useState, useContext } from 'react';
import { CurrenciesContext } from '../../contexts/Contexts';
import ConversionForm from '../ConversionForm/ConversionForm';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import NoCurrenciesMsg from '../NoCurrenciesMsg/NoCurrenciesMsg';

function ConversionSectionInner() {
    const { currencies, isLoading, isError } = useContext(CurrenciesContext);

    const [firstCurrency, setFirstCurrency] = useState('USD');
    const [secondCurrency, setSecondCurrency] = useState('UAH');
    const [value, setValue] = useState(1);
    const [isCurrentFirstInput, setIsCurrentFirstInput] = useState(true);

    if (isLoading) return <Loader color='#19A7CE' size={70} />;
    if (isError) return <Error color='#19A7CE' size={200} />;
    if (!currencies?.length) return <NoCurrenciesMsg />;

    const optionValues = currencies.map(({ cc }) => cc);

    const firstOptionValues = optionValues.filter(optionValue => optionValue !== secondCurrency);
    const secondOptionValues = optionValues.filter(optionValue => optionValue !== firstCurrency);

    const firstCurrencyObj = currencies.find(({ cc }) => cc === firstCurrency);
    const secondCurrencyObj = currencies.find(({ cc }) => cc === secondCurrency);

    const { rate: firstRate, txt: firstText, cc: firstCurrencyCode } = firstCurrencyObj;
    const { rate: secondRate, txt: secondText, cc: secondCurrencyCode } = secondCurrencyObj;

    const firstValue = (isCurrentFirstInput ? value : value * secondRate / firstRate);
    const secondValue = (!isCurrentFirstInput ? value : value * firstRate / secondRate);

    return (
        <>
            <ConversionForm
                countryCode={firstCurrencyCode.slice(0, -1)}
                currencyText={firstText}
                currency={firstCurrency}
                value={firstValue}
                optionValues={firstOptionValues}
                selectHandler={value => setFirstCurrency(value)}
                inputHandler={value => { setValue(value); setIsCurrentFirstInput(true); }}
            />
            <ConversionForm
                countryCode={secondCurrencyCode.slice(0, -1)}
                currencyText={secondText}
                currency={secondCurrency}
                value={secondValue}
                optionValues={secondOptionValues}
                selectHandler={value => setSecondCurrency(value)}
                inputHandler={value => { setValue(value); setIsCurrentFirstInput(false); }}
            />
        </>
    );
}

export default ConversionSectionInner;
