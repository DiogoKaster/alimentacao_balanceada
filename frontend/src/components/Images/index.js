import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai';
import { deleteImageFromDatabase } from '../../api/deleteImageFromDatabase'
import './styles.scss'
import Image from './Image';

function Images() {

    const carbs = useSelector(state => state.foods.carbs)
    const prots = useSelector(state => state.foods.prots)
    const fats = useSelector(state => state.foods.fats)

    const navigate = useNavigate()

    return (
        <div id='images'>
            <h1>Imagens</h1>

            <Link to='/add-images'>
                <AiOutlinePlus className='icon' />
            </Link>

            <div id='foods'>
                {
                    [...carbs, ...prots, ...fats].map((food) => (
                        <Image imageSrc={food} key={food} />
                    ))
                }
            </div>

        </div>
    )
}

export default Images