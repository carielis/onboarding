import { useState } from "react";
import { Money } from "../../../src/components/pages/MainContent/Svg/Money";
import { Timer } from "../../../src/components/pages/Onboarding/Components/Svg";
import styles from "./styles.module.css";
import { ArrowBack } from "./Svg/ArrowBack";
export default function Test() {
  const [step, setStep] = useState(1);
  return (
    <div className={styles.root}>
      <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
        <div className={styles.leave}>
          <ArrowBack />
          Покинуть тест
        </div>
        <div
          style={{
            position: "absolute",
            left: "58%",
            top: "55%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <div style={{ padding: 24 }} className={styles.form}>
            <div className={styles.timer}>
              <Timer />
              00:14:16
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 16,
              }}
            >
              <div className={styles.titleQuestion}>
                {step === 1
                  ? "Какой адрес у нашего офиса?"
                  : "Название нашей компании"}
              </div>
              <div>
                <div className={styles.counterQuestion}>{step} из 2</div>
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
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  colorScheme: "white",
                }}
              >
                <input
                  type={"checkbox"}
                  style={{ margin: 0, padding: 0, width: 20, height: 20 }}
                />
                <div className={styles.answer}>ул Средняя дом 10</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  colorScheme: "white",
                }}
              >
                <input
                  type={"checkbox"}
                  style={{ margin: 0, padding: 0, width: 20, height: 20 }}
                />
                <div className={styles.answer}>ул Средняя дом 10</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  colorScheme: "white",
                }}
              >
                <input
                  type={"checkbox"}
                  style={{ margin: 0, padding: 0, width: 20, height: 20 }}
                />
                <div className={styles.answer}>ул Средняя дом 10</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  colorScheme: "white",
                }}
              >
                <input
                  type={"checkbox"}
                  style={{ margin: 0, padding: 0, width: 20, height: 20 }}
                />
                <div className={styles.answer}>ул Средняя дом 10</div>
              </div>
            </div>
            <button onClick={() => setStep(2)} className={styles.button}>
              Продолжить
            </button>
          </div>
          <div
            style={{
              position: "absolute",
              background: "#E9E1FF",
              transform: "translate(-40.9%,-60%)",
              zIndex: "-1",
              scale: "0.967",
            }}
            className={styles.form}
          ></div>
          <div
            style={{
              background: "rgb(233 225 255 / 45%)",
              position: "absolute",
              transform: "translate(-43%, -56%)",
              zIndex: "-1",
              scale: "0.915",
            }}
            className={styles.form}
          ></div>
        </div>
      </div>
    </div>
  );
}
