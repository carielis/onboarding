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
import { Hero } from "./Svg/Hero";
import { Jira } from "./Svg/Jira";
import { Light } from "./Svg/Light";
import { Money } from "./Svg/Money";
import { Notion } from "./Svg/Notion";

export const WrapperHr = ({ children }: any) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [theme, setTheme] = useState("light");
  const [progress, setProgress] = useState({
    current: 8,
    total: 24,
    result: (100 / 24) * 0,
  });

  useEffect(() => {
    setProgress({
      current: 8,
      total: 24,
      result: (100 / 24) * 8,
    });
  }, []);
  const [opacity, setOpacity] = useState(1);
  const routers = useRouter();
  console.log(routers.asPath);
  const router = {
    push: (page: string, i: any, data: any) => {
      setOpacity(0);
      routers.asPath = "/" + page;
      setTimeout(() => routers.push(`/${page}`, i, data), 500);
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
            isActive={routers.asPath === "/hr/dashboard"} // @ts-ignore
            onClick={() => router.push("hr/dashboard", null, { shallow: true })}
            onMouseEnter={() => {
              setMouseEnter(true);
            }}
            onMouseLeave={() => {
              setMouseEnter(false);
            }}
          >
            {!mouseEnter || routers.asPath !== "/hr/dashboard" ? (
              <DashboardMouse />
            ) : (
              <DashboardSvg />
            )}
            Дашборд
          </Button>

          <Button
            isActive={routers.asPath === "/hr/contacts"} // @ts-ignore
            onClick={() => router.push("hr/contacts", null, { shallow: true })}
          >
            <CollegueSvg /> Сотрудники
          </Button>
          <Button
            style={{ fontSize: "15px" }}
            isActive={routers.asPath === "/hr/tests"} // @ts-ignore
            onClick={() => router.push("hr/tests", null, { shallow: true })}
          >
            <Burocraty /> Тесты
          </Button>

          <Button
            isActive={routers.asPath === "/hr/calendary"} // @ts-ignore
            onClick={() => router.push("hr/calendary", null, { shallow: true })}
          >
            <CalendarySvg /> Календарь
          </Button>
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
        <div
          style={{
            transition: "all 0.4s",
            opacity: opacity,
            overflowY: routers.asPath === "/onboard" ? "hidden" : "auto",
            overflowX: "hidden",
            display: "flex",
            flex: 1,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
