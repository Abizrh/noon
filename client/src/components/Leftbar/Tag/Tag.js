import React from 'react'
import './Tag.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Tag = ({ tag, active, id }) => {
 
  return (
    <>
     <div className={active ? 'tag activee' : 'tag'}>
        <span >{ tag }</span>
     </div>
    </>
  )
}
