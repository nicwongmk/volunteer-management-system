import type { NextPage } from 'next'
import LoginPage from '../components/main/loginPage'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={ styles.container }>
      <link href="https://fonts.googleapis.com/css2?family=Oxygen&family=Roboto+Condensed&display=swap" rel="stylesheet" />
      <LoginPage />
    </div>
  )
}


export default Home
