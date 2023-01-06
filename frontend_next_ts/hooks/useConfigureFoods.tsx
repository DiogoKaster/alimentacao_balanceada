import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import fetchAllImages from '../utils/fetchAllImages';
import { setCarbs, setFats, setProts } from '../redux/foods'

function popRandomElement(arr: []) {
    arr.splice(Math.floor(Math.random() * arr.length), 1);
}

function useConfigureFoods() {
    const dispatch = useDispatch()

    const [errorMsg, setErrorMsg] = useState<string>('')

    useEffect(() => {
        async function fetchData() {
            try {
                const { carbs, prots, fats } = 
                    await fetchAllImages(process.env['REACT_APP_BACKEND_URL'])

                const errorFetchingImages = !carbs || !prots || !fats
                if (errorFetchingImages)
                    setErrorMsg('Erro carregando imagens')
                else if (carbs.length < 6 || prots.length < 6 || fats.length < 4)
                    setErrorMsg('Adicione mais imagens para poder jogar')
                else {

                    while (carbs.length !== 6)
                        popRandomElement(carbs)

                    dispatch(setCarbs(carbs))

                    while (prots.length !== 6)
                        popRandomElement(prots)

                    dispatch(setProts(prots))

                    while (fats.length !== 4)
                        popRandomElement(fats)

                    dispatch(setFats(fats))
                }
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()

    }, [])

    return errorMsg
}

export default useConfigureFoods