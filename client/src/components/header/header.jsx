import React from 'react'
import s from './styles.module.css'
import WaweImage from './wave.svg'
import { ContentWrapper } from '../content-wrapper'

export const Header = () => {
  return (
    <div className={s.header}>
      <ContentWrapper className={s.content}>
        <h1 className={s.title}>{`Путеществие с \n Комфортом`}</h1>
        <p className={s.desc}>{`С нашей компанией вы забудете обо всемб крому \n высокого уровня путешествий`}</p>
      </ContentWrapper> 
      <img src={WaweImage} alt="" className={s.wave} />
    </div>
  )
}
