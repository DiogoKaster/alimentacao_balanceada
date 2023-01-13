import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAppSelector } from '../redux/hooks'

function useGo2MenuIfNotLoggedInOrIsStudent() {
    const gameMode = useAppSelector((state) => state.game.gameMode)
    const login = useAppSelector((state) => state.game.loggedIn)
    const router = useRouter()

    useEffect(() => {
        if (gameMode === 'student' || !login) {
            router.replace('/menu')
        }
    }, [])
}

export default useGo2MenuIfNotLoggedInOrIsStudent