import { useRef } from 'react'

function usePlayAudio() {
  const currentAudioRef = useRef<HTMLAudioElement | null>(null)

  const playAudio = (src: string) => {
    // Stop the current audio if it's playing
    if (currentAudioRef.current) {
      currentAudioRef.current.pause()
      currentAudioRef.current.currentTime = 0
    }

    // Create a new Audio object and play the new audio
    const newAudio = new Audio(src)
    currentAudioRef.current = newAudio
    newAudio.play()
  }

  const stopAudio = () => {
    // Stop the current audio if it's playing
    if (currentAudioRef.current) {
      currentAudioRef.current.pause()
      currentAudioRef.current.currentTime = 0
    }
  }

  return { playAudio, stopAudio }
}

export default usePlayAudio
