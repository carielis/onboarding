/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { FC, useEffect, useLayoutEffect, useState } from "react";
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
  const [opacity, setOpacity] = useState(1);
  const routers = useRouter();
  const router = {
    push: (page: string, i: any, data: any) => {
      setOpacity(0);
      routers.asPath = "/" + page;
      setTimeout(() => routers.push(page, i, data), 500);
      setTimeout(() => setOpacity(1), 750);
    },
  };
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
            isActive={routers.asPath === "/dashboard"} // @ts-ignore
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
            isActive={routers.asPath === "/contacts"} // @ts-ignore
            onClick={() => router.push("contacts", null, { shallow: true })}
          >
            <ContactSvg /> Контакты
          </Button>
          <Button
            isActive={routers.asPath === "/collegues"} // @ts-ignore
            onClick={() => router.push("collegues", null, { shallow: true })}
          >
            <CollegueSvg /> Коллеги
          </Button>
          <Button
            isActive={routers.asPath === "/burocraty"} // @ts-ignore
            onClick={() => router.push("burocraty", null, { shallow: true })}
          >
            <Burocraty /> Бюрократия
          </Button>

          <Button
            isActive={routers.asPath === "/projects"} // @ts-ignore
            onClick={() => router.push("projects", null, { shallow: true })}
          >
            <EventsSvg /> Проекты
          </Button>
          <Button
            isActive={routers.asPath === "/tasks"} // @ts-ignore
            onClick={() => router.push("tasks", null, { shallow: true })}
          >
            <EventsSvg /> Задачи
          </Button>
          <Button
            isActive={routers.asPath === "/calendary"} // @ts-ignore
            onClick={() => router.push("calendary", null, { shallow: true })}
          >
            <CalendarySvg /> Календарь
          </Button>
          <Button
            isActive={routers.asPath === "/chat-bot"} // @ts-ignore
            onClick={() => router.push("chat-bot", null, { shallow: true })}
          >
            <ChatBotSvg /> Чат бот
          </Button>
          <Button
            isActive={routers.asPath === "/faq"} // @ts-ignore
            onClick={() => router.push("faq", null, { shallow: true })}
          >
            <BaseBrainSvg /> База знаний
          </Button>
          <Button
            isActive={routers.asPath === "/documents"} // @ts-ignore
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
          borderLeft: "1px solid #EBEBEB",
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
        <div style={{ transition: "all 0.4s", opacity: opacity }}>
          {children}
        </div>
      </div>
    </div>
  );
};
