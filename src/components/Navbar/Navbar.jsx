import React from 'react'
import styles from './navbar.module.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {FiBell} from 'react-icons/fi'
import {BsChevronDown} from 'react-icons/bs'
import {FaChevronDown} from 'react-icons/fa'
import img from '../../assets/profile.jpg'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h2>CORKOWL</h2>

      <section className={styles.searchContainer} >
      <AiOutlineSearch className={styles.searchIcon} />
      <input placeholder="Search wines, customers here..." className={styles.search} type="text" />
      </section>

      <FiBell className={styles.bell}/>

      <section className={styles.account} >
        <p>Nicoloas D.</p>
        <img className={styles.avatar} src={img} alt="profile" />

      </section>
      <FaChevronDown className={styles.down}/>
    </nav>
  )
}
