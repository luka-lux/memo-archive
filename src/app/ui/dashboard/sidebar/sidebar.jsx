import Image from "next/image";
import { FiUsers } from "react-icons/fi";
import { IoSchoolSharp } from "react-icons/io5";
import {
  MdDashboard,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import { auth } from "../../../auth.js";
import { signOut } from "../../../auth.js"

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Tableaux de bords",
        path: "/tableaux-de-bords",
        icon: <MdDashboard />,
      },
      {
        title: "Utilisateurs",
        path: "/tableaux-de-bords/utilisateurs",
        icon: <FiUsers />,
      },
      {
        title: "Mémoires",
        path: "/tableaux-de-bords/memoires",
        icon: <IoSchoolSharp />,
      },
    ],
  },
];

const Sidebar = async() => {
  const { user } = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src= { user.img || "/noavatar.png" }
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{ user.nom } { user.prenom }</span>
          <span className={styles.userTitle}>Administrateur</span>
        </div>
      </div>
      <ul className={styles.list}>
      {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form action={ async () =>{
        "use server"
        await signOut()
      }}>
      <button className={styles.logout}>
        <MdLogout />
        Déconnexion
      </button>
      </form>
    </div>
  );
};

export default Sidebar;