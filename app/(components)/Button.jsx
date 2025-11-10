import React from 'react'

const Button = ({className,children}) => {
  return (
    <>
      <button className={`${className} shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-linear-to-r from-[#F0B71F] to-[#E03609]`}>{children}</button>
    </>
  )
}

export default Button
