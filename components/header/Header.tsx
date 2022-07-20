import React, { FunctionComponent, MouseEventHandler } from 'react';

import SelectPriceModal from '../modal/priceSelectModal/SelectPriceModal';

type HeaderProps = {
    currentCurrency: string,
    currencies: string[],
    selectCurrency: MouseEventHandler<HTMLSpanElement>
}

const Header:FunctionComponent<HeaderProps> = ({ currentCurrency, currencies, selectCurrency }) => (
  <div className='relative flex justify-center relative'>
    <div className='my-6 text-4xl'>bitcoin price</div>
    <div className='absolute group h-full w-16 right-12 my-6 text-center text-4xl'>
      <SelectPriceModal currentCurrency={currentCurrency} currencies={currencies} selectCurrency={selectCurrency} />
    </div>
  </div>
);

export default Header;
