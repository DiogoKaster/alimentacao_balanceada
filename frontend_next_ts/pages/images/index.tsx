import React, { useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import useGo2MenuIfNotLoggedInOrIsStudent from '../../hooks/useGo2MenuIfNotLoggedInOrIsStudent'
import { Form } from 'react-bootstrap'
import Link from 'next/link'
import Image from '../../components/Image'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import styles from './../../styles/ImagesPage.module.scss'
import useConfigureFoods from '../../hooks/useConfigureFoods'

type Filter = {
    carbs: boolean
    prots: boolean
    fats: boolean
}

function ImagesPage() {
    useConfigureFoods()

    const carbs = useAppSelector(state => state.foods.carbs)
    const prots = useAppSelector(state => state.foods.prots)
    const fats = useAppSelector(state => state.foods.fats)

    useGo2MenuIfNotLoggedInOrIsStudent()

    const [filter, setFilter] = useState<Filter>({
        carbs: true,
        prots: true,
        fats: true
    })

    function toggleFilter(type: keyof Filter) {
        setFilter((state) => {
            const newState = { ...state }
            newState[type] = !state[type]

            return newState
        })
    }

    function getFoods() {
        let foods: string[] = []
        if (filter.carbs)
            foods = [...carbs]
        if (filter.prots)
            foods = [...foods, ...prots]
        if (filter.fats)
            foods = [...foods, ...fats]

        return Array.from(new Set(foods))
    }

    return (
        <div id={styles['images']}>
            <h1>Imagens</h1>

            <div id={styles['menu']}>

                <div id={styles['checkboxes']}>

                    <Form.Check
                        inline
                        label='Carboidratos'
                        name='carbs'
                        type='checkbox'
                        id='inline-checkbox-1'
                        checked={filter.carbs}
                        onChange={(() => toggleFilter('carbs'))}
                    />
                    <Form.Check
                        inline
                        label='Proteínas'
                        name='prots'
                        type='checkbox'
                        id='inline-checkbox-2'
                        checked={filter.prots}
                        onChange={(() => toggleFilter('prots'))}
                    />
                    <Form.Check
                        inline
                        label='Gorduras'
                        name='fats'
                        type='checkbox'
                        id='inline-checkbox-3'
                        checked={filter.fats}
                        onChange={(() => toggleFilter('fats'))}
                    />
                </div>

                <Link href='/add-images'>
                    <AiOutlinePlusSquare className={styles['icon']}/>
                </Link>
            </div>

            <div id={styles['foods']}>
                {
                    getFoods()
                        .map((food) => (
                            <Image imageSrc={food} key={food} />
                        ))
                }
            </div>

        </div>
    )
}

export default ImagesPage