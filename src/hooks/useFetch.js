import { useState, useEffect } from 'react';

function useFetch(request) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            setIsError(false);
            try {
                const response = await request();
                setData(response);
            } catch (e) {
                setIsError(true);
                console.error(e);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [request])

    return { data, isLoading, isError };
}

export default useFetch;