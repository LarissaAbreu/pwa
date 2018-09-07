import React from 'react'

const Input = ({
  black,
  white,
  full,
  large,
  medium,
  text,
  onClick,
  onChange,
  value,
  label,
  id,
  ...props
}) => {
  return (
    <div className={`input-group `}>
      <input
        id={id}
        name={id}
        className="input-group__input"
        type="text"
        onClick={onClick}
        onChange={onChange}
        value={value}
        {...props} />

      <label className="input-group__label" htmlFor={id}>{label}</label>
    </div>
  )
}

export default Input
