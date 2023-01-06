import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { callNextAnimationFrame } from '../redux/animation'

function useAudioInAnimation(audioSrc) {

    const dispatch = useDispatch()
    const audioRef = useRef()


    useEffect(() => {
        audioRef.current = new Audio('/audios/' + audioSrc + '.wav')
        audioRef.current.play()
        audioRef.current.addEventListener('ended', handleAudioEnding)

        return () => {
            audioRef.current.removeEventListener('ended', handleAudioEnding)
        }
    }, [])

    function handleAudioEnding() {
        dispatch(callNextAnimationFrame())
    }

}

export default useAudioInAnimation