import { NumericFormat } from 'react-number-format';
import { InputStyled } from './NumericInput.styled';

function NumericInput(props) {
    const { name, value, handleChange, placeholderText } = props;

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