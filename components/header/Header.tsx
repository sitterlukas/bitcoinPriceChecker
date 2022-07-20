import { FunctionComponent } from 'react';

const Header:FunctionComponent = () => (
  <div className='flex justify-center relative'>
    <div className='my-6 text-4xl'>bitcoin price</div>
    <div className='absolute right-12 my-6 text-4xl'>USD</div>
  </div>
);

export default Header;
