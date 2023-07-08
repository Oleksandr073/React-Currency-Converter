import PropTypes from 'prop-types';
import CurrencySelectInput from '../CurrencySelectInput/CurrencySelectInput';
import getFlagIconURL from '../../helpers/getFlagIconURL';
import { CurrencyHeader, CurrencyText } from './ConversionForm.styled';

function ConversionForm({ countryCode, currencyText, currency, value, optionValues, selectHandler, inputHandler }) {
    return (
        <div>
            <CurrencyHeader>
                <img
                    src={getFlagIconURL({ size: 24, countryCode })}
                    alt={`${countryCode} flag`}
                    width={24}
                    height={24}
                />
                <CurrencyText>{currencyText}</CurrencyText>
            </CurrencyHeader>
            <CurrencySelectInput
                currency={currency}
                value={value}
                optionValues={optionValues}
                selectHandler={selectHandler}
                inputHandler={inputHandler}
            />
        </div>
    );
}

ConversionForm.propTypes = {
    countryCode: PropTypes.string.isRequired,
    currencyText: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    optionValues: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectHandler: PropTypes.func,
    inputHandler: PropTypes.func,
};

export default ConversionForm;