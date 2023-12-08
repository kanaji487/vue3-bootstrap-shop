export const currencyUSD = (dollar) => {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(dollar)
}