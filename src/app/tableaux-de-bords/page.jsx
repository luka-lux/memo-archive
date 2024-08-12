import Card from "../ui/dashboard/card/card";
import styles from "../ui/dashboard/dashbord.module.css";
import MemoiresRecents from "../ui/dashboard/memoiresRecents/memoiresRecents";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card placeholder="Dut" number="2" />
          <Card placeholder="Licnce" number="10"/>
          <Card placeholder="Master" number="7"/>
        </div>
        <MemoiresRecents />
      </div>
    </div>
  );
};

export default Dashboard;