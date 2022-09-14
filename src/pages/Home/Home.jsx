import React from 'react'
import Output from '../../components/Output/Output'
import Search from '../../components/Search/Search'
import styles from './home.module.css'


const Home = () => {
  return (
    <div className={styles.background}>
       <Search></Search>
       {/* <Output></Output> */}
       

    </div>
  )
}

export default Home