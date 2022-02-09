import React, { useEffect } from 'react';
import styles from './Home.module.css'

function Home() {
  useEffect(() => {
    document.title = "Papel"
  })
  
  return (
    <div className={styles.container}></div>
  )
}

export default Home
