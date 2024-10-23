import { NetworkType, networkIconsMap } from '@bridge-portal/common';

const NetworkDisplay: React.FC<{ network: NetworkType | undefined }> = ({
  network,
}) => {
  if (!network) return;

  return (
    <>
      <span className="mr1">{networkIconsMap[network]}</span>
      {network}
    </>
  );
};

export { NetworkDisplay };
