import Link from 'next/link';
import { FunctionComponent } from 'react';

const AboutSection: FunctionComponent = () => (
  <div className='flex flex-col w-1/2 mx-auto mt-12 mb-12 justify-center items-center text-center'>
    <h1 className='mb-4 text-4xl text-center'>About Bitcoin</h1>
    <span>The world’s first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis — each satoshi is worth 0.00000001 bitcoin.</span>
    <h2 className='text-2xl mt-8 mb-2'>Resources</h2>
    <div className='flex flex-col gap-1'>
      <Link href='https://bitcoin.org/bitcoin.pdf'>
        <a className='hover:underline hover:underline-offset-2' href='https://bitcoin.org/bitcoin.pdf'>White paper</a>
      </Link>
      <Link href='https://bitcoin.org/'>
        <a className='hover:underline hover:underline-offset-2' href='https://bitcoin.org/'>Official website</a>
      </Link>
    </div>

  </div>
);

export default AboutSection;
