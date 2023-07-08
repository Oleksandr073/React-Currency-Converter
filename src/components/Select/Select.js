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

export default Select;