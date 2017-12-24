import React from 'react'
import { Link } from 'react-router-dom'

import styles from './TopNavigation.scss'

const TopNavigation = () => (
  <div className={ styles.topNav }>
    <div className={ styles.brand }>
      <Link to="/">Battleright.gg</Link>
    </div>
    <ul className={ styles.rightNav }>
      <li><Link to='/champions'>Champions</Link></li>
      <li><Link to='/loadouts'>Loadouts</Link></li>
    </ul>
  </div>
)

export default TopNavigation
