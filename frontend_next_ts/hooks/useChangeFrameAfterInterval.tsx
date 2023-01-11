import React, { useEffect } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { callNextAnimationFrame } from '../redux/states/animation'

function useChangeFrameAfterInterval(seconds: number) {

    const dispatch = useAppDispatch()

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