import React, { useEffect, useRef, useState } from 'react'
import fetchAllImages from '../utils/fetchAllImages';
import { setCarbs, setFats, setProts } from '../redux/states/foods'
import { useAppDispatch, useAppSelector } from '../redux/hooks';

function popRandomElement(arr: []) {
    arr.splice(Math.floor(Math.random() * arr.length), 1);
}

function useConfigureFoods() {
    const dispatch = useAppDispatch()

    const [isThereAnError, setIsThereAnError] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState<string>('')
    const foods = useAppSelector(state => state.foods)

    useEffect(() => {
        async function fetchData() {
            try {
                const foods = await fetchAllImages()

                if (!foods) {
                    throw new Error('Error fetching images from database')
                }

                const { carbs, prots, fats } = foods

                const errorFetchingImages = !carbs || !prots || !fats

                if (errorFetchingImages)
                    throw new Error('Error fetching images from database')
                else if (carbs.length < 6 || prots.length < 6 || fats.length < 4)
                    throw new Error('Add more images to play')
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
            } catch (err: any) {
                setErrorMsg(err.message)
                setIsThereAnError(true)
                console.log(err)
            }
        }

        const areFoodsUndefined =
            foods.carbs.length === 0 ||
            foods.fats.length === 0 ||
            foods.prots.length === 0

        if (areFoodsUndefined)
            fetchData()

    }, [isThereAnError, errorMsg])

    return errorMsg
}

export default useConfigureFoods