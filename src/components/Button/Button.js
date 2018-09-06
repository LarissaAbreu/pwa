import React from 'react'
import classnames from 'classnames'

import '../../styles/components/button.styl'

const Button = ({
  black,
  white,
  full,
  large,
  medium,
  text,
  children,
  ...props
}) => {
  const classes = classnames('button', {
    black,
    white,
    full,
    large,
    medium
  })

  return (
    <button className={`${classes}`} {...props}>
      {children}
    </button>
  )
}

export default Button
