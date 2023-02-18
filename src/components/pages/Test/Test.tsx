import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Money } from "../MainContent/Svg/Money";
import { Timer } from "../Onboarding/Components/Svg";
import styles from "./styles.module.css";
import { ArrowBack } from "./Svg/ArrowBack";
export default function Test() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(null);
  const router = useRouter();
  useEffect(() => {
    setSelected(null);
  }, [step]);
  return (
    <div className={styles.root}>
      {step === 3 ? (
        <div>
          <div
            style={{
              position: "absolute",
              left: "41%",
              top: "31%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              style={{
                position: "absolute",
                background: "#E9E1FF",
                transform: "translate(-40.9%,-60%)",
                zIndex: "-1",
                scale: "0.967",
              }}
              className={styles.form}
            >
              <div className={styles.bgResult}>
                <div className={styles.resultHeader}>
                  Отлично, вы прошли тест
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "40px",
                    alignItems: "center",
                    fontFamily: "'Inter'",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#787878",
                    marginBottom: "20px",
                  }}
                >
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "#1EC025", fontSize: "24px" }}>
                      13
                    </span>
                    Правильных ответов
                  </div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "#E32727", fontSize: "24px" }}>
                      1
                    </span>
                    Не правильный ответ
                  </div>
                </div>
                <div>
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
                <button
                  style={{
                    cursor: "pointer",
                    width: "127px",
                  }}
                  onClick={() => {
                    router.push("/dashboard", "", { shallow: true });
                  }}
                  className={styles.button}
                >
                  Покинуть тест
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
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
                    checked={selected === 1}
                    onChange={() => {
                      setSelected(selected == 1 ? null : 1);
                    }}
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
                    checked={selected === 2}
                    onChange={() => {
                      setSelected(selected == 2 ? null : 2);
                    }}
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
                    checked={selected === 3}
                    onChange={() => {
                      setSelected(selected == 3 ? null : 3);
                    }}
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
                    checked={selected === 4}
                    onChange={() => {
                      setSelected(selected == 4 ? null : 4);
                    }}
                    style={{ margin: 0, padding: 0, width: 20, height: 20 }}
                  />
                  <div className={styles.answer}>ул Средняя дом 10</div>
                </div>
              </div>
              <button
                style={{
                  cursor: selected ? "pointer" : "not-allowed",
                }}
                onClick={() => {
                  if (step == 2) {
                    selected && setStep(3);
                  } else {
                    selected && setStep(2);
                  }
                }}
                className={styles.button}
              >
                {step === 2 ? "Завершить" : "Продолжить"}
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
      )}
    </div>
  );
}
