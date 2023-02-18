import { useState } from "react";
import styles from "./styles.module.css";
import { AdvancedSalary } from "./Svg/AdvancedSalary";
import { Bolnicnii } from "./Svg/Bolnichnii";
import { Komandirovki } from "./Svg/Comandirovki";
import { Leave } from "./Svg/Leave";
import { Otpysk } from "./Svg/Otpysk";
import { Salary } from "./Svg/Salary";
import { Commandary } from "./Tabs/Commandary";
export const Burocraty = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Кадровые вопросы</div>
      <div className={styles.tabSelect}>
        <div onClick={() => setTab(1)} className={styles.tab}>
          <div style={{ display: "flex", gap: 8 }}>
            <Otpysk />
            Отпуск
          </div>
          {tab === 1 && <div className={styles.selectedTab} />}
        </div>
        <div onClick={() => setTab(2)} className={styles.tab}>
          <div style={{ display: "flex", gap: 8 }}>
            <Bolnicnii />
            Больничный
          </div>
          {tab === 2 && <div className={styles.selectedTab} />}
        </div>
        <div onClick={() => setTab(3)} className={styles.tab}>
          <div style={{ display: "flex", gap: 8 }}>
            <Salary /> Зарплата
          </div>
          {tab === 3 && <div className={styles.selectedTab} />}
        </div>
        <div onClick={() => setTab(4)} className={styles.tab}>
          <div style={{ display: "flex", gap: 8 }}>
            <AdvancedSalary />
            Примеии
          </div>
          {tab === 4 && <div className={styles.selectedTab} />}
        </div>
        <div onClick={() => setTab(5)} className={styles.tab}>
          <div style={{ display: "flex", gap: 8 }}>
            <Komandirovki />
            Командировки
          </div>
          {tab === 5 && <div className={styles.selectedTab} />}
        </div>
        <div onClick={() => setTab(6)} className={styles.tab}>
          <div style={{ display: "flex", gap: 8 }}>
            <Leave />
            Увольнение
          </div>
          {tab === 6 && <div className={styles.selectedTab} />}
        </div>
      </div>
      <div>{tab == 5 && <Commandary />}</div>
    </div>
  );
};
