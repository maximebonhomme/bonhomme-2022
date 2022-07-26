import { lighten, darken } from 'polished';

const generateColourPalette = (baseColor) => {
  const lightKeys = [400, 300, 200, 100, 50];
  const darkKeys = [600, 700, 800, 900];
  const indexDivider = 20;

  const light = lightKeys.reduce(
    (acc, key, index) => (
      // eslint-disable-next-line no-sequences
      (acc[key] = lighten((index + 1) / indexDivider, baseColor)), acc
    ),
    {}
  );
  const dark = darkKeys.reduce(
    (acc, key, index) => (
      // eslint-disable-next-line no-sequences
      (acc[key] = darken((index + 1) / indexDivider, baseColor)), acc
    ),
    {}
  );

  return {
    ...light,
    500: baseColor,
    ...dark,
  };
};

export const colors = {
  black: generateColourPalette('#000'),
  white: generateColourPalette('#fff'),
};
