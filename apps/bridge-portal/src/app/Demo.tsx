import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './hook';

const Demo = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState('0');
  const amountNumber = Number(amount) || 0;

  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(amountNumber))}>
        Add amount
      </button>
      <br />
      <button onClick={() => dispatch(incrementAsync(amountNumber))}>
        Add async
      </button>
    </>
  );
};

export default Demo;
