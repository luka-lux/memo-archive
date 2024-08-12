import Link from "next/link";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { fetchMemoires } from "../../lib/data.js";
import styles from "../../ui/dashboard/memoires/memoires.module.css";
import Pagination from "../../ui/dashboard/pagination/pagination.jsx";
import Search from "../../ui/dashboard/search/search.jsx";
import { deleteMemoire } from "../../lib/actions.js";

const MemoiresPage = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count,memoires} = await fetchMemoires(q, page);
  function majusOfOne(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Rechercher un mémoire" />
        <Link href="/tableaux-de-bords/memoires/ajouter-un-memoire">
          <button className={styles.addButton}>Ajouter un mémoire</button>
        </Link>
      </div>
      <table className={styles.table}>
          <thead>
          <tr>
            <td>Theme</td>
            <td>Niveau</td>
            <td>Spécialité</td>
            <td>Année de soutenance</td>
          </tr>
        </thead>
        <tbody>
          {memoires.map((memoire) =>(
            <tr key={memoire.id}>
              <td>{majusOfOne(memoire.theme)}</td>
              <td>{memoire.niveau}</td>
              <td>{(memoire.specialite).toUpperCase()}</td>
              <td>{memoire.annee}</td>
              <td>
                <div className={styles.buttons}>
                <Link href={`/tableaux-de-bords/memoires/${memoire.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      <FiEdit />
                    </button>
                  </Link>
                  <form action={deleteMemoire}>
                    <input type="hidden" name="id" value={memoire.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      <FiTrash2 />
                    </button>
                  </form>
                </div>
              </td>
            </tr>
            ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default MemoiresPage;