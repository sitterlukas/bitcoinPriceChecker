import React, { FunctionComponent } from 'react';

import SelectPriceModal from '../modal/priceSelectModal/SelectPriceModal';

import { SelectPriceModalProps } from '../modal/priceSelectModal/selectPriceModalTypes';

const Header:FunctionComponent<SelectPriceModalProps> = ({ currentCurrency, currencies, selectCurrency }) => (
  <div className='relative flex justify-center relative'>
    <div className='my-6 text-4xl'>bitcoin price</div>
    <div className='absolute group h-full w-16 right-12 my-6 text-center text-4xl'>
      <SelectPriceModal currentCurrency={currentCurrency} currencies={currencies} selectCurrency={selectCurrency} />
    </div>
  </div>
);

export default Header;
