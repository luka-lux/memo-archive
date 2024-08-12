import { IoSchoolSharp } from "react-icons/io5";
import styles from "./card.module.css";

const Card = ({placeholder, number}) => {
  return (
    <div className={styles.container}>
      <IoSchoolSharp size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{placeholder}</span>
        <span className={styles.number}>{number}</span>
      </div>
    </div>
  );
};

export default Card;