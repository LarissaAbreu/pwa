import React from 'react'

const Checkbox = ({
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
    <div className={`checkbox-group`}>
      <input
        id={id}
        name={id}
        className="checkbox-group__checkbox"
        type="checkbox"
        onChange={onChange}
        {...props} />

      <label className="checkbox-group__label" htmlFor={id}>
        {label}

        <i className="checkbox-group__label__icon icon--check"></i>
      </label>
    </div>
  )
}

export default Checkbox
