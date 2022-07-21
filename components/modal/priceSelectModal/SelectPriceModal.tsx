import React, { FunctionComponent } from 'react';

import { SelectPriceModalProps } from './selectPriceModalTypes';

const SelectPriceModal:FunctionComponent<SelectPriceModalProps> = ({ currentCurrency, currencies, selectCurrency }) => (
  <div className='relative'>
    <span className='cursor-pointer'>{currentCurrency}</span>
    <div className='absolute hidden group-hover:flex  flex-col gap-2 top-16 right-1/2 translate-x-1/2 px-6 py-4 border-2 border-primary dark:border-secondary'>
      {currencies.filter((item) => item !== currentCurrency).map((item, index) => <span key={index} className='cursor-pointer' onClick={selectCurrency}>{item}</span>)}
    </div>
  </div>
);

export default SelectPriceModal;
