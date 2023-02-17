import styles from "./styles.module.css";

export const Button = ({ children, ...other }: any) => {
  return (
    <button
      className={other.isActive ? styles.activeBtn : styles.button}
      {...other}
    >
      {children}
    </button>
  );
};
