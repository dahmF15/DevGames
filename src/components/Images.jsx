import React from 'react'

export default function Images({src, className}) {
  return (
    <div><img src={src} className={className? className : 'w-full rounded-3xl mt-10'} /></div>
  )
}
