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
          <UserCard title={"Алиева Анна"} role={"Аналитик"} />
          <UserCard title={"Максимов Илья"} role={"Администратор"} />
          <UserCard title={"Власов Артём"} role={"Аналитик"} />
          <UserCard title={"Ефремова Ясмина"} role={"Администратор"} />
        </div>
        <div
          style={{
            display: "flex",
            minWidth: 311,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
            <div className={styles.titleFilter}>Роль</div>
            {mockData.map((item) => {
              return (
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
                  key={item.id}
                >
                  <div>
                    <Checkbox />
                    {item.title}
                  </div>
                  <div style={{ color: "#787878" }}>{item.count}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
// 16px 40px 0px 24px

const mockData = [
  {
    title: "Product Designer",
    id: 1,
    count: 4,
  },
  {
    title: "UX исследователь",
    id: 2,
    count: 1,
  },
  {
    title: "Frontend developer",
    id: 3,
    count: 14,
  },
];
