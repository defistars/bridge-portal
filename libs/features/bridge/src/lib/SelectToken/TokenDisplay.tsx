import { TokenType, tokenIconsMap } from '@bridge-portal/common';

const TokenDisplay: React.FC<{ token: TokenType | undefined }> = ({
  token,
}) => {
  if (!token) return;

  return (
    <>
      <span className="mr1">{tokenIconsMap[token]}</span>
      {token}
    </>
  );
};

export { TokenDisplay };
