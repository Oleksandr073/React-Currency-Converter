import { CurrenciesContext, IsLoadingContext, IsErrorContext } from '../contexts/Contexts';

function AppProviders({ children, currencies, isLoading, isError }) {
    return (
        <CurrenciesContext.Provider value={currencies}>
            <IsLoadingContext.Provider value={isLoading}>
                <IsErrorContext.Provider value={isError}>
                    {children}
                </IsErrorContext.Provider>
            </IsLoadingContext.Provider>
        </CurrenciesContext.Provider>
    );
}

export default AppProviders;