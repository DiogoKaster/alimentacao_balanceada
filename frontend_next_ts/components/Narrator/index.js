import React, { useEffect, useRef, useState } from 'react'
import useSetInterval from '../../hooks/useSetInterval'
import styles from './Narrator.module.scss'
import Image from 'next/image'

function Narrator() {

    const frameSrcs = [
        '/imgs/pear-frame-1.svg',
        '/imgs/pear-frame-2.svg',
        '/imgs/pear-frame-3.svg'
    ]
    const [frameIdx, setFrameIdx] = useState(0)

    const changeAnimationFrame = () => {
        switch (frameIdx) {
            case 0:
                setFrameIdx(1)
                break
            case 1:
                setFrameIdx(2)
                break
            case 2:
                setFrameIdx(1)
                break
            default:
        }

    }

    useSetInterval(changeAnimationFrame, 350, [])

    return (
        <Image
            id={styles['narrator']}
            src={frameSrcs[frameIdx]}
            alt='Banana'
            width={500}
            height={500}
        />
    )
}

export default Narrator