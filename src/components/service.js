import React from 'react'
import { useSelector } from 'react-redux';

const Service = () => {
    const text = useSelector(state => state.text );
  return (
    <div> <p>{text}</p></div>
  )
}

export default Service