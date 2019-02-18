import React from 'react'

export const Loader = ({ text, ...props }) => {
  return (
    <div className="loader" {...props}>
      <i className="loader__icon icon--loading" />
      <p className="loader__description">{text}</p>
    </div>
  )
}
