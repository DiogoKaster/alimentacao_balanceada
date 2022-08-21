import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCarbs, setFats, setProts } from '../redux/foods'
import appleIcon from '../imgs/carbs/apple.svg'
import bananaIcon from '../imgs/carbs/banana.svg'
import breadIcon from '../imgs/carbs/bread.svg'
import cornIcon from '../imgs/carbs/corn.svg'
import potatoIcon from '../imgs/carbs/potato.svg'
import riceIcon from '../imgs/carbs/rice.svg'
import cheeseIcon from '../imgs/fats/cheese.svg'
import meatIcon from '../imgs/prots/meat.svg'
import milkIcon from '../imgs/prots/milk.svg'
import peanutIcon from '../imgs/prots/peanut.svg'
import peasIcon from '../imgs/prots/peas.svg'
import avocadoIcon from '../imgs/fats/avocado.svg'
import chocolateIcon from '../imgs/fats/chocolate.svg'
import eggIcon from '../imgs/fats/egg.svg'

const carbs = [
    appleIcon, bananaIcon, breadIcon,
    cornIcon, potatoIcon, riceIcon
]

const prots = [
    peasIcon, peanutIcon, milkIcon, 
    cheeseIcon, meatIcon, eggIcon
]

const fats = [
    avocadoIcon, cheeseIcon, chocolateIcon,
    eggIcon
]

function popRandomElement(arr) {
    arr.splice(Math.floor(Math.random() * arr.length), 1);
}

function useConfigureFoods() {

    const dispatch = useDispatch()

    useEffect(() => {
        while (carbs.length !== 6)
            popRandomElement(carbs)

        dispatch(setCarbs(carbs))

        while (prots.length !== 6)
            popRandomElement(prots)

        dispatch(setProts(prots))

        while (fats.length !== 4)
            popRandomElement(fats)

        dispatch(setFats(fats))
    }, [])

}

export default useConfigureFoods