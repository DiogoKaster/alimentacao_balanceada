import React, { useEffect, useState } from 'react'
import styles from './Image.module.scss'
import deleteImageFromDatabase from '../../utils/deleteImageFromDatabase'
import Link from 'next/link'
import ImageNext from 'next/image'
import { useRouter } from 'next/router'

type ImageProps = {
    imageSrc: string
}

function Image({ imageSrc }: ImageProps) {

    const [showCloseButton, setShowCloseButton] = useState<boolean>(false)

    const router = useRouter()

    async function handleMenuClick() {
        await deleteImageFromDatabase(imageSrc)
        router.replace('/menu')
    }


    function handleClick() {
        setShowCloseButton((state) => !state)
    }

    return (
        <div className={styles['image']}>
            {
                showCloseButton &&
                <div className={styles['menu']} onClick={handleMenuClick}>
                    Excluir
                </div>
            }

            <ImageNext
                className={styles['icon']}
                src={imageSrc}
                alt='Comida'
                onClick={handleClick}
                width={500}
                height={500}
            />

        </div>
    )
}

export default Image