import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './Feedback.module.scss'
import { Rating } from 'react-simple-star-rating'

type FeedbackProps = {
    variant: string,
    callback: React.MouseEventHandler<HTMLButtonElement>,
    numStars?: number
}

function Feedback({ variant, callback, numStars=0 }: FeedbackProps) {

    return (
        <article id={styles['feedback']}>
            <h1>
                {variant === 'positive' && 'Muito bem! Você acertou! Vamos continuar! Pressione o botão Próximo'}
                {variant === 'negative' && 'Não foi dessa vez....Tente novamente !'}
                {variant === 'end' && 'Parabéns ! Você terminou essa fase'}
            </h1>

            {
                (numStars > 0 && variant !== 'negative') &&  (
                    <Rating 
                        initialValue={variant === 'end' ? 5 : numStars} 
                        readonly size={80} />
                )
            }

            <Button variant='success' onClick={callback}>
                {variant === 'positive' && 'Próximo'}
                {variant === 'negative' && 'Tente novamente'}
                {variant === 'end' && 'Voltar ao menu'}
            </Button>
        </article>
    )
}

export default Feedback