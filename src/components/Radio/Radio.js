import React from 'react'

const Radio = ({
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
  name,
  ...props
}) => {
  return (
    <div className={`radio-group`}>
      <input
        id={id}
        name={name}
        className="radio-group__radio"
        type="radio"
        onChange={onChange}
        {...props} />

      <label className="radio-group__label" htmlFor={id}>
        {label}

        <i className="radio-group__label__icon icon--check"></i>
      </label>
    </div>
  )
}

export default Radio
