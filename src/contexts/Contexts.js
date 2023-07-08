import { createContext } from 'react';

export const CurrenciesContext = createContext({
    currencies: null,
    isLoading: null,
    isError: null,
});