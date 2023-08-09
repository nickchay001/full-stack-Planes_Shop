import React, { useEffect } from 'react'
import s from './styles.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPlane } from '../../store/plane/planeSlice'
import { Spinner } from '../../components/spinner'
import { ContentWrapper } from '../../components/content-wrapper'
import { Button } from '../../components/button'

export const PlanePage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
    const { plane, isLoading } = useSelector(state => state.plane)

    useEffect(() => {
        dispatch(getPlane(id))
    }, [dispatch, id])

    if (isLoading) return <Spinner />

    return plane && (
        <ContentWrapper className={s.plane}>
            <div className={s.descContent}>
                <Button
                    onClick={() => navigate(-1)}
                    isBackButton={true}
                >Назад</Button>
                <h1 className={s.title}>{plane.name}</h1>
                <div className={s.price}>{plane.price}</div>
                <Button
                    containerClassName={s.buyBtnContainer}
                    onClick={() => navigate('/order')}
                >
                    Оформить заказ
                </Button>
                <p className={s.desc}>{plane.description}</p>
            </div>
            <div className={s.imageContent}>
                <img className={s.image} src={plane.planeImage} alt="" />
            </div>
        </ContentWrapper>
    )
}