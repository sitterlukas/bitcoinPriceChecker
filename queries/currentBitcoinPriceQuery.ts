import { useQuery } from '@tanstack/react-query';

const getCurrentBitcoinPrice = async () => {
  const { data } = await (
    await fetch('https://api.coincap.io/v2/assets/bitcoin')).json();
  return data;
};

export default function useCurrentBitcoinPrice() {
  return useQuery(
    ['bitcoinPrice'],
    () => getCurrentBitcoinPrice(),
    {
      refetchInterval: 10000,
    },
  );
}
