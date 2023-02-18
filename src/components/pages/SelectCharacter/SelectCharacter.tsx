import { useRouter } from "next/router";
import { useState } from "react";
import { LogoSvg } from "../../../svg/Logo";
import { Checkbox } from "./Checkbox";
import styles from "./styles.module.css";

export const SelectCharacter = () => {
  const [hero, setHero] = useState(1);
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
        <div className={styles.HeroHeader}>{heroes[hero].title}</div>
        <div className={styles.HeroDecription}>{heroes[hero].desc}</div>
        <button
          onClick={() => router.push("dashboard", "", { shallow: true })}
          className={styles.button}
        >
          Продолжить с {heroes[hero].title}
        </button>
      </div>
      <div className={styles.rightSide}>
        <div className={styles[heroes[hero].className]} />
      </div>
    </div>
  );
};

const heroes: any = {
  ["1"]: {
    title: "Клювик",
    className: "klyvik",
    desc: "Клювик — прагматичный и серьезный представитель пернатых. Он внимательно будет следить за тобой в процессе онбординга и не упустит ни одной детали",
  },
  ["2"]: {
    title: "Поплик",
    className: "poplick",
    desc: "Морской котик Поплик воодушевит тебя своим позитивом и энергичностью. Он уж точно не будет ругать при ошибках во время тестирования, но не расслабляйся!",
  },
  ["3"]: {
    title: "Рыблик",
    className: "ryblik",
    desc: "Рыблик — крайне активный и харизматичный. В онбординге он как рыба в воде и будет рад помочь тебе с любым возникшим вопросом.",
  },
};
