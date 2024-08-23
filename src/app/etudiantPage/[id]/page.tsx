import { fetchMemoire } from "../../lib/data.js";
import styles from "../../ui/dashboard/memoires/singleMemoire/singleMemoire.module.css";
import PdfViewer from '../../ui/common/PdfViewer.jsx'


const DetailPage = async ({params}) => {
  const { id } = params;
  const memoire = await fetchMemoire(id);

  return (
    <div className={styles.container} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
  }}>
      <div className={styles.infoContainer}>
        <p className={styles.into}>Introduction:</p>
        {memoire.intro}
      </div>
      <PdfViewer pdfPath={memoire.pdfPath} />
    </div>
  );
};

export default DetailPage;