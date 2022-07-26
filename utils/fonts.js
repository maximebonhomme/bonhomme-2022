import { Global, css } from '@emotion/react';
import { fontFace } from 'polished';

const filePath = '/fonts';

export const fontHeading = 'Leitura';
export const fontBody = 'Nitti Grotesk';

const fontOne = 'leitura-news-roman';
const fontTwo = 'nitti-grotesk-normal';

const fonts = [
  {
    fontFamily: fontHeading,
    variants: [
      {
        fontWeight: 400,
        fileFormats: ['woff2'],
        fontFilePath: `${filePath}/${fontOne}`,
        fontStyle: 'normal',
      },
    ],
  },
  {
    fontFamily: fontBody,
    variants: [
      {
        fontWeight: 300,
        fileFormats: ['woff2'],
        fontFilePath: `${filePath}/${fontTwo}`,
        fontStyle: 'normal',
      },
    ],
  },
];

export const Fonts = () => (
  <Global
    styles={css`
      ${fonts.map((font) =>
        font.variants.map((variant) =>
          fontFace({
            fontFamily: font.fontFamily,
            fontWeight: variant.fontWeight,
            fileFormats: variant.fileFormats,
            fontFilePath: variant.fontFilePath,
            fontStyle: variant.fontStyle,
            fontDisplay: 'swap',
          })
        )
      )}
    `}
  />
);
