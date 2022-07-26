import { between, getValueAndUnit } from 'polished';
import { breakpoints } from './breakpoints';

export function clamp(
  fromSize,
  toSize,
  fromBreakpoint = 'xs',
  toBreakpoint = 'xl'
) {
  const defaultUnit = 'px';

  const fromSizeValue = getValueAndUnit(fromSize)[0];
  const toSizeValue = getValueAndUnit(toSize)[0];

  const fromSizePx = `${fromSizeValue}${defaultUnit}`;
  const toSizePx = `${toSizeValue}${defaultUnit}`;

  const fluid = between(
    fromSizePx,
    toSizePx,
    `${breakpoints[fromBreakpoint]}`,
    `${breakpoints[toBreakpoint]}`
  );

  return `clamp(${fromSizePx}, ${fluid}, ${toSizePx})`;
}
