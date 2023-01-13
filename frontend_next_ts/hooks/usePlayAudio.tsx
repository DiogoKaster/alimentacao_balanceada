import React, { useEffect, useState } from 'react'

function usePlayAudio() {


    const [audioSrc, setAudioSrc] = useState<string>('')

    useEffect(() => {
        if (audioSrc) {
            const audioRef = new Audio(audioSrc)
            audioRef.play()
        }
    }, [audioSrc])

    return setAudioSrc

}

export default usePlayAudio