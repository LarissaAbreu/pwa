import React from 'react'

const Upload = ({
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
    <div className={`upload-group `}>
      <input
        id={id}
        name={id}
        className="upload-group__input"
        multiple
        type="file"
        accept="image/png, image/jpeg"
        onClick={onClick}
        onChange={onChange}
        value={value}
        {...props} />

      <label className="upload-group__label" htmlFor={id}>{label}</label>
    </div>
  )
}

export default Upload
