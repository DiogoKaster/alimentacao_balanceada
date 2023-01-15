import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/MenuPage.module.scss'
import { useAppSelector } from '../../redux/hooks'

function MenuPage() {

  const gameMode = useAppSelector(state => state.game.gameMode)

  return (
    <article id={styles.menu}>
      <header>
        <Image
          src='/imgs/cherry.svg'
          alt='Cherry'
          width={500}
          height={500}
          className={`icon ${styles.icon}`}
        />
        <h1>Bem-vindo ao jogo</h1>
      </header>

      <main
        className={styles[ `main-height-${gameMode}`]}>

        <div id={styles.buttons}>
          <Link href='/introduction'><button>Introdução</button></Link>
          {
            gameMode === 'student' ?
              <>
                <Link href='/drag-and-drop'><button>Arraste-e-solte</button></Link>
                <Link href='/quiz'><button>Quiz</button></Link>
              </> :
              <>
                <Link href='/images'><button>Imagens</button></Link>
              </>
          }
          <Link href='/about'><button>Sobre</button></Link>
        </div>

        <Image
          src='/imgs/apple.svg'
          alt='Apple'
          width={500}
          height={500}
          className={`icon ${styles.icon}`}
        />


      </main>

      <footer>
        <Image
          src='/imgs/banana.svg'
          alt='Banana'
          width={500}
          height={500}
          className={`icon ${styles.icon}`}
        />
      </footer>
    </article>
  )
}

export default MenuPage