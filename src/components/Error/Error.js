import PropTypes from 'prop-types';
import { ReactComponent as ErrorIcon } from '../../icons/sad-cloud.svg';

function Error({ size = 100, color = '#000000' }) {
    return (
        <ErrorIcon
            width={size}
            height={size}
            fill={color}
            aria-label='Іконка помилки'
        />
    );
}

Error.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};

export default Error;