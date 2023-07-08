import PropTypes from 'prop-types';
import { roundCurrencyValue } from '../../helpers/roundCurrencyValue';
import { PriceDisplay } from './CurrencyPriceDisplay.styled';

function CurrencyPriceDisplay({ currency, rate }) {
    return (
        <PriceDisplay> 1 {currency} = {roundCurrencyValue(rate)} UAH </PriceDisplay>
    );
}

CurrencyPriceDisplay.propTypes = {
    currency: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
};

export default CurrencyPriceDisplay;