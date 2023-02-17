import { Checkbox } from "./Components/Checkbox";
import { UserCard } from "./Components/UserCard";
import styles from "./styles.module.css";
import { Search } from "./Svg/Search";
export const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Коллеги</div>
      <div className={styles.search}>
        <Search />
        <input
          className={styles.input}
          placeholder="Поиск по фио, должности, подразделению"
        />
      </div>
      <div className={styles.list}>
        <div className={styles.userRender}>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
        <div
          style={{
            display: "flex",
            minWidth: 311,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
            <div className={styles.titleFilter}>Роль</div>
            <div
              style={{
                colorScheme: "none",
                borderRadius: "4px",
                borderStyle: "none !important",
                outline: "none",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Checkbox />
                Product Designer
              </div>
              <div style={{ color: "#787878" }}>4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// 16px 40px 0px 24px
