import type { NextPage } from 'next'
import WelcomePage from '../components/main/welcomePage'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={ styles.container }>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Oxygen&family=Roboto+Condensed&display=swap" rel="stylesheet" />
      <WelcomePage />
    </div>
  )
}


export default Home
