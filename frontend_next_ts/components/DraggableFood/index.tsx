import React, { useEffect, useRef, useState } from 'react'
import Draggable, { DraggableEventHandler } from 'react-draggable'
import styles from './DraggableFood.module.scss'
import useIsFirstUpdate from '../../hooks/useIsFirstUpdate'
import Image from 'next/image'

type DraggableFoodPosition = { x: number, y: number }

type DraggableFoodProps = {
    imgSrc: string,
    overlappingObjectBoundingClass: string,
    isOverlappingCallback: Function,
    top: string
}

function DraggableFood({ imgSrc, overlappingObjectBoundingClass, isOverlappingCallback,
    top }: DraggableFoodProps) {

    const componentRef = useRef<HTMLImageElement>(null)
    const [isOverlapping, setIsOverlapping] = useState<boolean>(false)
    const isItFirstUpdate = useIsFirstUpdate()
    const [position, setPosition] = useState<DraggableFoodPosition>({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState<boolean>(false)

    useEffect(() => {
        function isComponentOverlappingObject() {
            const overlappingObjectBounding = document
                .getElementsByClassName(overlappingObjectBoundingClass)[0]
                .getBoundingClientRect()

            if (!componentRef.current)
                return false

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

    const handleDrag: DraggableEventHandler = (e, ui) => {

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


            <Image
                className={styles['draggable-food']}
                src={imgSrc}
                alt='Comida'
                ref={componentRef}
                style={{ top: top, left: '0px' }}
                width={100}
                height={100}
            />

        </Draggable>
    )
}

export default DraggableFood