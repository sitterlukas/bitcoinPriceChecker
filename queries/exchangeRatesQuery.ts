import { useQuery } from '@tanstack/react-query';

const getExchangeRates = async () => {
  const { conversion_rates } = await (
    await fetch('https://v6.exchangerate-api.com/v6/71731ac65fc8d54f213582c3/latest/USD')).json();
  return conversion_rates;
};

export default function useExchangeRates() {
  return useQuery(
    ['exchangeRates'],
    () => getExchangeRates(),
  );
}
