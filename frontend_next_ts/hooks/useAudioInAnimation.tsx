import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { callNextAnimationFrame } from '../redux/states/animation'

function useAudioInAnimation(audioSrc: string): void {

    const dispatch = useDispatch()
    const audioRef = useRef<HTMLAudioElement>()


    useEffect(() => {
        audioRef.current = new Audio('/audios/' + audioSrc + '.wav')
        audioRef.current.play()
        audioRef.current.addEventListener('ended', handleAudioEnding)

        return () => {
            if (audioRef.current)
                audioRef.current.removeEventListener('ended', handleAudioEnding)
        }
    }, [])

    function handleAudioEnding() {
        dispatch(callNextAnimationFrame())
    }

}

export default useAudioInAnimation