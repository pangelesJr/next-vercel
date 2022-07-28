import React from 'react'
import Head from '../../node_modules/next/head';
import { NavBar } from '../NavBar'
import styles from './MainLayout.module.css'

type Props = {
  children?: React.ReactNode
};

export const MainLayout: React.FC<Props> = ({children}) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home Pablo</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <NavBar/>
    
          <main className={styles.main}>
            { children }
          </main>
        </div>
      )
}
