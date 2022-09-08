import React, { useEffect, useRef, useState } from 'react'
import Draggable from 'react-draggable'
import './styles.scss'
import useForceUpdate from '../../../hooks/useForceUpdate'
import useIsFirstUpdate from '../../../hooks/useIsFirstUpdate'

function DraggableFood({ imgSrc, overlappingObjectBoundingClass, isOverlappingCallback,
    top }) {

    const componentRef = useRef()
    const [isOverlapping, setIsOverlapping] = useState(false)
    const forceUpdate = useForceUpdate()
    const isItFirstUpdate = useIsFirstUpdate()
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)

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
        if (!isItFirstUpdate && !isDragging)
            isOverlappingCallback(isOverlapping, imgSrc, resetFoodPosition)
    }, [isOverlapping, isDragging])

    function resetFoodPosition() {
        setPosition({
            x: 0,
            y: 0,
        })
    }

    function handleDrag(e, ui) {

        setPosition((state) => {
            return {
                x: state.x + ui.deltaX,
                y: state.y + ui.deltaY,
            }
        })
    };

    return (
        <Draggable bounds='parent' position={position} onDrag={handleDrag}
        onStart={() => setIsDragging(true)} 
        onStop={() => setIsDragging(false)}>
            <img src={imgSrc} alt='Comida' className='draggable-food'
                ref={componentRef}
                style={{ top: top, left: '0px' }} />
        </Draggable>
    )
}

export default DraggableFood