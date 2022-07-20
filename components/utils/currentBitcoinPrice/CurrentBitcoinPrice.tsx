import { FunctionComponent } from 'react';

import useCurrentBitcoinPrice from '../../../queries/currentBitcoinPriceQuery';

const CurrentBitcoinPrice: FunctionComponent = () => {
  const { data, error, isLoading } = useCurrentBitcoinPrice();

  if (isLoading) {
    return (
      <div className='text-4xl'>
        Loading...
      </div>
    );
  }

  if (error instanceof Error) {
    return (
      <div className='text-4xl'>
        `An error has occurred: $
        {error.message}
        `
      </div>
    );
  }

  const price = Math.round((parseFloat(data.priceUsd) + Number.EPSILON) * 100) / 100;

  return (
    <div className='text-4xl'>
      {price}
      $
    </div>
  );
};

export default CurrentBitcoinPrice;
