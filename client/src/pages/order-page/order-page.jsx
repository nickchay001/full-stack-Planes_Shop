import { useNavigate } from "react-router-dom"
import s from "./styles.module.css"
import React from "react"
import { ContentWrapper } from "../../components/content-wrapper"
import { Button } from "../../components/button"


export const OrderPage = () => {
    const navigate = useNavigate()

    return (
        <ContentWrapper className={s.order}>
            <h1>Ваш заказ будет доставлен в ближайшее время</h1>
            <Button
            onClick={() => navigate('/')}
            containerClassName={s.button}
            >
                Назад
            </Button>
        </ContentWrapper>
    )
}