/* eslint-disable react/jsx-key */
import { Search } from "../Contacts/Svg/Search";
import { Card } from "./Components/Card";
import styles from "./styles.module.css";

export const Projects = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Проекты <span className={styles.count_projects}>12</span>
      </div>
      <div className={styles.search}>
        <Search />
        <input
          className={styles.input}
          placeholder="Поиск по фио, должности, подразделению"
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {mock.map((project) => {
          return (
            <Card
              title={project.title}
              startDate={project.startDate}
              endDate={project.endDate}
              progress={project.progress}
              lastActivity={project.lastActivity}
            />
          );
        })}
      </div>
    </div>
  );
};
const mock = [
  {
    title: "Твой ход",
    startDate: "Старт: 18 января  ·",
    endDate: "Конец: 16 августа",
    progress: 20,
    lastActivity: "Последнее обновление: 10 январь",
    countUsers: 2,
  },
  {
    title: "Шаг в лето",
    startDate: "Старт: 18 января  ·",
    endDate: "Конец: 16 августа",
    progress: 50,
    lastActivity: "Последнее обновление: 10 январь",
    countUsers: 4,
  },
  {
    title: "Electus",
    startDate: "Старт: 18 января  ·",
    endDate: "Конец: 16 августа",
    progress: 90,
    lastActivity: "Последнее обновление: 10 январь",
    countUsers: 4,
  },
];
