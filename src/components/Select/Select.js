import PropTypes from 'prop-types';
import ReactSelect from 'react-select/creatable';
import { customStyles } from './SelectStyles';

function Select({ name, value, handleChange, options }) {
    const defaultValue = options.find(option => option.value === value);
    return <ReactSelect
        name={name}
        options={options}
        defaultValue={defaultValue}
        styles={customStyles}    
        onChange={({ value }) => handleChange(value)}
        isSearchable={false}
    />;
}

Select.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.exact({
        value: PropTypes.string,
        label: PropTypes.string,
    })).isRequired,
};

export default Select;