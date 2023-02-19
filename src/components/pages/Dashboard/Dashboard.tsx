/* eslint-disable react/jsx-key */
import { Adward } from "./Components/Adward";
import { Card } from "./Components/Card";
import { CardProject } from "./Components/CardProject";
import { QuestCard } from "./Components/QuestCard";
import { Hero } from "./Hero";
import styles from "./styles.module.css";

export const Dashboard = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <header className={styles.header}>
        <div style={{ marginTop: "-23px", marginLeft: 24 }}>
          <Hero />
        </div>
        <div style={{ marginRight: 64 }}>
          <div className={styles.hello}>Привет</div>
          <div className={styles.userName}>Марк</div>
        </div>
        <div>
          <div className={styles.hello}>Твой ментор</div>
          <div>
            <Card />
          </div>
        </div>
      </header>
      <div className={styles.content}>
        <div style={{ paddingLeft: 24, paddingTop: 24 }}>
          <div>
            <div className={styles.title}>Прогресс онбординга</div>
            <div className={styles.progressOnboard}></div>
          </div>
          <div>
            <div className={styles.title}>Ваши награды</div>
            <div
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                width: "53vw",
                overflow: "auto",
              }}
            >
              <Adward set={0} /> <Adward set={1} />
              <Adward set={3} /> <Adward set={4} /> <Adward set={5} />
              <Adward set={12} />
            </div>
          </div>
          <div>
            <div className={styles.title}>Твои проекты</div>
            <div
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                width: "53vw",
                overflow: "auto",
              }}
            >
              {mock.map((project) => {
                return (
                  <CardProject
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
        </div>
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            flexDirection: "column",
            flex: "1",
            marginRight: "24px",
          }}
        >
          <div className={styles.title}>Задачи на сегодня</div>
          <div style={{ overflow: "auto", height: "calc(100vh - 260px)" }}>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <div className={styles.time}>
                <div>9:00</div>
                <div style={{ border: "1px solid #DFDFDF", width: "100%" }} />
              </div>
              <QuestCard />
            </div>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <div className={styles.time}>
                <div>12:00</div>
                <div style={{ border: "1px solid #DFDFDF", width: "100%" }} />
              </div>
              <QuestCard />
            </div>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <div className={styles.time}>
                <div>14:00</div>
                <div style={{ border: "1px solid #DFDFDF", width: "100%" }} />
              </div>
              <QuestCard />
            </div>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <div className={styles.time}>
                <div>16:00</div>
                <div style={{ border: "1px solid #DFDFDF", width: "100%" }} />
              </div>
              <QuestCard />
            </div>
          </div>
        </div>
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
    title: "Electus",
    startDate: "Старт: 18 января  ·",
    endDate: "Конец: 16 августа",
    progress: 90,
    lastActivity: "Последнее обновление: 10 январь",
    countUsers: 4,
  },
];
