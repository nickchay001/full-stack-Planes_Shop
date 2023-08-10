import React, { useCallback, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import s from "./styles.module.css"
import { ContentWrapper } from "../../components/content-wrapper"
import { Button } from "../../components/button"
import { useNavigate } from "react-router-dom"
import { Input } from "../../components/input"
import { createPlane } from "../../store/planes/planesSlice"
import {paths} from '../../paths'

export const CreatePlanePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { errors } = useSelector(state => state.plane)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [capacity, setCapacity] = useState('')
    const [planeImage, setPlaneImage] = useState(null)

    const handleCreatePlane = useCallback(() => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('description', description)
        formData.append('capacity', capacity)
        formData.append('planeImage', planeImage)

        dispatch(createPlane(formData)).then(res=>{
            if(!res.error) {
                navigate(`${paths.plane}/${res.payload._id}`, {replace:true})
            }
        })

    },[name, price, description, capacity, planeImage,dispatch,navigate]) 
    return (
        <ContentWrapper className={s.createPlane}>
            <Button
                onClick={() => navigate(-1)}
                isBackButton={true}
                containerClassName={s.backButtonContainer}
            >Назад</Button>
            <form className={s.form}>
                <h1 className={s.title}>Создать самолет</h1>
                <Input
                    name='name'
                    placeholder="Название"
                    error={errors && errors.name && errors.name.message}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    name='price'
                    placeholder="Цена"
                    error={errors && errors.price && errors.price.message}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <Input
                    name='description'
                    placeholder="Описание"
                    error={errors && errors.description && errors.description.message}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Input
                    name='capacity'
                    placeholder="Вместимость"
                    error={errors && errors.capacity && errors.capacity.message}
                    onChange={(e) => setCapacity(e.target.value)}
                />
                <Input
                    name='planeImage'
                    type='file'
                    placeholder="Фото"
                    error={errors && errors.planeImage && errors.planeImage.message}
                    onChange={(e) => setPlaneImage(e.target.files[0])}
                />
                <Button
                    containerClassName={s.buttonContainer}
                    onClick={handleCreatePlane}
                >
                    Создать
                </Button>
            </form>
        </ContentWrapper>
    )
}