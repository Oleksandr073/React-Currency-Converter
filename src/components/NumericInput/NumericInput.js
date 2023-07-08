import PropTypes from 'prop-types';
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

NumericInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.number,
    handleChange: PropTypes.func,
    placeholderText: PropTypes.string,
};

export default NumericInput;