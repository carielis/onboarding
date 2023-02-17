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
import { Burocraty } from "./Svg/Buroctary";
import { Confluence } from "./Svg/Confluence";
import { Dark } from "./Svg/Dark";
import { Figma } from "./Svg/Figma";
import { GitSvg } from "./Svg/Git";
import { Jira } from "./Svg/Jira";
import { Light } from "./Svg/Light";
import { Notion } from "./Svg/Notion";

export const Wrapper = ({ children }: any) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div
        style={{
          width: 232,
        }}
      >
        <div style={{ padding: "16px 0px 16px 24px" }}>
          <LogoSvg />
        </div>
        <div className={styles.menu}>
          <div className={styles.menuLabel}>МЕНЮ</div>
          <Button
            onMouseEnter={() => {
              setMouseEnter(true);
            }}
            onMouseLeave={() => {
              setMouseEnter(false);
            }}
          >
            {!mouseEnter ? <DashboardMouse /> : <DashboardSvg />} Дашборд
          </Button>
          <Button>
            <ContactSvg /> Контакты
          </Button>
          <Button>
            <CollegueSvg /> Коллеги
          </Button>
          <Button>
            <Burocraty /> Бюрократия
          </Button>
          <Button>
            <EventsSvg /> Проекты
          </Button>
          <Button>
            <EventsSvg /> Задачи
          </Button>
          <Button>
            <CalendarySvg /> Календарь
          </Button>
          <Button>
            <ChatBotSvg /> Чат бот
          </Button>
          <Button>
            <BaseBrainSvg /> База знаний
          </Button>
          <Button>
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
          <div className={styles.themeName}>
            <Light /> Light
          </div>
          <div className={styles.themeName}>
            <Dark /> Dark
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
