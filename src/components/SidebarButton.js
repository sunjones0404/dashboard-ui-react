import React from 'react'

export default function SidebarButton(props) {
  return (
    <button className='toggle-btn' onClick={props.toggleDarkMode}>
      Dark Mode
    </button>
  )
}
