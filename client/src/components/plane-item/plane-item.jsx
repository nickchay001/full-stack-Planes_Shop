import React from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../../paths'
import s from './styles.module.css'

export const PlaneItem = ({
  name = '',
  price = 0,
  planeImage = '',
  _id = '',
  capacity = ''
}) => {
  return (
    <Link to={`${paths.plane}/${_id}`} className={s.planeItem}>
      <div className={s.capacity}>{capacity}</div>
      {planeImage && <img className={s.image} src={planeImage} alt='' />}
      <div className={s.info}>
        <h2 className={s.title}>{name}</h2>
        <span className={s.price}>{price}</span>
      </div>
    </Link>
  )
}
