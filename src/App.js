import { Routes, Route } from 'react-router-dom';
import { getCurrencies } from './services/currencyService';
import MainLayout from './layout/MainLayout';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import useFetch from './hooks/useFetch';
import AppProviders from './providers/AppProviders';

function App() {
    const { data: currencies, isLoading, isError } = useFetch(getCurrencies);
    return (
        <AppProviders currencies={currencies} isLoading={isLoading} isError={isError} >
            <MainLayout>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </MainLayout>
        </AppProviders>
    );
}

export default App;