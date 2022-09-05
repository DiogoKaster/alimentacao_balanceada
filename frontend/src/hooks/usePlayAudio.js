import React, { useEffect, useRef } from 'react'

function usePlayAudio(audioSrc) {

    const audioRef = useRef()

    useEffect(() => {
        audioRef.current = new Audio(audioSrc)
        audioRef.current.play()
    }, [audioSrc])

}

export default usePlayAudio