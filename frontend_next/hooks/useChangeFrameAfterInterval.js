import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { callNextAnimationFrame } from '../redux/animation'

function useChangeFrameAfterInterval(seconds) {

    const dispatch = useDispatch()

    useEffect(() => {
        const timeOut = setTimeout(() => {
            dispatch(callNextAnimationFrame())
        }, seconds * 1000)

        return () => {
            clearTimeout(timeOut)
        }
    }, [])
}

export default useChangeFrameAfterInterval