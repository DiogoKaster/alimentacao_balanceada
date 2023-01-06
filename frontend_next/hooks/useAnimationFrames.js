import React from 'react'
import Frame1 from '../components/Frames/Frame1'
import Frame2 from '../components/Frames/Frame2'
import Frame3 from '../components/Frames/Frame3'
import Frame4 from '../components/Frames/Frame4'
import Frame5 from '../components/Frames/Frame5'
import Frame6 from '../components/Frames/Frame6'
import Frame7 from '../components/Frames/Frame7'
import Frame8 from '../components/Frames/Frame8'
import Frame9 from '../components/Frames/Frame9'
import Frame10 from '../components/Frames/Frame10'
import Frame11 from '../components/Frames/Frame11'
import Frame12 from '../components/Frames/Frame12'
import Frame13 from '../components/Frames/Frame13'
import Frame14 from '../components/Frames/Frame14'
import Frame15 from '../components/Frames/Frame15'

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
            {frames[13]}
        </>
    )
}

export default useAnimationFrames