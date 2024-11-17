import { Button, ButtonProps } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { ReactNode } from 'react';

type BtnProps = ButtonProps & { children: ReactNode };

const BridgeBtn = ({ children, ...props }: BtnProps) => {
  return (
    <Button
      variant="outlined"
      sx={{
        marginTop: '1.5rem',
        padding: '0.5rem 2rem',
        gap: '4px',
      }}
      {...props}
    >
      {children}
      <ArrowOutwardIcon
        sx={{
          position: 'relative',
          top: '-1px',
        }}
      />
    </Button>
  );
};

export { BridgeBtn };
