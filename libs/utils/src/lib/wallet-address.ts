export const shortenAddress = (address: string) => {
  if (!address) return '';
  return `${address.slice(0, 3)}...${address.slice(-4)}`;
};
