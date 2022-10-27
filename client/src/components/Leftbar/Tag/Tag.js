import React from 'react'
import './Tag.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchFilter } from '../../../store/actions/action-movie'

export const Tag = ({ tag, active, id }) => {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movie)
  const navigate = useNavigate()

  const handleFilter = () => {
    console.log('masuk', tag, id)
    dispatch(fetchFilter(id))
     .finally(() => navigate('search'))
  }

  // console.log(movies.filter, '<=====')
  return (
    <>
     <div className={active ? 'tag activee' : 'tag'}>
        <span onClick={() => handleFilter()} >{ tag }</span>
     </div>
    </>
  )
}
