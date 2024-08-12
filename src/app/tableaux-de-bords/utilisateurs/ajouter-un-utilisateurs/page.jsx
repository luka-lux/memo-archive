import { addUser } from "../../../lib/actions.js";
import styles from "../../../ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="Nom" name="nom" required />
        <input type="text" placeholder="Prénom" name="prenom" required />
        <input type="text" placeholder="N°Matricule" name="matricule" required />
        <input type="text" placeholder="Niveau" name="niveau" required />
        <input type="text" placeholder="Spécialité" name="specialite" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>
            Is Admin?
          </option>
          <option value={true}>Oui</option>
          <option value={false}>Non</option>
        </select>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default AddUserPage;