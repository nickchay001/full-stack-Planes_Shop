import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlanes } from '../../store/planes/planesSlice'
import { Spinner } from '../spinner'
import { ContentWrapper } from '../content-wrapper'
import { PlaneItem } from '../plane-item'
import s from './styles.module.css'
import { Link } from 'react-router-dom'
import { paths } from '../../paths'
import { Button } from '../button'
import { useSortPlanes } from '../../hooks/useSortPlanes'

export const Planes = () => {
    const dispatch = useDispatch()
    const { planes, isLoading } = useSelector((state) => state.planes)
    const { isDescSort, setIsDescSort, sortedPlanes } = useSortPlanes(planes || [])

    useEffect(() => {
        dispatch(getPlanes())
    }, [dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div>
            <div className={s.sort}>
                <ContentWrapper className={s.planesHeader}>
                    <Button
                        className={s.sortBtn}
                        onClick={() => setIsDescSort(!isDescSort)}>
                        Сортировать по {`${isDescSort ? "ВОЗРОСТАНИЮ" : "УБЫВАНИЮ"}`}
                    </Button>
                    <Link
                        to={paths.createPlane}
                        className={s.createPlaneBtn}>
                        Добавить самолет
                    </Link>
                </ContentWrapper>
            </div>
            <ContentWrapper className={s.planesGrid}>
                {sortedPlanes && sortedPlanes.map(plane => <PlaneItem key={plane._id} {...plane} />)}
            </ContentWrapper>
        </div>

    )
}
