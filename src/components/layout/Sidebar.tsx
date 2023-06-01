import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar-wrapper fixed bg-slate-800 h-screen py-6'>
      <ul className='px-6'>
        <li className='my-6'>
          <NavLink className='text-white text-2xl' to='/'>Contact</NavLink>
        </li>
        <li className='my-6'>
          <NavLink className='text-white text-2xl'  to='/charts-and-maps'>Charts & Maps</NavLink>
        </li>
      </ul>
    </div>
  )
}

