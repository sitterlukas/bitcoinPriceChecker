import { FunctionComponent } from 'react';
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';

import { PriceChangeTypes } from './priceChangeTypes';

const PriceChange: FunctionComponent<PriceChangeTypes> = ({
  currentBitcoinPriceData,
}) => {
  const { changePercent24Hr } = currentBitcoinPriceData || {};
  return (
    <div className={`flex justify-center items-center gap-2 text-2xl ${parseFloat(changePercent24Hr) < 0 ? 'text-red-500' : 'text-green-500'} `}>
      <span>
        {parseFloat(changePercent24Hr).toFixed(4)}
        %
      </span>
      {parseFloat(changePercent24Hr) > 0 ? (<BiUpArrow className='text-sm' />) : (<BiDownArrow className='text-sm' />)}
    </div>
  );
};

export default PriceChange;
