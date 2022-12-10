import '../styles/globals.scss'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import game from './../redux/game'
import foods from './../redux/foods'
import animation from './../redux/animation'
import answer from './../redux/answer'

const store = configureStore({
  reducer: {
    'game': game,
    'foods': foods,
    'animation': animation,
    'answer': answer,

  }
})

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp