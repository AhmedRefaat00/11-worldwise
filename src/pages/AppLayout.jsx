import styles from './AppLayout.module.css'
import Map from './../components/map/Map';
import Sidebar from '../components/sideBar/Sidebar';
import User from './../components/user/User';
function AppLayout() {
    return (
        <div className={styles.app}>
        <Sidebar />
        <Map />
        <User />
            
        </div>
    )
}

export default AppLayout
