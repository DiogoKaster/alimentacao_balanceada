import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function useGo2MenuIfNotLoggedInOrIsStudent() {
    const gameMode = useSelector((state) => state.game.gameMode)
    const login = useSelector((state) => state.game.loggedIn)
    const router = useRouter()

    useEffect(() => {
        if (gameMode === 'student' || !login) {
            alert(login)
            router.replace('/menu')
        }
    }, [])
}

export default useGo2MenuIfNotLoggedInOrIsStudent