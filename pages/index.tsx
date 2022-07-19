import type { NextPage } from 'next'
import Router from 'next/router';
import { useState } from 'react';
import WelcomePage from '../components/main/authentication/welcomePage';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [token, setToken] = useState("");

  console.log(token);

  return (
    <div className={ styles.container }>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Oxygen&family=Roboto+Condensed&display=swap" rel="stylesheet" />
      <WelcomePage saveTokenHandler={ (token: string) => setToken(token) }/>
    </div>
  )
}

export default Home
