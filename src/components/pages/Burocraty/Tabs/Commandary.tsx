import { Document } from "../Svg/Doc";
import { Document2 } from "../Svg/Doc2";
import styles from "./commandary.module.css";
import { Card } from "./Components/Card";

export const Commandary = ({ data }: any) => {
  return (
    <div className={styles.wrapper}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 158,
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <div className={styles.header}>{data.head}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {data.desc.map((text: string) => {
                return (
                  <div key={text} className={styles.mainDescription}>
                    {text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0px",
            gap: "16px",
          }}
        >
          <div className={styles.header}>К кому обратиться за помощью?</div>
          <div className={styles.mainDescription}>
            По всем вопросам и возникшим проблемам вас проконсультируют
            следующие люди
          </div>
          <div>
            <Card />
          </div>
          <div className={styles.header}>Документы</div>
          <div className={styles.mainDescription}>
            Список всех документов которые понадобятся вам для оформления
            командировки
          </div>
          <div>
            <div
              style={{ display: "flex", gap: 12, alignItems: "center" }}
              className={styles.mainDescription}
            >
              <Document />
              Документ.pdf
            </div>
            <div
              style={{ display: "flex", gap: 12, alignItems: "center" }}
              className={styles.mainDescription}
            >
              <Document2 /> Другой документище.doc
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
