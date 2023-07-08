export function roundCurrencyValue(value) {
    const roundingAccuracy = 100;
    return Math.floor(value * roundingAccuracy) / roundingAccuracy;
}