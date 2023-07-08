import NumericInput from '../NumericInput/NumericInput';
import Select from '../Select/Select';
import { SelectInputWrapper } from './CurrencySelectInput.styled';

function CurrencySelectInput(props) {
    const { currency, value, optionValues, selectHandler, inputHandler } = props;

    const options = optionValues.map(value => ({ value, label: value, }));

    return (
        <SelectInputWrapper>
            <Select value={currency} handleChange={selectHandler} options={options} />
            <NumericInput value={value} handleChange={inputHandler} placeholderText='Enter the currency value' />
        </SelectInputWrapper>
    );
}

export default CurrencySelectInput;