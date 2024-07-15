import { NavLink } from 'react-router-dom'
import styles from './AppNav.module.css'

function AppNav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <NavLink to='/app/cities'  >cities</NavLink>
                <NavLink to='/app/countries'>countries</NavLink>
            </ul>
        </nav>
    )
}

export default AppNav
