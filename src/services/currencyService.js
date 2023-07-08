const BASE_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

export async function getCurrencies() {
    const url = BASE_URL;
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    const data = await response.json();
    
    return transformToCurrencies(data);
}

function transformToCurrencies(data) {
    data.unshift({
        txt: 'Українська гривня',
        rate: 1,
        cc: 'UAH',
    });

    const currencies = data.filter(({ cc }) =>
        cc === 'UAH' ||
        cc === 'EUR' ||
        cc === 'USD' ||
        cc === 'PLN' ||
        cc === 'KZT'
    ).map(({ txt, rate, cc }) => ({ txt, rate, cc }));

    return currencies;
}