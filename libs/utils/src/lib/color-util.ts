export const getButtonTagColor = (tag: string) => {
  switch (tag) {
    case 'Best Price':
      return '#1FFF26';
    case 'Best Time':
      return '#1FFFFF';
    default:
      return '#FFFFFF';
  }
};
