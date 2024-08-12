import { updateUser } from "../../../lib/actions.js";
import { fetchUser } from "../../../lib/data.js";
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({params}) => {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        <span className={styles.name}>{user.nom}</span>
        <span>{user.prenom}</span>
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>Nom</label>
          <input type="text" name="nom" placeholder={user.nom} />
          <label>Prénom</label>
          <input type="text" name="prenom" placeholder={user.prenom} />
          <label>N°Matricule</label>
          <input type="text" name="matricule" placeholder={user.matricule} />
          <label>Mot de passe</label>
          <input type="password" name="password" />
          <label>Niveau</label>
          <input type="text" name="niveau" placeholder={user.niveau} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>Oui</option>
            <option value={false} selected={!(user.isAdmin)}>Non</option> 
          </select>
          <button>Mettre à jour</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;