import { useRouter } from "next/router";
import styles from "./styles.module.css";
import { WTFSVG } from "./Svg";

export const User = ({ item }: any) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.query = item;
        router.push("user", "", { shallow: true });
      }}
      className={styles.row}
    >
      <div>
        <input
          style={{
            margin: "0px",
            padding: "0px",
            width: "16px",
            height: "16px",
            colorScheme: "white",
          }}
          type="checkbox"
        />
      </div>
      <div className={styles.textTable} style={{ display: "flex", flex: "1" }}>
        {item.name}
      </div>
      <div className={styles.textTable} style={{ display: "flex", flex: "1" }}>
        {item.depart}
      </div>
      <div className={styles.textTable} style={{ display: "flex", flex: "1" }}>
        {item.role}
      </div>
      <div
        className={styles.textTable}
        style={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          fontSize: "12px",
          color: "#787878",
        }}
      >
        <div>{item.progress}</div>
        <div className={styles.progressBar}>
          <div
            style={{
              height: "6px",
              background: "#1EC025",
              transition: "all 0.4s",
              width: item.progress,
            }}
          />
        </div>
      </div>
      <div>
        <WTFSVG />
      </div>
    </div>
  );
};
