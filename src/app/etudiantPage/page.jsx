import React from 'react'
import { signOut } from '../auth.js'
import styles from "../ui/etudiantPage/etudiantPage.module.css"
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { fetchMemoires } from "../lib/data.js";
import Pagination from "../ui/dashboard/pagination/pagination.jsx";
import Link from "next/link";
import { auth } from "../auth.js";

const EtudiantPage = async ({searchParams}) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const {count, memoires} = await fetchMemoires(q, page);
    function majusOfOne(string) {
      if (!string) return "";
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    const { user } = await auth();
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.leftSection}>
            <a href="#" className={styles.logo}>memo</a>
            <ul className={styles.navLinks}>
              <li className={styles.Linksli}><a href="/etudiantPage" className={styles.Links}>Accueil</a></li>
              <li className={styles.Linksli}><a href="/etudiantPage/publier-memoire" className={styles.Links}>Créer</a></li>
            </ul>
          </div>
          <form className={styles.searchForm}>
            <div className={styles.searchContainer}>
              <span className={styles.searchIcon}> <CiSearch /></span>
              <input type="text" className={styles.searchInput} placeholder="Rechercher..." />
            </div>
            <div className={styles.filterContainer}>
              <select className={styles.filterSelect}>
                <option value="">filtré par</option>
                <option value="annee">Année</option>
                <option value="specialte">Spécialité</option> 
                <option value="niveau">Niveau</option>
              </select>
            </div>
          </form>
          <div className={styles.rightSection}>
            <a href="#" className={styles.favoriteLink}>
              <span className={styles.favoriteIcon}>&#9733;</span>
            </a>
            <div className={styles.profileMenuContainer}>
              <a href="#" className={styles.profileLink}>
                <Image src= { user.img || "/noavatar.png" } alt="Profile" className={styles.profileImg} width={30} height={30} />
              </a>
              <div className={styles.dropdownMenu}>
                <a href="/etudiantPage/profil" className={styles.dropdownLink}>Profil</a>
                <form action={ async () =>{ "use server"
                        await signOut()
                    }}>
                  <button className={styles.logoutBtn}>Déconnexion</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={styles.pageTitle}>
        <h2 className={styles.pageTitleh2}>Welcome { user.nom } { user.prenom } to memoArchive INTEC - SUP</h2>
      </div>
      <div className={styles.content}>
      {memoires.map((memoire) =>(
        <div className={styles.card} key={memoire.id}>
          <Link href={`/etudiantPage/${memoire.id}`}>
          <div className={styles.cardTheme}>
            <p className={styles.cardThemep}>Thème: {majusOfOne(memoire.theme)}</p>
          </div>
          <div className={styles.cardInfo}>
            <span className={styles.cardInfospan}>Niveau: {memoire.niveau} </span>
            <span className={styles.cardInfospan}>Spécialité: {(memoire.specialite).toUpperCase()} </span>
            <span className={styles.cardInfospan}>Année: {memoire.annee} </span>
          </div>
          </Link>
        </div>
      ))}
      </div>
      <Pagination count={count} />
    </div>
  )
};

export default EtudiantPage