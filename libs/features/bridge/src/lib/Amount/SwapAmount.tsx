import { setOrderRequest, useAppDispatch } from '@bridge-portal/shared';
import { Box, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import React, { useState } from 'react';

const SwapAmount = () => {
  const [amount, setAmount] = useState('');
  const dispatch = useAppDispatch();

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = event.target.value;
    setAmount(newAmount);

    dispatch(setOrderRequest({ amount: newAmount }));
  };

  return (
    <Box
      sx={{
        padding: '0rem 0.6rem',
        backgroundColor: '#0E0F0E',
        borderRadius: '1rem',
        mt: '0.2rem',
      }}
    >
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="swap-amount" sx={{ color: '#FFFFFF' }}>
          Amount
        </InputLabel>
        <OutlinedInput
          id="swap-amount"
          label="Amount"
          value={amount}
          sx={{ backgroundColor: '#0E0F0E' }}
          onChange={handleAmountChange}
        />
      </FormControl>
    </Box>
  );
};

export { SwapAmount };
