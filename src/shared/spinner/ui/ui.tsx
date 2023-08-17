import * as React from 'react';

import { cssValue } from '../helpers/unitConverter';
import { LoaderSizeProps } from '../helpers/props';
import { createAnimation } from '../helpers/animation';

const clip = createAnimation(
  'ClipLoader',
  '0% {transform: rotate(0deg) scale(1)} 100% {transform: rotate(360deg) scale(1)}',
  'clip',
);
/*
 * Показывайте спиннер, если после вызова команды прошло больше 300 мс
 * Если вы показали спиннер, держите его на экране минимум 1 секунду,
 * за это время анимация сделает полный цикл.
 */
function ClipLoader({
  loading = true,
  color = '#fff',
  speedMultiplier = 1,
  cssOverride = {},
  size = 20,
  ...additionalprops
}: LoaderSizeProps): JSX.Element | null {
  const style: React.CSSProperties = {
    background: 'transparent !important',
    width: cssValue(size),
    height: cssValue(size),
    borderRadius: '100%',
    border: '2px solid',
    borderTopColor: color,
    borderBottomColor: 'transparent',
    borderLeftColor: color,
    borderRightColor: color,
    display: 'inline-block',
    animation: `${clip} ${0.75 / speedMultiplier}s 0s infinite linear`,
    animationFillMode: 'both',
    ...cssOverride,
  };

  if (!loading) {
    return null;
  }

  return <span style={style} {...additionalprops} />;
}

export default ClipLoader;
