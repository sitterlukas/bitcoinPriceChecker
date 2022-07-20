import { useQuery } from '@tanstack/react-query';
import { FunctionComponent } from 'react';

import Price from './Price';

const HeroSection: FunctionComponent = () => (
  <div className='flex flex-col h-80 justify-center items-center mx-auto'>
    <h1 className='mb-4 text-6xl text-center'>Current Price</h1>
    <div className='flex flex-col text-center'>
      <Price />
    </div>
  </div>
);

export default HeroSection;
