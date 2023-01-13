import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './Feedback.module.scss'

type FeedbackProps = {
    variant: string,
    callback: React.MouseEventHandler<HTMLButtonElement>
}

function Feedback({ variant, callback }: FeedbackProps) {

    return (
        <article id={styles['feedback']}>
            <h1>
                {variant === 'positive' && 'Muito bem! Você acertou! Vamos continuar! Pressione o botão Próximo'}
                {variant === 'negative' && 'Não foi dessa vez....Tente novamente !'}
                {variant === 'end' && 'Parabéns ! Você terminou essa fase'}
            </h1>

            <Button variant='success' onClick={callback}>
                {variant === 'positive' && 'Próximo'}
                {variant === 'negative' && 'Tente novamente'}
                {variant === 'end' && 'Voltar ao menu'}
            </Button>
        </article>
    )
}

export default Feedback