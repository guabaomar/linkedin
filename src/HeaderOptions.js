import React from 'react'
import "./HeaderOptions.css"


function HeaderOptions({icon, title}) {
  return (
    <div className='HeaderOptions'>
      <img src={icon} />
      <h3 className='HeaderOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions
