import Navbar from "../ui/dashboard/navbar/navbar.jsx"
import Sidebar from "../ui/dashboard/sidebar/sidebar.jsx"
import styles from "../ui/dashboard/dashbord.module.css"


const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
      </div>
    </div>
  )
}

export default Layout