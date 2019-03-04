import * as React from 'react'

import { theme, Colors } from '../theme'

type Props = {
  width: number
  height: number
  color: Colors
  onClick?
}

export const Icon: React.SFC<Props> = ({
  width,
  height,
  color,
  onClick,
  children
}) => (
  <svg
    width={width}
    height={height}
    onClick={onClick}
    fill={theme.colors[color]}
    viewBox="0 0 1024 1024"
  >
    {children}
  </svg>
)
