import { useRef } from 'react'

function usePlayAudio() {
  const currentAudioRef = useRef<HTMLAudioElement | null>(null)

  const playAudio = (src: string) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause()
      currentAudioRef.current.currentTime = 0
    }

    const newAudio = new Audio(src)
    currentAudioRef.current = newAudio
    newAudio.play()
  }

  const stopAudio = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause()
      currentAudioRef.current.currentTime = 0
    }
  }

  return { playAudio, stopAudio }
}

export default usePlayAudio
