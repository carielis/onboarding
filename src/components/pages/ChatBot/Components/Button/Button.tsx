import styles from "./Button.module.css";

export const Button = ({ children, ...other }: any) => {
  return (
    <button
      className={
        styles.button +
        " " +
        (other.secondary ? styles.buttonSecondary : styles.buttonPrimary)
      }
      {...other}
    >
      {children}
    </button>
  );
};
