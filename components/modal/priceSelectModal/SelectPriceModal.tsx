import React, { FunctionComponent, MouseEventHandler } from 'react';

type SelectPriceModalProps = {
    currentCurrency: string,
    currencies: string[],
    selectCurrency: MouseEventHandler<HTMLSpanElement>
}

const SelectPriceModal:FunctionComponent<SelectPriceModalProps> = ({ currentCurrency, currencies, selectCurrency }) => (
  <div className='relative'>
    <span className='cursor-pointer'>{currentCurrency}</span>
    <div className='absolute hidden group-hover:flex  flex-col gap-2 top-16 right-1/2 translate-x-1/2 px-6 py-4 border-2 border-black'>
      {currencies.filter((item) => item !== currentCurrency).map((item) => <span className='cursor-pointer' onClick={selectCurrency}>{item}</span>)}
    </div>
  </div>
);

export default SelectPriceModal;
