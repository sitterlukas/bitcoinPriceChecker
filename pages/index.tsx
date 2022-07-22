import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/header/Header';
import HeroSection from '../components/section/heroSection/HeroSection';
import useExchangeRates from '../queries/exchangeRatesQuery';
import useCurrentBitcoinPrice from '../queries/currentBitcoinPriceQuery';
import AboutSection from '../components/section/aboutSection/AboutSection';

const Home: NextPage = () => {
  const [currentCurrency, setCurrentCurrency] = useState('USD');
  const [currencies, setCurrencies] = useState(['USD', 'CZK', 'EUR']);

  const { data: exchangeRatesData, error: exchangeRatesError, isLoading: exchangeRatesIsLoading } = useExchangeRates();

  const { data: currentBitcoinPriceData, error: currentBitcoinPriceError, isLoading: currentBitcoinPriceIsLoading } = useCurrentBitcoinPrice();

  const selectCurrency = (event: React.MouseEvent<HTMLSpanElement> & { currentTarget: { textContent: React.SetStateAction<string>; }; }) => {
    setCurrentCurrency(event.currentTarget.textContent);
  };

  return (
    <div>
      <Head>
        <title>Bitcoin price</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <main className='max-w-4xl mx-auto'>
        <Header currentCurrency={currentCurrency} currencies={currencies} selectCurrency={selectCurrency} />
        <HeroSection
          currentBitcoinPriceData={currentBitcoinPriceData}
          currentBitcoinPriceError={currentBitcoinPriceError}
          currentBitcoinPriceIsLoading={currentBitcoinPriceIsLoading}
          exchangeRatesData={exchangeRatesData}
          exchangeRatesError={exchangeRatesError}
          exchangeRatesIsLoading={exchangeRatesIsLoading}
          currentCurrency={currentCurrency}
        />
        <AboutSection />
      </main>
    </div>
  );
};

export default Home;
