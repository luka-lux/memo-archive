import Image from "next/image";
import styles from "./memoiresRecents.module.css";

const MemoiresRecents = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Mémoires récents</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Thème</td>
            <td>Niveau</td>
            <td>Spécialité</td>
            <td>Année</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.theme}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.themeImage}
                />
                Mise en place de la base de données de gestion de thèmes de mémoires
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Licence
              </span>
            </td>
            <td>PDI</td>
            <td>2023-2024</td>
          </tr>
          <tr>
            <td>
              <div className={styles.theme}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.themeImage}
                />
                Mise en place de la base de données de gestion de thèmes de mémoires
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Licence
              </span>
            </td>
            <td>PDI</td>
            <td>2023-2024</td>
          </tr>
          <tr>
            <td>
              <div className={styles.theme}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.themeImage}
                />
                Mise en place de la base de données de gestion de thèmes de mémoires
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                  Licence
              </span>
            </td>
            <td>PDI</td>
            <td>2023-2024</td>
          </tr>
          <tr>
            <td>
              <div className={styles.theme}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.themeImage}
                />
                Mise en place de la base de données de gestion de thèmes de mémoires
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Licence
              </span>
            </td>
            <td>PDI</td>
            <td>2023-2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MemoiresRecents;