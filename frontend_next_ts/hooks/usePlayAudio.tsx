import React, { useEffect, useState } from 'react'

function usePlayAudio(audioSrc: string) {


    useEffect(() => {
        const audioRef = new Audio(audioSrc)
        audioRef.play()
    }, [audioSrc])

}

export default usePlayAudio