import ReactSelect from 'react-select/creatable';
import { customStyles } from './SelectStyles';

function Select(props) {
    const { name, value, handleChange, optionValues } = props;

    const options = optionValues.map(value => ({ value, label: value, }));
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