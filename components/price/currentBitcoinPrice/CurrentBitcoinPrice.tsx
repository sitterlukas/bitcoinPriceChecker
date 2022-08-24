import { FunctionComponent } from 'react';

import { CurrentBitcoinPriceProps } from './currentBitcoinPriceTypes';
import PriceChange from '../priceChange/PriceChange';

const CurrentBitcoinPrice: FunctionComponent<CurrentBitcoinPriceProps> = ({
  currentBitcoinPriceData,
  currentBitcoinPriceError,
  currentBitcoinPriceIsLoading,
  exchangeRatesData,
  exchangeRatesError,
  exchangeRatesIsLoading,
  currentCurrency

}) => {
  const { USD, EUR, CZK } = exchangeRatesData || {};
  const { priceUsd } = currentBitcoinPriceData || {};

  const currentExchangeRate = (currentCurrency: string) => {
    switch (currentCurrency) {
      case 'USD':
        return USD;
      case 'EUR':
        return EUR;
      case 'CZK':
        return CZK;
    }
    return USD;
  };

  const currentCurrencySymbol = (currentCurrency: string) => {
    switch (currentCurrency) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'CZK':
        return 'Kč';
    }
    return '$';
  };
  if (currentBitcoinPriceIsLoading || exchangeRatesIsLoading) {
    return (
      <div className='text-4xl'>
        Loading...
      </div>
    );
  }

  if (currentBitcoinPriceError instanceof Error) {
    return (
      <div className='text-4xl'>
        `An error has occurred: $
        {currentBitcoinPriceError.message}
        `
      </div>
    );
  }

  if (exchangeRatesError instanceof Error) {
    return (
      <div className='text-4xl'>
        `An error has occurred: $
        {exchangeRatesError.message}
        `
      </div>
    );
  }

  const price = Math.round((parseFloat(priceUsd) * currentExchangeRate(currentCurrency) + Number.EPSILON) * 100) / 100;

  return (
    <div className='text-4xl h-20'>
      {price}
      {' '}
      {currentCurrencySymbol(currentCurrency)}
      <PriceChange currentBitcoinPriceData={currentBitcoinPriceData} />
    </div>
  );
};

export default CurrentBitcoinPrice;
