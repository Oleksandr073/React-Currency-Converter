import { Routes, Route } from 'react-router-dom';
import { getCurrencies } from './services/currencyService';
import MainLayout from './layout/MainLayout';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import useFetch from './hooks/useFetch';
import { CurrenciesContext } from './contexts/Contexts';

function App() {
    const { data: currencies, isLoading, isError } = useFetch(getCurrencies);
    return (
        <CurrenciesContext.Provider value={{ currencies, isLoading, isError }} >
            <MainLayout>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </MainLayout>
        </CurrenciesContext.Provider>
    );
}

export default App;