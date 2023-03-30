import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import styles from './Feedback.module.scss'
import { Rating } from 'react-simple-star-rating'
import usePlayAudio from '../../hooks/usePlayAudio'
import useWindowSize from '../../hooks/useWindowSize'

type FeedbackProps = {
    variant: 'positive' | 'negative' | 'end',
    callback: React.MouseEventHandler<HTMLButtonElement>,
    numStars?: number
}

function Feedback({ variant, callback, numStars = 0 }: FeedbackProps) {

    const setCurAudioBeingPlayed = usePlayAudio()
    const [starSize, setStarSize] = useState<40 | 80>(80)

    useEffect(() => {
        setCurAudioBeingPlayed(state => (
            `/audios/${variant}-feedback.aac`
        )
        )
    }, [])

    const windowSize = useWindowSize()

    useLayoutEffect(() => {
        function getStarsSize() {
            const defaultSize = 80
    
            if (typeof windowSize === 'undefined')
                return defaultSize
    
            if (windowSize.orientation === 'portrait')
                return 40

            return defaultSize
        }

        setStarSize(getStarsSize())
    }, [windowSize])

    function getStarsSize() {
        const defaultSize = 80

        if (typeof windowSize === 'undefined')
            return defaultSize

        if (windowSize.orientation === 'portrait')
            return 40
    }

    return (
        <article id={styles['feedback']}>
            <h1>
                {variant === 'positive' && 'Muito bem! Você acertou! Vamos continuar! Pressione o botão Próximo'}
                {variant === 'negative' && 'Não foi dessa vez....Tente novamente !'}
                {variant === 'end' && 'Parabéns ! Você terminou essa fase'}
            </h1>

            {
                (numStars > 0 && variant !== 'negative') && (
                    <Rating
                        initialValue={variant === 'end' ? 5 : numStars}
                        readonly size={starSize}
                    />
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