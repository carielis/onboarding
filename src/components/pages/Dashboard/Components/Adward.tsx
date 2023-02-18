/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import image1 from "../Images/chess-dynamic-premium.png";
import image2 from "../Images/crow-dynamic-premium.png";
import image3 from "../Images/notify-heart-dynamic-premium.png";
import image4 from "../Images/trophy-dynamic-premium.png";
import image5 from "../Images/megaphone-dynamic-premium.png";
import image6 from "../Images/notebook-dynamic-premium.png";
import styles from "./adward.module.css";
export const Adward = ({ set = 0 }) => {
  const dataSet = [image1, image2, image3, image4, image5, image6];
  return (
    <div className={styles.card}>
      {dataSet[set] && <Image src={dataSet[set]} />}
    </div>
  );
};
