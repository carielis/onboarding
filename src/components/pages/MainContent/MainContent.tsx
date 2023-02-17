/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { BaseBrainSvg } from "../../../svg/BaseBrain";
import { CalendarySvg } from "../../../svg/Calendary";
import { ChatBotSvg } from "../../../svg/ChatBot";
import { CollegueSvg } from "../../../svg/Collegue";
import { ContactSvg } from "../../../svg/Contact";
import { DashboardMouse, DashboardSvg } from "../../../svg/Dashboard";
import { DocumentsSvg } from "../../../svg/Documents";
import { EventsSvg } from "../../../svg/Events";
import { LogoSvg } from "../../../svg/Logo";
import { Button } from "./Components/Button";
import styles from "./styles.module.css";
import { Arrow } from "./Svg/Arrow";
import { Burocraty } from "./Svg/Buroctary";
import { Colocol } from "./Svg/Colocol";
import { Confluence } from "./Svg/Confluence";
import { Dark } from "./Svg/Dark";
import { Exit } from "./Svg/Exit";
import { Figma } from "./Svg/Figma";
import { GitSvg } from "./Svg/Git";
import { Jira } from "./Svg/Jira";
import { Light } from "./Svg/Light";
import { Money } from "./Svg/Money";
import { Notion } from "./Svg/Notion";

export const Wrapper = ({ children }: any) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [burocraty, setBurocraty] = useState(false);
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div
        style={{
          width: 240,
        }}
      >
        <div style={{ padding: "16px 0px 16px 24px" }}>
          <LogoSvg />
        </div>
        <div className={styles.menu}>
          <div className={styles.menuLabel}>МЕНЮ</div>
          <Button
            isActive={router.asPath === "/dashboard"} // @ts-ignore
            onClick={() => router.push("dashboard", null, { shallow: true })}
            onMouseEnter={() => {
              setMouseEnter(true);
            }}
            onMouseLeave={() => {
              setMouseEnter(false);
            }}
          >
            {!mouseEnter ? <DashboardMouse /> : <DashboardSvg />} Дашборд
          </Button>
          <Button
            isActive={router.asPath === "/contacts"} // @ts-ignore
            onClick={() => router.push("contacts", null, { shallow: true })}
          >
            <ContactSvg /> Контакты
          </Button>
          <Button
            isActive={router.asPath === "/collegues"} // @ts-ignore
            onClick={() => router.push("collegues", null, { shallow: true })}
          >
            <CollegueSvg /> Коллеги
          </Button>
          <Button onClick={() => setBurocraty(!burocraty)}>
            <Burocraty /> Бюрократия
            <div
              style={{
                position: "relative",
                right: "-25px",
                top: "3px",
              }}
            >
              <Arrow />
            </div>
          </Button>
          {burocraty && (
            <div>
              <Button
                isActive={router.asPath === "/burocraty/vacation"}
                onClick={() =>
                  // @ts-ignore
                  router.push("/burocraty/vacation", null, { shallow: true })
                }
              >
                Отпуск
              </Button>
              <Button
                isActive={router.asPath === "/burocraty/sick"}
                onClick={() =>
                  // @ts-ignore
                  router.push("/burocraty/sick", null, { shallow: true })
                }
              >
                Больничный
              </Button>
              <Button
                isActive={router.asPath === "/burocraty/salary"}
                onClick={() =>
                  // @ts-ignore
                  router.push("/burocraty/salary", null, { shallow: true })
                }
              >
                Зп
              </Button>
              <Button
                isActive={router.asPath === "/burocraty/trips"}
                onClick={() =>
                  // @ts-ignore
                  router.push("/burocraty/trips", null, { shallow: true })
                }
              >
                Командировки
              </Button>
            </div>
          )}
          <Button
            isActive={router.asPath === "/projects"} // @ts-ignore
            onClick={() => router.push("projects", null, { shallow: true })}
          >
            <EventsSvg /> Проекты
          </Button>
          <Button
            isActive={router.asPath === "/tasks"} // @ts-ignore
            onClick={() => router.push("tasks", null, { shallow: true })}
          >
            <EventsSvg /> Задачи
          </Button>
          <Button
            isActive={router.asPath === "/calendary"} // @ts-ignore
            onClick={() => router.push("calendary", null, { shallow: true })}
          >
            <CalendarySvg /> Календарь
          </Button>
          <Button
            isActive={router.asPath === "/chat-bot"} // @ts-ignore
            onClick={() => router.push("chat-bot", null, { shallow: true })}
          >
            <ChatBotSvg /> Чат бот
          </Button>
          <Button
            isActive={router.asPath === "/faq"} // @ts-ignore
            onClick={() => router.push("faq", null, { shallow: true })}
          >
            <BaseBrainSvg /> База знаний
          </Button>
          <Button
            isActive={router.asPath === "/documents"} // @ts-ignore
            onClick={() => router.push("documents", null, { shallow: true })}
          >
            <DocumentsSvg /> Документы
          </Button>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuLabel}>ПРИЛОЖЕНИЯ</div>
          <div className={styles.appContainer}>
            <GitSvg />
            <Jira />
            <Confluence />
            <Figma />
            <Notion />
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuLabel}>ОНБОРДИНГ</div>
          <div className={styles.frameOnboarding} />
        </div>

        <div className={styles.theme}>
          <div onClick={() => setTheme("light")} className={styles.themeName}>
            <Light /> Light
          </div>
          <div onClick={() => setTheme("dark")} className={styles.themeName}>
            <Dark /> Dark
          </div>
          <div
            className={
              theme === "dark" ? styles.selectDark : styles.selectLight
            }
          ></div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          backgroundColor: "#F2F2F2",
        }}
      >
        <header className={styles.header}>
          <div
            style={{
              cursor: "pointer",
            }}
          >
            <Colocol />
          </div>
          <div className={styles.userInfo}>
            <div>
              <img
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: 32,
                  background: "black",
                }}
              />
            </div>
            <div>
              <div className={styles.userName}>Марк Алексеевич</div>
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
            style={{
              cursor: "pointer",
            }}
          >
            <Exit />
          </div>
        </header>
        <div>{children}</div>
      </div>
    </div>
  );
};
