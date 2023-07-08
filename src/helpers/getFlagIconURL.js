export default function getFlagIconURL({ style = 'FLAT', size = 64, countryCode }) {
    return `https://www.countryflagicons.com/${style}/${size}/${countryCode}.png`;
}