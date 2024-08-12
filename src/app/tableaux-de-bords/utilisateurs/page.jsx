import Pagination from "../../ui/dashboard/pagination/pagination.jsx";
import Search from "../../ui/dashboard/search/search.jsx";
import styles from "../../ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";
import { FiEdit,FiTrash2 } from "react-icons/fi";
import { fetchUsers } from "../../lib/data.js";
import { deleteUser } from "../../lib/actions.js";


const UsersPage = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count,users} = await fetchUsers(q, page); 
  function majusOfOne(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Rechercher un utilisateur..." />
        <Link href="/tableaux-de-bords/utilisateurs/ajouter-un-utilisateurs">
          <button className={styles.addButton}>Ajouter un nouveau Utilisateur</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>
              <div className={styles.username}>
                <span>Nom</span>
                <span>Prenom</span>
              </div>
            </td>
            <td>N°Matricule</td>
            <td>Niveau</td>
            <td>Spécialité</td>
            <td>Role</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user)=>(
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/noavatar.png" }
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  <span>{(user.nom).toUpperCase()}</span>
                  <span>{majusOfOne(user.prenom)}</span>
                </div>
              </td>
              <td>{(user.matricule).toUpperCase()}</td>
              <td>{(user.niveau).toUpperCase()}</td>
              <td>{(user.specialite).toUpperCase()}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/tableaux-de-bords/utilisateurs/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      <FiEdit />
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
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

export default UsersPage;