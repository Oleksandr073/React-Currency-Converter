export const customStyles = {
    control: (defaultStyles, { isFocused }) => ({
        ...defaultStyles,
        width: 100,
        minHeight: 'auto',
        borderRadius: '5px',
        transition: 'border 100ms linear',
        cursor: 'pointer',
        boxShadow: isFocused ? 0 : 0,
        border: isFocused ? '2px solid #146C94' : '2px solid #19A7CE',
        ':hover': {
            border: '2px solid #146C94',
        },
    }),
    valueContainer: (defaultStyles) => ({
        ...defaultStyles,
        padding: '8px',
    }),
    option: (defaultStyles, { isSelected, isFocused }) => ({
        ...defaultStyles,
        color: isSelected ? '#FFFFFF' : 'inherit',
        cursor: 'pointer',
        backgroundColor:
            (isSelected && '#146C94') ||
            (isFocused && '#AFD3E2') ||
            'transparent',

        ':hover': {
            backgroundColor: isSelected ? '#146C94' : '#AFD3E2',
        },
    }),
    singleValue: (defaultStyles) => ({
        ...defaultStyles,
        color: 'inherit',
    }),
    dropdownIndicator: (defaultStyles, { selectProps: { menuIsOpen } }) => ({
        ...defaultStyles,
        padding: '8px',
        color: 'inherit',
        transition: 'color 100ms linear',
        ':hover': {
            color: '#146C94',
        },
        transform: menuIsOpen ? 'rotate(180deg)' : '',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    menu: (defaultStyles) => ({
        ...defaultStyles,
        marginTop: '5px',
        borderRadius: '5px',
        border: '2px solid #146C94',
    }),
    menuList: (defaultStyles) => ({
        ...defaultStyles,
        padding: 0,
        borderRadius: '2px',      
    }),
};