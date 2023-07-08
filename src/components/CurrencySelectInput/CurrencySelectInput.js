import { useMemo } from 'react';
import NumericInput from '../NumericInput/NumericInput';
import Select from '../Select/Select';
import { SelectInputWrapper } from './CurrencySelectInput.styled';

function CurrencySelectInput({ currency, value, optionValues, selectHandler, inputHandler }) {
    const options = useMemo(
        () => optionValues.map(value => ({ value, label: value, })),
        [optionValues]
    );

    return (
        <SelectInputWrapper>
            <Select value={currency} handleChange={selectHandler} options={options} />
            <NumericInput value={value} handleChange={inputHandler} placeholderText='Enter the currency value' />
        </SelectInputWrapper>
    );
}

export default CurrencySelectInput;