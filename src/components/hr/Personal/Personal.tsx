import { useRouter } from "next/router";
import { Search } from "../../pages/Contacts/Svg/Search";
import { Card } from "./Components/Card";
import styles from "./styles.module.css";
import { WTFSVG } from "./Svg";
import { User } from "./User";
export const Personal = () => {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1",
        padding: "24px",
      }}
    >
      <div>Сотрудники</div>

      <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
        <Card count={2} text="ждут вашей помощи" />
        <Card count={5} text="ждут назначения ментора" />
        <Card count={1} text="успешно прошли онбординг" />
        <Card count={3} text="ждут проверки заданий" />
      </div>
      <div
        style={{ marginTop: 24, marginBottom: 24 }}
        className={styles.search}
      >
        <Search />
        <input
          className={styles.input}
          placeholder="Поиск по фио, должности, подразделению"
        />
      </div>
      <div>
        <div
          style={{
            display: "flex",
            gap: "64px",
            alignItems: "center",
          }}
        >
          <div>
            <input
              style={{
                margin: "0px",
                padding: "0px",
                width: "16px",
                height: "16px",
                colorScheme: "white",
              }}
              type="checkbox"
            />
          </div>
          <div
            className={styles.headerTable}
            style={{ display: "flex", flex: "1" }}
          >
            ФИО
          </div>
          <div
            className={styles.headerTable}
            style={{ display: "flex", flex: "1" }}
          >
            ОТДЕЛ
          </div>
          <div
            className={styles.headerTable}
            style={{ display: "flex", flex: "1" }}
          >
            ДОЛЖНОСТЬ
          </div>
          <div
            className={styles.headerTable}
            style={{ display: "flex", flex: "1" }}
          >
            ПРОГРЕСС ОНБОРДИНГ
          </div>
          <div style={{ opacity: 0 }}>
            <WTFSVG />
          </div>
        </div>
        <div
          style={{ border: "1px solid #EBEBEB", width: "100%", marginTop: 16 }}
        ></div>
        <div
          style={{ display: "flex", flexDirection: "column", marginTop: 16 }}
        >
          {mock.map((item) => {
            return <User item={item} key={item.checkID} />;
          })}
        </div>
      </div>
    </div>
  );
};

const mock = [
  {
    checkID: 1,
    name: "Новиков Сергей Фёдорович",
    role: "Инженер",
    depart: "Инженерия",
    progress: "10%",
  },
  {
    checkID: 1,
    name: "Серёгин Марк Алексеевич",
    role: "Старший дизайнер",
    depart: "Дизайн",
    progress: "40%",
  },
  {
    checkID: 1,
    name: "Воронов Борис Александрович",
    role: "Front-end разработчик",
    depart: "Разработка программного обеспечения",
    progress: "90%",
  },
  {
    checkID: 1,
    name: "Зуева София Викторовна",
    role: "Исследования и инновации",
    depart: "Аналитик",
    progress: "30%",
  },
];
