import React from 'react'

interface PageTitle {
  title: string;

}

export default function PageTitle({ title }: PageTitle) {
  return (
    <div className='page-title'>
      <h1 className='text-4xl font-bold'>{title}</h1>
    </div>
  )
}

