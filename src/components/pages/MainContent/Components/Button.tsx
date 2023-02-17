import styles from "./styles.module.css";

export const Button = ({ children, ...other }: any) => {
  return (
    <button className={styles.button} {...other}>
      {children}
    </button>
  );
};
