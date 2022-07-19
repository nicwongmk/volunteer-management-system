import type { NextPage } from 'next'
import { useState } from 'react';
import WelcomePage from '../components/main/welcomePage'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className={ styles.container }>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Oxygen&family=Roboto+Condensed&display=swap" rel="stylesheet" />
      <WelcomePage loginHandler={ (login: boolean) => setLogin(login) }/>
    </div>
  )
}

export default Home
