import React from 'react'

interface Props {
  text: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({text, onClick}: Props) {
  return (
    <div className='btn-wrapper'>
      <button onClick={onClick} className='rounded-full px-6 py-6 bg-cyan-400 my-5 text-xl text-white'>{text}</button>
    </div>
  )
}

