import { useRouter } from "next/router";
import { Arrow } from "../MainContent/Svg/Arrow";
import { Money } from "../MainContent/Svg/Money";
import { Empty } from "./BottomCard/Empty";
import { Fulled } from "./BottomCard/Fulled";
import { Lock } from "./Components/Lock";
import { QuestCount, Timer } from "./Components/Svg";
import { Unlock } from "./Components/Unlock";
import styles from "./styles.module.css";
export const Onboarding = () => {
  const router = useRouter();
  return (
    <div className={styles.root}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "1.5",
          padding: "24px 0px 0px 24px",
        }} /* MAIN */
        className={styles.renderTask}
      >
        <div className={styles.title}>Онбординг</div>
        <div className={styles.stepFrame}>
          <div className={styles.stepResult}>Этап 8 из 24</div>
          <div className={styles.spogressBar}>
            <div
              style={{
                background: "#1EC025",
                height: 4,
                borderRadius: 32,
                width: `${(100 / 24) * 8}%`,
              }}
            />
          </div>
        </div>
        <div
          style={{
            marginLeft: 32,
            marginTop: 62,
            display: "flex",
            gap: 62,
            alignItems: "center",
          }}
        >
          <Unlock />
          <Lock day={2} title={"Корпоративная культура"} />
          <Lock day={3} title={"Освоение места"} />
          <Lock day={4} title={"Первые задачи"} />
        </div>
      </div>
      <div className={styles.bottomSide}>
        <div style={{ height: "fit-content" }}>
          <div className={styles.title}>Подача документов</div>
          <div className={styles.description}>
            Сегодня вам нужно выполнить Постановка задачи — точная формулировка
            условий задачи с описанием входной и выходной информации. Входная
            информация по задаче — данные, поступающие на вход задачи и
            используемые для её решения
          </div>
          <div className={styles.card}>
            <div>
              <div className={styles.cardTitle}>Тест</div>
              <div className={styles.dayText}>
                <Timer />
                Время прохождения:
                <span style={{ color: "black" }}> 15 мин</span>
              </div>
              <div className={styles.dayText}>
                <QuestCount />
                Вопросов: <span style={{ color: "black" }}>10</span>
              </div>
            </div>
            <div>
              <div className={styles.rightSide}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <Money />
                  <span className={styles.moneyName}>Мобаллы</span>{" "}
                  <span className={styles.userName}>144</span>
                </div>
                <button
                  onClick={() =>
                    router.push("onboard/test/1", "", { shallow: true })
                  }
                  className={styles.goTest}
                >
                  Начать тест
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 24, height: "fit-content" }}>
          <div style={{ height: "fit-content" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <div
                className={styles.titleBR}
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                Назначены <div className={styles.readyCound}>2</div>
              </div>

              <div>
                <Arrow />
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <Fulled />
              <Fulled />
            </div>
          </div>
          <div style={{ height: "fit-content" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
                height: "fit-content",
              }}
            >
              <div
                className={styles.titleBR}
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                Выполнено <div className={styles.readyCound}>2</div>
              </div>

              <div>
                <Arrow />
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <Empty />
              <Empty />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
