import { FunctionComponent } from 'react';
import { useQuery } from '@tanstack/react-query';

const Price: FunctionComponent = () => {
  const { isLoading, error, data } = useQuery(
    ['bitcoinData'],
    async () => {
      const { data } = await (
        await fetch('https://api.coincap.io/v2/assets/bitcoin')).json();
      return data;
    },
    {
      refetchInterval: 10000,
    },
  );

  if (isLoading) {
    return (
      <div className='text-4xl'>
        Loading...
        $
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

export default Price;
