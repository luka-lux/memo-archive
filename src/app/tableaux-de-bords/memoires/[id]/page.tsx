import { updateMemoire } from "../../../lib/actions.js";
import { fetchMemoire } from "../../../lib/data.js";
import styles from "../../../ui/dashboard/memoires/singleMemoire/singleMemoire.module.css";
import PdfViewer from '../../../ui/common/PdfViewer.jsx'


const SingleProductPage = async ({params}) => {
  const { id } = params;
  const memoire = await fetchMemoire(id);

  return (
    <div className={styles.container} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
  }}>
      <div className={styles.infoContainer}>
        {memoire.theme}
      </div>
      <div className={styles.formContainer}>
        <form action={updateMemoire} className={styles.form}>
          <input type="hidden" name="id" value={memoire.id} />
          <label>Thème</label>
          <input type="text" name="theme" placeholder={memoire.theme} />
          <label>Niveau</label>
          <select name="niveau" id="niveau">
            <option value="DUT">DUT</option>
            <option value="LICENCE">LICENCE</option>
            <option value="MASTER">MASTER</option>
          </select>
          <label>Spécialité</label>
          <input type="text" name="specialite" placeholder={memoire.specialite} />
          <label>Année Académique</label>
          <input type="text" name="annee" placeholder={memoire.annee} />
          <label>Introduction</label>
          <textarea
            name="intro"
            id="intro"
            rows={10}
            placeholder={memoire.intro}
          ></textarea>
          <button type="submit">Mettre à jour</button>
        </form>
      </div>
      <PdfViewer pdfPath={memoire.pdfPath} />
    </div>
  );
};

export default SingleProductPage;