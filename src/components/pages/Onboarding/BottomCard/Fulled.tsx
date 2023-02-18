import { Document, Message } from "../Components/Svg";
import styles from "./fulled.module.css";

export const Fulled = () => {
  return (
    <div className={styles.card}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={styles.title}>Прийти в офис</div>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <ClipBoard />{" "}
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "11px",
              lineHeight: "13px",
              fontFamily: '"Inter"',
              color: "#A2A1A1",
            }}
          >
            1
          </span>
        </div>
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <div
          style={{ color: "#8C64D8", background: "#F3EFFB" }}
          className={styles.status}
        >
          Дизайн
        </div>
        <div
          style={{ color: "#787878", border: "1px solid #DFDFDF" }}
          className={styles.status}
        >
          Иконки
        </div>
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <Document />
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "13px",
              fontFamily: '"Inter"',
              color: "#A2A1A1",
            }}
          >
            4
          </span>
        </div>
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <Message />
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "13px",
              fontFamily: '"Inter"',
              color: "#A2A1A1",
            }}
          >
            4
          </span>
        </div>
      </div>
    </div>
  );
};

const ClipBoard = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M13.5329 3.03999H6.46621C4.40788 3.03999 2.74121 4.71499 2.74121 6.76499V14.6067C2.74121 16.6567 4.41621 18.3317 6.46621 18.3317H13.5245C15.5829 18.3317 17.2495 16.6567 17.2495 14.6067V6.76499C17.2579 4.70666 15.5829 3.03999 13.5329 3.03999Z"
        fill="#AEAEAE"
      />
      <path
        d="M11.9585 1.66667H8.0418C7.17513 1.66667 6.4668 2.36667 6.4668 3.23334V4.01667C6.4668 4.88334 7.1668 5.58334 8.03346 5.58334H11.9585C12.8251 5.58334 13.5251 4.88334 13.5251 4.01667V3.23334C13.5335 2.36667 12.8251 1.66667 11.9585 1.66667ZM9.00846 14.125C8.85013 14.125 8.6918 14.0667 8.5668 13.9417L7.3168 12.6917C7.20056 12.5741 7.13538 12.4154 7.13538 12.25C7.13538 12.0846 7.20056 11.926 7.3168 11.8083C7.55846 11.5667 7.95846 11.5667 8.20013 11.8083L9.00846 12.6167L11.9001 9.72501C12.1418 9.48334 12.5418 9.48334 12.7835 9.72501C13.0251 9.96667 13.0251 10.3667 12.7835 10.6083L9.45013 13.9417C9.33346 14.0667 9.1668 14.125 9.00846 14.125Z"
        fill="#AEAEAE"
      />
    </svg>
  );
};
