import { NumericFormat } from 'react-number-format';
import { InputStyled } from './NumericInput.styled';

function NumericInput({ name, value, handleChange, placeholderText }) {
    return <NumericFormat
        customInput={InputStyled}
        name={name}
        value={value}
        decimalScale={2}
        onValueChange={({ floatValue }) => handleChange(floatValue)}
        placeholder={placeholderText || 'Enter a number'}
    />;
}

export default NumericInput;