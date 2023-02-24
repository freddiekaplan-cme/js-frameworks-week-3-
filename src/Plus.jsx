import React from 'react'
import parse from 'html-react-parser'

const plusCloud = () => {
  const cloud = `<div className='plus-container'>
  <div>
    <img className='plus missing-plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
  </div>
  <div>
    <img className='plus  missing-plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
  </div>
  <div>
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
  </div>
  <div>
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus  missing-plus' src={plus} /> 
    <img className='plus  missing-plus' src={plus} /> 
  </div>
  <div>
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus  missing-plus' src={plus} /> 
    <img className='plus  missing-plus' src={plus} /> 
  </div>
  <div>
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus' src={plus} /> 
    <img className='plus  missing-plus' src={plus} /> 
    <img className='plus  missing-plus' src={plus} /> 
  </div>
  </div>`

  return (
    <div>{parse(cloud)}</div>
  )
}

export default plusCloud