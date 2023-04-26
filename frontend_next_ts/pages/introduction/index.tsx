import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from './../../styles/IntroductionPage.module.scss'
import Image from 'next/image'
import useAnimationFrames from '../../hooks/useAnimationFrames'
import Narrator from '../../components/Narrator'
import { useAppSelector } from '../../redux/hooks'
import useConfigureFoods from '../../hooks/useConfigureFoods'

function IntroductionPage() {

  const animationFrameIdx = useAppSelector(state => state.animation.animationFrameIdx)
  const [displayNarrator, setDisplayNarrator] = useState<boolean>(true)
  const router = useRouter()

  useConfigureFoods()

  useEffect(() => {
    if (animationFrameIdx === 13)
      setDisplayNarrator(false)
    else if (animationFrameIdx === 15)
      router.replace('/menu')
  }, [animationFrameIdx])

  return (
    <article id={styles['introduction']}>
      <header>
        <h1>Introdução</h1>
      </header>

      <main>
        {useAnimationFrames(animationFrameIdx)}
      </main>

      {displayNarrator && <Narrator />}

      <footer>
      </footer>
    </article>
  )
}

export default IntroductionPage