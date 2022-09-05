import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import plateImg from '../../../imgs/plate-cropped.svg'
import './styles.scss'

function Plate({ nOfMissingFood, elementClass }) {

    const [foodsOnPlate, setFoodsOnPlate] = useState([])

    const carbs = useSelector((state) => state.foods.carbs)
    const prots = useSelector((state) => state.foods.prots)

    useEffect(() => {
        const randomCarb = carbs[Math.floor(Math.random() * carbs.length)]
        const randomProt = prots[Math.floor(Math.random() * prots.length)]

        if (nOfMissingFood === 1)
            setFoodsOnPlate([randomCarb, randomProt])
        else if (nOfMissingFood === 2)
            setFoodsOnPlate([randomCarb])

    }, [])


    return (
        <>
            <img id='drag-and-drop-plate-img' className={elementClass} src={plateImg} alt='Prato' />

            {
                foodsOnPlate.map((food, idx) => (
                    <img id={`plate-food-${idx + 1}`}
                        src={food} className='plate-foods'
                        alt='Comida' />
                ))
            }

        </>
    )
}

export default Plate