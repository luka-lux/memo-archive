import styles from "../../../ui/dashboard/memoires/addMemoire/addMemoire.module.css";
import { addMemoire } from "../../../lib/actions.js";

const AddMemoirePage = () => {
  return (
    <div className={styles.container}>
      <form action={addMemoire} className={styles.form}>
        <input type="text" placeholder="Thème" name="theme" required />
        <select name="niveau" id="niveau">
          <option value="general">Niveau</option>
          <option value="DUT">DUT</option>
          <option value="LICENCE">LICENCE</option>
          <option value="MASTER">MASTER</option>
        </select>
        <input type="text" placeholder="Spécialité" name="specialite" required />
        <input type="text" placeholder="Année de soutenance" name="annee" required />
        <input type="file" name="pdfFile" accept="application/pdf" placeholder="Rapport memoire" required />
        <textarea
          required
          name="intro"
          id="intro"
          rows= {16}
          placeholder="Introduction"
        ></textarea>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default AddMemoirePage;