import React from 'react'
import './Tag.css'

export const Tag = ({ tag, active }) => {

  const handleFilter = () => {
    console.log('masuk', tag)
  }
  return (
    <>
     <div className={active ? 'tag activee' : 'tag'}>
        <span onClick={() => handleFilter()} >{ tag }</span>
     </div>
    </>
  )
}
