import NumericInput from '../NumericInput/NumericInput';
import Select from '../Select/Select';
import { SelectInputWrapper } from './CurrencySelectInput.styled';

function CurrencySelectInput(props) {
    const { currency, value, optionValues, selectHandler, inputHandler } = props;
    return (
        <SelectInputWrapper>
            <Select value={currency} handleChange={selectHandler} optionValues={optionValues} />
            <NumericInput value={value} handleChange={inputHandler} placeholderText='Enter the currency value' />
        </SelectInputWrapper>
    );
}

export default CurrencySelectInput;