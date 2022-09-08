import React, { useEffect, useRef, useState } from 'react'
import Draggable from 'react-draggable'
import './styles.scss'
import useForceUpdate from '../../../hooks/useForceUpdate'
import useIsFirstUpdate from '../../../hooks/useIsFirstUpdate'

function DraggableFood({ imgSrc, overlappingObjectBoundingClass, isOverlappingCallback }) {

    const componentRef = useRef()
    const [isOverlapping, setIsOverlapping] = useState(false)
    const forceUpdate = useForceUpdate()
    const isItFirstUpdate = useIsFirstUpdate()

    useEffect(() => {
        function isComponentOverlappingObject() {
            const overlappingObjectBounding = document
                .getElementsByClassName(overlappingObjectBoundingClass)[0]
                .getBoundingClientRect()

            const componentBounding = componentRef.current.getBoundingClientRect()

            return (componentBounding.top >= overlappingObjectBounding.top &&
                componentBounding.bottom <= overlappingObjectBounding.bottom &&
                componentBounding.left >= overlappingObjectBounding.left &&
                componentBounding.right <= overlappingObjectBounding.right)

                ? true : false
        }

        setIsOverlapping(isComponentOverlappingObject())
    })

    useEffect(() => {
        if (!isItFirstUpdate)
            isOverlappingCallback(isOverlapping, imgSrc)
    }, [isOverlapping])

    return (
        <Draggable draggable={true} onStop={forceUpdate}>
            <img src={imgSrc} alt='Comida' className='draggable-food'
                ref={componentRef} />
        </Draggable>
    )
}

export default DraggableFood