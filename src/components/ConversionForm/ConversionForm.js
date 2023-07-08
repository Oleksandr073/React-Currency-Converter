import CurrencySelectInput from '../CurrencySelectInput/CurrencySelectInput';
import getFlagIconURL from '../../helpers/getFlagIconURL';
import { CurrencyHeader, CurrencyText } from './ConversionForm.styled';

function ConversionForm(props) {
    const { countryCode, currencyText, currency, value, optionValues, selectHandler, inputHandler } = props;
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

export default ConversionForm;