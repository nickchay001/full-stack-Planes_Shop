import React from 'react'
import s from './styles.module.css'

export const ContentWrapper = ({ children, className = '' }) => {
    return (
        <div className={`${s.contentWrapper} ${className}`}>{children}</div>
    )
}
