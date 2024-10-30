import { Grid2, Stack, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  SelectNetworkWrapper,
  SelectTokenWrapper,
} from '@bridge-portal/bridge';
import {
  setFrom,
  setTo,
  Pair,
  useAppDispatch,
  useAppSelector,
  selectFromPair,
  selectToPair,
  TokenSelector,
} from '@bridge-portal/shared';
import { BridgeDirection, directions } from '@bridge-portal/common';

const SelectPair = () => {
  const dispatch = useAppDispatch();
  const fromPair = useAppSelector(selectFromPair);
  const toPair = useAppSelector(selectToPair);

  const section: Record<BridgeDirection, { title: string; pair: Pair | null }> =
    {
      from: { title: 'From:', pair: fromPair },
      to: { title: 'To:', pair: toPair },
    };

  const handleSelect = (pair: Pair, direction: BridgeDirection) => {
    if (direction === 'from') {
      dispatch(setFrom(pair));
    } else if (direction === 'to') {
      dispatch(setTo(pair));
    }
  };

  return (
    <Stack spacing={'0.2rem'}>
      {directions.map((val: BridgeDirection, index: number) => (
        <TokenSelector key={index}>
          <Typography
            variant="subtitle2"
            sx={{
              color: '#FFFFFF80',
            }}
          >
            {section[val].title}
          </Typography>
          <Grid2 container rowSpacing={2}>
            <Grid2 size={6}>Network:</Grid2>
            <Grid2
              size={6}
              sx={{
                display: 'flex',
                justifyContent: 'end',
              }}
            >
              <SelectNetworkWrapper
                direction={val}
                pair={section[val].pair}
                handleSelect={handleSelect}
              />
            </Grid2>
            <Grid2 size={6}>Token:</Grid2>
            <Grid2
              size={6}
              sx={{
                display: 'flex',
                justifyContent: 'end',
              }}
            >
              <SelectTokenWrapper
                direction={val}
                pair={section[val].pair}
                handleSelect={handleSelect}
              />
            </Grid2>
          </Grid2>
        </TokenSelector>
      ))}
    </Stack>
  );
};

export { SelectPair };
