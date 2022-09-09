import React from 'react'
import { Button } from 'react-bootstrap'
import './styles.scss'

function Error({ msg }) {

    return (
        <article id='error'>
            <h1>
                {msg}
            </h1>
        </article>
    )
}

export default Error