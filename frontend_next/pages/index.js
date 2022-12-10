import Head from 'next/head'
import App from '../components/App/App'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Alimentação balanceada</title>
        <meta name="description" content="Alimentação Balanceada: quiz e arraste-e-solte" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Fredoka+One&display=swap"
          rel="stylesheet" />
        <meta charset="utf-8" />
        <link rel="icon" href="/apple.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <App />

    </div>
  )
}
