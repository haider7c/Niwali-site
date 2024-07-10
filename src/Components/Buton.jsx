import React from 'react'
import { Link } from 'react-router-dom';

const Buton = ({title, className, to}) => {
  return (
      <Link className={className} to={to}>{title}</Link>
  )
}

export default Buton;
