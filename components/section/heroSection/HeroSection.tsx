import { FunctionComponent } from 'react';

import CurrentBitcoinPrice from '../../price/currentBitcoinPrice/CurrentBitcoinPrice';
import { CurrentBitcoinPriceProps } from '../../price/currentBitcoinPrice/currentBitcoinPriceTypes';

const HeroSection: FunctionComponent<CurrentBitcoinPriceProps> = ({
  currentBitcoinPriceData,
  currentBitcoinPriceError,
  currentBitcoinPriceIsLoading,
  exchangeRatesData,
  exchangeRatesError,
  exchangeRatesIsLoading,
  currentCurrency
}) => (
  <div className='flex flex-col mt-28 h-52 mx-auto'>
    <h1 className='mb-4 text-6xl text-center'>Current Price</h1>
    <div className='flex flex-col text-center'>
      <CurrentBitcoinPrice
        currentBitcoinPriceData={currentBitcoinPriceData}
        currentBitcoinPriceError={currentBitcoinPriceError}
        currentBitcoinPriceIsLoading={currentBitcoinPriceIsLoading}
        exchangeRatesData={exchangeRatesData}
        exchangeRatesError={exchangeRatesError}
        exchangeRatesIsLoading={exchangeRatesIsLoading}
        currentCurrency={currentCurrency}
      />
    </div>
  </div>
);

export default HeroSection;
