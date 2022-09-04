import React, { useEffect, useRef } from 'react'

function usePlayAudio (audioSrc) {

    const audioRef = useRef(new Audio(audioSrc))

    useEffect(() => {
        audioRef.current.play()
    }, [audioSrc])

}

export default usePlayAudio