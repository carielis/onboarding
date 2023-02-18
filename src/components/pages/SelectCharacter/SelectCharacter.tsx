import { useRouter } from "next/router";
import { useState } from "react";
import { LogoSvg } from "../../../svg/Logo";
import { Checkbox } from "./Checkbox";
import styles from "./styles.module.css";

export const SelectCharacter = () => {
  const [hero, setHero] = useState(0);
  const router = useRouter();
  return (
    <div className={styles.root}>
      <div className={styles.leftSide}>
        <div>
          <LogoSvg />
        </div>
        <div className={styles.headerLeft}>
          Выбери своего напарника для онбординга
        </div>
        <div className={styles.descriptionLeft}>
          Он будет сопровождать тебя на всем пути онбординга, к нему ты всегда
          сможешь обратиться за помощью
        </div>
        <div style={{ display: "flex", gap: 22 }}>
          <div>
            {hero == 1 && (
              <div className={styles.checkbox}>
                <Checkbox />
              </div>
            )}
            <div className={styles.hero1} />
            <button
              onClick={() => setHero(1)}
              className={
                hero == 1 ? styles.buttonSelected : styles.buttonSelect
              }
            >
              Клювик
            </button>
          </div>
          <div>
            {hero == 2 && (
              <div className={styles.checkbox}>
                <Checkbox />
              </div>
            )}
            <div className={styles.hero2} />
            <button
              onClick={() => setHero(2)}
              className={
                hero == 2 ? styles.buttonSelected : styles.buttonSelect
              }
            >
              Поплик
            </button>
          </div>
          <div>
            {hero == 3 && (
              <div className={styles.checkbox}>
                <Checkbox />
              </div>
            )}
            <div className={styles.hero3} />
            <button
              onClick={() => setHero(3)}
              className={
                hero == 3 ? styles.buttonSelected : styles.buttonSelect
              }
            >
              Рыблик
            </button>
          </div>
        </div>
        <div className={styles.HeroHeader}>Поплик</div>
        <div className={styles.HeroDecription}>
          Поплинк — молодой клоун, который живет со своим отцом, Марлином в
          актинии. Прежде, чем он вылупился из его икринки, мать Немо
        </div>
        <button
          onClick={() => router.push("dashboard", "", { shallow: true })}
          className={styles.button}
        >
          Продолжить с попликом
        </button>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.poplick} />
      </div>
    </div>
  );
};
