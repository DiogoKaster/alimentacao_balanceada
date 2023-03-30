import React from 'react'
import styles from './../../styles/AboutPage.module.scss'
import Image from 'next/image'

function AboutPage() {
    return (
        <article id={styles['about']}>
            <header>
                <Image
                    src='/imgs/dse.png'
                    alt='Desenvolvimento de Software Educacional'
                    width={500}
                    height={500}
                />

                <h1>Sobre</h1>

                <Image
                    src='/imgs/lesic.png'
                    alt='LESIC'
                    width={500}
                    height={500}
                />
            </header>

            <main>
                <p>Universidade Tecnológica Federal Do Paraná</p>
                <p>Aluno: Antônio Carlos Alves Feitosa</p>
                <p>Professora: Simone Nasser Matos</p>
                <p>E-mail: antoniofeitosa@alunos.utfpr.edu.br</p>
                <p>GitHub: https://github.com/CacaAlves00</p>
            </main>

            <footer>
                <Image
                    src="/imgs/dse.png"
                    alt='Desenvolvimento de Software Educacional'
                    width={500}
                    height={500}
                />
                <Image
                    src="/imgs/lesic.png"
                    alt='LESIC'
                    width={500}
                    height={500}
                />
            </footer>

        </article>
    )
}

export default AboutPage