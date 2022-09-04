import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteImageFromDatabase } from '../../../api/deleteImageFromDatabase'
import './styles.scss'

function Image({ imageSrc }) {

    const [showCloseButton, setShowCloseButton] = useState(false)

    function handleMenuClick() {
        deleteImageFromDatabase(imageSrc)
    }


    function handleClick() {
        setShowCloseButton((state) => !state)
    }

    return (
        <div className='image'>
            {
                showCloseButton &&
                <Link to='/menu'>
                    <div className='menu' onClick={handleMenuClick}>
                        Excluir
                    </div>
                </Link>
            }

            <img className='icon'
                src={imageSrc} alt='food' onClick={handleClick} />

        </div>
    )
}

export default Image