import { roundCurrencyValue } from '../../helpers/roundCurrencyValue';
import { PriceDisplay } from './CurrencyPriceDisplay.styled';

function CurrencyPriceDisplay(props) {
    const { currency, rate } = props;
    return (
        <PriceDisplay> 1 {currency} = {roundCurrencyValue(rate)} UAH </PriceDisplay>
    );
}

export default CurrencyPriceDisplay;