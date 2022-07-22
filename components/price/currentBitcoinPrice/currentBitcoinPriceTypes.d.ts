export type CurrentBitcoinPriceProps = {
    currentBitcoinPriceData: {
        priceUsd: string,
        changePercent24Hr: string
    },
    currentBitcoinPriceError: Error | unknown,
    currentBitcoinPriceIsLoading: boolean,
    exchangeRatesData: {
        USD: number,
        EUR: number,
        CZK: number
    },
    exchangeRatesError: Error | unknown,
    exchangeRatesIsLoading: boolean,
    currentCurrency: string
}