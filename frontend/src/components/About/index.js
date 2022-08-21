import React from 'react'
import dseImg from '../../imgs/dse.png'
import lesicImg from '../../imgs/lesic.png'
import './styles.scss'

function About() {

    return (
        <article id="about">
            <header>
                <img src={dseImg} alt='Desenvolvimento de Software Educacional' />
                <h1>Sobre</h1>
                <img src={lesicImg} alt='LESIC' />
            </header>

            <main>
                <p>Universidade Tecnológica Federal Do Paraná</p>
                <p>Aluno: Antônio Carlos Alves Feitosa</p>
                <p>Professora: Simone Nasser Matos</p>
                <p>E-mail: antoniofeitosa@alunos.utfpr.edu.br</p>
                <p>GitHub: https://github.com/CacaAlves00</p>
            </main>

        </article>
    )
}

export default About