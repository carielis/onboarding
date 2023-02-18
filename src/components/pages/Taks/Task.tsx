import { useState } from "react";
import {
  Card,
  CardCompleteTask,
  CardReadyTask,
  CardWithHelper,
} from "./Components/Card";
import { Fulled } from "./Components/Fulled";
import styles from "./styles.module.css";

export const Task = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className={styles.root}>
      <div className={styles.title}>Задачи</div>
      <div className={styles.containerCard}>
        <Card />
        <CardReadyTask />
        <CardCompleteTask />
        <CardWithHelper />
      </div>
      <div style={{ display: "flex", gap: "24px" }}>
        <Tab tab={tab} isTab={1} setTab={() => setTab(1)} />
        <Tab tab={tab} isTab={2} setTab={() => setTab(2)} />
        <Tab tab={tab} isTab={3} setTab={() => setTab(3)} />
        <Tab tab={tab} isTab={4} setTab={() => setTab(4)} />
        <Tab tab={tab} isTab={5} setTab={() => setTab(5)} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginTop: 24,
        }}
      >
        <div style={{ display: "flex", flex: "1", flexDirection: "column" }}>
          <div className={styles.headTable}>Назначены</div>
          <div className={styles.table}>
            <Fulled />
            <Fulled />
            <Fulled />
          </div>
        </div>
        <div style={{ display: "flex", flex: "1", flexDirection: "column" }}>
          <div className={styles.headTable}>В процессе</div>
          <div className={styles.table}>
            <Fulled />
            <Fulled />
            <Fulled />
          </div>
        </div>
        <div style={{ display: "flex", flex: "1", flexDirection: "column" }}>
          <div className={styles.headTable}>Проверка</div>
          <div className={styles.table}>
            <Fulled />
            <Fulled />
            <Fulled />
          </div>
        </div>
        <div style={{ display: "flex", flex: "1", flexDirection: "column" }}>
          <div className={styles.headTable}>Выполнено</div>
          <div className={styles.table}>
            <Fulled />
            <Fulled />
            <Fulled />
          </div>
        </div>
      </div>
    </div>
  );
};

const Tab = ({ tab, setTab, isTab }: any) => {
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => setTab(2)}
      className={styles.tab}
    >
      <div style={{ display: "flex", gap: 8, paddingBottom: 4 }}>
        День 1 (10.02.2022)
      </div>
      {tab === isTab && <div className={styles.selectedTab} />}
    </div>
  );
};
