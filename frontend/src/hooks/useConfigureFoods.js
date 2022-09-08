import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import fetchAllImages from '../api/fetchAllImages';
import { setCarbs, setFats, setProts } from '../redux/foods'

function popRandomElement(arr) {
    arr.splice(Math.floor(Math.random() * arr.length), 1);
}

function useConfigureFoods() {

    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchData() {
            try {
                const { carbs, prots, fats } = await fetchAllImages()

                while (carbs.length !== 6)
                    popRandomElement(carbs)

                dispatch(setCarbs(carbs))

                while (prots.length !== 6)
                    popRandomElement(prots)

                dispatch(setProts(prots))

                while (fats.length !== 4)
                    popRandomElement(fats)

                dispatch(setFats(fats))
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()

    }, [])

}

export default useConfigureFoods