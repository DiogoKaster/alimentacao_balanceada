import React, { useEffect, useRef, useState } from 'react'

function usePlayAudio() {

    const [audioSrc, setAudioSrc] = useState<string>()

    useEffect(() => {
        const audioRef = new Audio(audioSrc)
        audioRef.play()
    }, [audioSrc])

    return setAudioSrc

}

export default usePlayAudio