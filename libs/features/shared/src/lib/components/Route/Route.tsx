import { Box, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { Segment } from '@bridge-portal/common';

const buildRouteFromSegments = (segments: Segment[]) => {
  if (segments.length === 0) return '';

  const components = [<Typography key="start">{segments[0].from}</Typography>];

  segments.forEach((s, idx) =>
    components.push(
      <EastIcon key={`icon-${idx}`} fontSize="small" />,
      <Typography key={`to-${idx}`}>{s.to}</Typography>
    )
  );

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '5px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {components}
    </Box>
  );
};

export { buildRouteFromSegments };
