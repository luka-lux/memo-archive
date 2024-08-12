"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import Image from "next/image.js";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
        <Image
          className={styles.logoImage}
          src="/INTEC SUP LOGO.jpeg"
          alt=""
          width="30"
          height="30"
        />
          <div>
          <h2>INTEC SUP</h2>
          <span className={styles.meilleur}>Les meilleurs sont ici</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;