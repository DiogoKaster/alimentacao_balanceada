import React, { useEffect, useRef, useState } from 'react'
import useSetInterval from '../../../hooks/useSetInterval'
import frame1 from './../../../imgs/pear-frame-1.svg'
import frame2 from './../../../imgs/pear-frame-2.svg'
import frame3 from './../../../imgs/pear-frame-3.svg'
import './styles.scss'

function Narrator() {

    const frameSrcs = [frame1, frame2, frame3]
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
        <img src={frameSrcs[frameIdx]} id='narrator' />
    )
}

export default Narrator