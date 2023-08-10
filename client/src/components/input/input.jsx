import React from "react";
import s from "./styles.module.css"

export const Input = ({
    type = 'text',
    name = '',
    containerClassName = '',
    placeholder = '',
    onChange = () => null,
    error = ''
}) => {
    return (
        <div className={`${s.container}${containerClassName}`}>
            <input
                type={type}
                name={name}
                className={s.input}
                placeholder={placeholder}
                onChange={onChange }
            />
            {error && <span className={s.error}>{error}</span>}
        </div>
    )
}