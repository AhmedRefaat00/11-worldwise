import { Outlet } from 'react-router-dom'
import styles from './Sidebar.module.css'
import Logo from '../logo/Logo'
import AppNav from './../appNav/AppNav';
function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />

            <Outlet />
            <footer className={styles.footer}>
                <p>© Copyright {new Date().getFullYear()} WorldWise Inc.</p>
            </footer>

        </div>
    )
}

export default Sidebar
