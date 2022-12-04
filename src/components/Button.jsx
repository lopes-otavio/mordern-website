import React from 'react'

const Button = ({ styles }) => (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-popping fint-medium font-[18px] text-primary outline-none rounded-[10px] hover:text-white ${styles}`}>
      Get Started
    </button>
  )

export default Button