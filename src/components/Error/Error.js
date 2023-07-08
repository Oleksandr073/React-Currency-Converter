import { ReactComponent as ErrorIcon } from '../../icons/sad-cloud.svg';

function Error(props) {
    const { size = 100, color = '#000000' } = props;

    return (
        <ErrorIcon
            width={size}
            height={size}
            fill={color}
            aria-label='Іконка помилки'
        />
    );
}

export default Error;