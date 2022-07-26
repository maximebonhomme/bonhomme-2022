import { clamp } from './clamp';

export const space = {
  'fluid-xs': clamp(12, 16),
  'fluid-sm': clamp(16, 28),
  'fluid-md': clamp(16, 40),
  'fluid-lg': clamp(24, 64),
  'fluid-xl': clamp(32, 96),
};
