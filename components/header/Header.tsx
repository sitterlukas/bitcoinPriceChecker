import React, { FunctionComponent } from 'react';

import SelectPriceModal from '../modal/priceSelectModal/SelectPriceModal';
import Switch from '../switch/switch';

import { SelectPriceModalProps } from '../modal/priceSelectModal/selectPriceModalTypes';

const Header:FunctionComponent<SelectPriceModalProps> = ({ currentCurrency, currencies, selectCurrency }) => (
  <div className='relative flex justify-center relative'>
    <div className='my-7 sm:my-6 text-2xl sm:text-4xl'>bitcoin price</div>
    <div className='absolute top-0 -translate-y-1 left-12 my-8 text-4xl'>
      <Switch />
    </div>
    <div className='absolute group h-full w-16 right-12 my-6 text-center text-4xl'>
      <SelectPriceModal currentCurrency={currentCurrency} currencies={currencies} selectCurrency={selectCurrency} />
    </div>
  </div>
);

export default Header;
