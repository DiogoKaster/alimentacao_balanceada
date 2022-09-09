import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillTags, AiOutlinePlus } from 'react-icons/ai';
import './styles.scss'
import Image from './Image';
import { Form } from 'react-bootstrap';

function Images() {

    const carbs = useSelector(state => state.foods.carbs)
    const prots = useSelector(state => state.foods.prots)
    const fats = useSelector(state => state.foods.fats)

    const [filter, setFilter] = useState({
        carbs: true,
        prots: true,
        fats: true
    })

    function toggleFilter(type) {
        setFilter((state) => {
            const newState = { ...state }
            newState[type] = !state[type]

            return newState
        })
    }

    function getFoods() {
        let foods = []
        if (filter.carbs)
            foods = [...carbs]
        if (filter.prots)
            foods = [...foods, ...prots]
        if (filter.fats)
            foods = [...foods, ...fats]

        return Array.from(new Set(foods))
    }

    return (
        <div id='images'>
            <h1>Imagens</h1>

            <div id='menu'>

                <div id='checkboxes'>

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

                <Link to='/add-images'>
                    <AiOutlinePlus className='icon' />
                </Link>
            </div>

            <div id='foods'>
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

export default Images