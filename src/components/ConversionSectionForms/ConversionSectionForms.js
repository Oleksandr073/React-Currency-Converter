import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ConversionForm from '../ConversionForm/ConversionForm';

function ConversionSectionForms({ currencies }) {
    const [firstCurrency, setFirstCurrency] = useState('USD');
    const [secondCurrency, setSecondCurrency] = useState('UAH');
    const [value, setValue] = useState(1);
    const [isCurrentFirstInput, setIsCurrentFirstInput] = useState(true);

    const { first, second } = useMemo(
        () => {
            const optionValues = currencies.map(({ cc }) => cc);

            const firstOptionValues = optionValues.filter(optionValue => optionValue !== secondCurrency);
            const secondOptionValues = optionValues.filter(optionValue => optionValue !== firstCurrency);

            const firstCurrencyObj = currencies.find(({ cc }) => cc === firstCurrency);
            const secondCurrencyObj = currencies.find(({ cc }) => cc === secondCurrency);

            return {
                first: {
                    optionValues: firstOptionValues,
                    ...firstCurrencyObj
                },
                second: {
                    optionValues: secondOptionValues,
                    ...secondCurrencyObj
                },
            };
        },
        [currencies, firstCurrency, secondCurrency]
    );      

    const firstValue = (isCurrentFirstInput ? value : value * second.rate / first.rate);
    const secondValue = (!isCurrentFirstInput ? value : value * first.rate / second.rate);

    return (
        <>
            <ConversionForm
                countryCode={first.cc.slice(0, -1)}
                currencyText={first.txt}
                currency={firstCurrency}
                value={firstValue}
                optionValues={first.optionValues}
                selectHandler={value => setFirstCurrency(value)}
                inputHandler={value => { setValue(value); setIsCurrentFirstInput(true); }}
            />
            <ConversionForm
                countryCode={second.cc.slice(0, -1)}
                currencyText={second.txt}
                currency={secondCurrency}
                value={secondValue}
                optionValues={second.optionValues}
                selectHandler={value => setSecondCurrency(value)}
                inputHandler={value => { setValue(value); setIsCurrentFirstInput(false); }}
            />
        </>
    );
}

ConversionSectionForms.propTypes = {
    currencies: PropTypes.arrayOf(PropTypes.exact({
        txt: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired,
        cc: PropTypes.string.isRequired,
    })),
};

export default ConversionSectionForms;
