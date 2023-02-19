import { FC, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { LogoSvg } from "../../../svg/Logo";
interface Props {}

export const HomePage: FC<Props> = () => {
  const router = useRouter();
  const [tab, setTab] = useState(1);
  return (
    <div className={styles.root}>
      <div className={styles.leftSide}>
        <div>
          <div className={styles.welcome}>Добро пожаловать</div>
          <div className={styles.welcomeDescription}>
            Это путеводитель ваших первых шагов в чудесную атмосферу Росмолодежи
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.authForm}>
          <div className={styles.logoContainer}>
            <LogoSvg />
          </div>
          <div className={styles.formDescription}>
            Для начала авторизации выберите вашу роль в работе Росмолодежи
          </div>
          <div className={styles.tabContainer}>
            <div onClick={() => setTab(1)} className={styles.tab}>
              <div style={{ display: "flex", gap: 8 }}>Сотрудник</div>
              {tab === 1 && <div className={styles.selectedTab} />}
            </div>
            <div onClick={() => setTab(2)} className={styles.tab}>
              <div style={{ display: "flex", gap: 8 }}>HR</div>
              {tab === 2 && <div className={styles.selectedTab} />}
            </div>
            <div onClick={() => setTab(3)} className={styles.tab}>
              <div style={{ display: "flex", gap: 8 }}>Руководитель</div>
              {tab === 3 && <div className={styles.selectedTab} />}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginBottom: 40,
              marginTop: 20,
            }}
          >
            <input placeholder="Логин" className={styles.input} />
            <input
              placeholder="Пароль"
              type={"password"}
              className={styles.input}
            />
          </div>
          <button
            onClick={() =>
              router.push(tab == 2 ? "/hr/contacts" : "select-hero", "", {
                shallow: true,
              })
            }
            className={styles.button}
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};
