import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function useGo2MenuIfNotLoggedInOrIsStudent() {
    const gameMode = useSelector((state) => state.game.gameMode)
    const login = useSelector((state) => state.game.loggedIn)
    const navigate = useNavigate()

    useEffect(() => {
        if (gameMode === 'student' || !login) {
            alert(login)
            navigate('/menu')
        }
    }, [])
}

export default useGo2MenuIfNotLoggedInOrIsStudent