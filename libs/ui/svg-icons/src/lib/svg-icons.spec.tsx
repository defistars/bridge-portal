import { render } from '@testing-library/react';

import SvgIcons from './svg-icons';

describe('SvgIcons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SvgIcons />);
    expect(baseElement).toBeTruthy();
  });
});
