import React, { useEffect, useState } from 'react'

function usePlayAudio() {

  const [audioSrc, setAudioSrc] = useState<string>('')
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioSrc) {
      if (audioRef) {
        audioRef.pause()
        audioRef.currentTime = 0
      }

      const newAudio = new Audio(audioSrc)
      newAudio.play()
      setAudioRef(newAudio) 
    }

    return () => {
      if (audioRef) {
        audioRef.pause()
      }
    }
  }, [audioSrc])

  return setAudioSrc
}

export default usePlayAudio
