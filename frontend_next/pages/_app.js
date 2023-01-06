import '../styles/globals.scss'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import game from './../redux/game'
import foods from './../redux/foods'
import animation from './../redux/animation'
import answer from './../redux/answer'
import Head from 'next/head'

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
      <Head>
        <title>Alimentação balanceada</title>
        <meta name="description" content="Alimentação Balanceada: quiz e arraste-e-solte" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Fredoka+One&display=swap"
          rel="stylesheet" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/apple.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className='app'>
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp