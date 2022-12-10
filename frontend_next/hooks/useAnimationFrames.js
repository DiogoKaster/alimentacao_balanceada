import React from 'react'
import Frame1 from '../components/Introduction/Frame1'
import Frame2 from '../components/Introduction/Frame2'
import Frame3 from '../components/Introduction/Frame3'
import Frame4 from '../components/Introduction/Frame4'
import Frame5 from '../components/Introduction/Frame5'
import Frame6 from '../components/Introduction/Frame6'
import Frame7 from '../components/Introduction/Frame7'
import Frame8 from '../components/Introduction/Frame8'
import Frame9 from '../components/Introduction/Frame9'
import Frame10 from '../components/Introduction/Frame10'
import Frame11 from '../components/Introduction/Frame11'
import Frame12 from '../components/Introduction/Frame12'
import Frame13 from '../components/Introduction/Frame13'
import Frame14 from '../components/Introduction/Frame14'
import Frame15 from '../components/Introduction/Frame15'

function useAnimationFrames(animationFrameIdx) {

    const frames = [
        <Frame1 />, <Frame2 />, <Frame3 />, 
        <Frame4 />, <Frame5 />, <Frame6 />, 
        <Frame7 />, <Frame8 />, <Frame9 />, 
        <Frame10 />, <Frame11 />, <Frame12 />, 
        <Frame13 />, <Frame14 />, <Frame15 />,
    ]

    return (
        <>
            {frames[animationFrameIdx]}
        </>
    )
}

export default useAnimationFrames