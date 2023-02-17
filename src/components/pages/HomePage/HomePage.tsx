import { FC, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
interface Props {}

export const HomePage: FC<Props> = () => {
  const router = useRouter();
  return (
    <div className={styles.root}>
      <div className={styles.leftSide}></div>
      <div className={styles.rightSide}>
        <header style={{ paddingBottom: 96, paddingLeft: 67 }}>
          <svg
            width="204"
            height="82"
            viewBox="0 0 204 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.013 0L16.5066 16.535H33.013V49.6036L49.5194 33.1084V0H33.013Z"
              fill="#EA5616"
            />
            <path
              d="M16.5064 49.6036L33.0128 33.0686H16.5064V0L0 16.4953V49.6036H16.5064Z"
              fill="white"
            />
            <path
              d="M66.0242 41.3361H74.6891V15.7073H87.893V41.3361H96.558V8.26754H66.0242V41.3361ZM150.2 20.6578H142.797V15.7073H159.283V8.26754H134.13V41.3361H150.612C157.22 41.3361 162.17 38.0176 162.17 30.9962C162.17 23.9748 157.22 20.6578 150.2 20.6578ZM149.374 34.3103H142.797V27.7028H149.374C151.418 27.7028 153.491 28.5099 153.491 30.9962C153.491 33.4825 151.421 34.3103 149.374 34.3103ZM117.771 34.2897C111.987 34.2897 108.736 30.0418 108.736 24.7908C108.736 20.5753 111.103 15.2845 117.606 15.2845C121.666 15.2845 124.285 17.7694 125.214 18.9271L130.482 13.6496C128.858 11.7005 126.826 10.1331 124.53 9.05818C122.233 7.98328 119.729 7.42724 117.195 7.42945C107.623 7.42945 100.069 14.526 100.069 24.7908C100.069 34.3795 107.623 42.1521 117.195 42.1521C119.915 42.1545 122.597 41.5145 125.024 40.2841C127.451 39.0537 129.554 37.2674 131.163 35.0703L125.858 29.7545C124.18 32.3867 121.447 34.2853 117.771 34.2853"
              fill="white"
            />
            <path
              d="M82.9546 73.8064C81.1099 75.6543 78.8523 76.5782 76.182 76.5782C73.5116 76.5782 71.254 75.6543 69.4094 73.8064C67.5647 71.9409 66.6423 69.6795 66.6423 67.0221C66.6423 64.3646 67.5647 62.112 69.4094 60.2641C71.254 58.3987 73.5116 57.4659 76.182 57.4659C78.8523 57.4659 81.1099 58.3987 82.9546 60.2641C84.7992 62.112 85.7216 64.3646 85.7216 67.0221C85.7216 69.6795 84.7992 71.9409 82.9546 73.8064ZM70.7006 72.5393C72.1764 74.0352 74.0035 74.7831 76.182 74.7831C78.3604 74.7831 80.1875 74.0352 81.6633 72.5393C83.139 71.0258 83.8769 69.1867 83.8769 67.0221C83.8769 64.8574 83.139 63.0271 81.6633 61.5312C80.1875 60.0177 78.3604 59.261 76.182 59.261C74.0035 59.261 72.1764 60.0177 70.7006 61.5312C69.2249 63.0271 68.487 64.8574 68.487 67.0221C68.487 69.1867 69.2249 71.0258 70.7006 72.5393Z"
              fill="white"
            />
            <path
              d="M97.9415 63.0623H99.6808V76.2614H97.9415V70.5066H90.352V76.2614H88.6127V63.0623H90.352V68.8171H97.9415V63.0623Z"
              fill="white"
            />
            <path
              d="M109.209 76.5782C107.312 76.5782 105.731 75.9535 104.466 74.7039C103.201 73.4368 102.568 71.8001 102.568 69.7939C102.568 67.5412 102.902 65.8165 103.57 64.6198C104.237 63.4055 105.59 62.3056 107.628 61.3201C108.014 61.1265 108.524 60.8977 109.156 60.6337C109.806 60.3697 110.29 60.1585 110.606 60.0001C110.94 59.8418 111.3 59.6394 111.686 59.393C112.073 59.129 112.363 58.8386 112.556 58.5218C112.749 58.2051 112.872 57.8267 112.925 57.3867L114.295 58.1787C114.225 58.601 114.084 58.997 113.873 59.3666C113.663 59.7362 113.443 60.0353 113.215 60.2641C113.004 60.4929 112.661 60.7481 112.187 61.0297C111.73 61.2937 111.37 61.4872 111.106 61.6104C110.861 61.716 110.421 61.9008 109.789 62.1648C109.174 62.4288 108.761 62.6048 108.55 62.6928C107.32 63.2207 106.416 63.7751 105.836 64.3558C105.256 64.919 104.843 65.6582 104.597 66.5733C105.195 65.7814 105.95 65.2006 106.864 64.831C107.795 64.4438 108.7 64.2503 109.578 64.2503C111.335 64.2503 112.784 64.831 113.926 65.9925C115.086 67.1365 115.665 68.606 115.665 70.401C115.665 72.1785 115.051 73.6568 113.821 74.8359C112.609 75.9975 111.071 76.5782 109.209 76.5782ZM109.209 74.8359C110.579 74.8359 111.704 74.4224 112.582 73.5952C113.478 72.7505 113.926 71.6858 113.926 70.401C113.926 69.0987 113.505 68.034 112.661 67.2069C111.836 66.3621 110.729 65.9397 109.341 65.9397C108.094 65.9397 106.96 66.3357 105.941 67.1277C104.922 67.902 104.413 68.9403 104.413 70.2427C104.413 71.5802 104.87 72.6801 105.783 73.5424C106.714 74.4048 107.856 74.8359 109.209 74.8359Z"
              fill="white"
            />
            <path
              d="M129.353 74.5984C128.017 75.9183 126.383 76.5782 124.451 76.5782C122.518 76.5782 120.876 75.9183 119.523 74.5984C118.188 73.2608 117.52 71.6154 117.52 69.6619C117.52 67.7084 118.188 66.0717 119.523 64.7518C120.876 63.4143 122.518 62.7456 124.451 62.7456C126.383 62.7456 128.017 63.4143 129.353 64.7518C130.705 66.0717 131.382 67.7084 131.382 69.6619C131.382 71.6154 130.705 73.2608 129.353 74.5984ZM120.762 73.384C121.763 74.3872 122.993 74.8887 124.451 74.8887C125.909 74.8887 127.139 74.3872 128.14 73.384C129.142 72.3633 129.642 71.1226 129.642 69.6619C129.642 68.2012 129.142 66.9693 128.14 65.9661C127.139 64.9454 125.909 64.435 124.451 64.435C122.993 64.435 121.763 64.9454 120.762 65.9661C119.76 66.9693 119.259 68.2012 119.259 69.6619C119.259 71.1226 119.76 72.3633 120.762 73.384Z"
              fill="white"
            />
            <path
              d="M141.355 62.7456C143.234 62.7456 144.833 63.4143 146.151 64.7518C147.486 66.0893 148.154 67.726 148.154 69.6619C148.154 71.5978 147.486 73.2344 146.151 74.572C144.833 75.9095 143.234 76.5782 141.355 76.5782C139.018 76.5782 137.244 75.6103 136.031 73.6744V81.5411H134.292V63.0623H136.031V65.6494C137.244 63.7135 139.018 62.7456 141.355 62.7456ZM137.534 73.384C138.535 74.3872 139.765 74.8887 141.223 74.8887C142.681 74.8887 143.911 74.3872 144.912 73.384C145.914 72.3633 146.414 71.1226 146.414 69.6619C146.414 68.2012 145.914 66.9693 144.912 65.9661C143.911 64.9454 142.681 64.435 141.223 64.435C139.765 64.435 138.535 64.9454 137.534 65.9661C136.532 66.9693 136.031 68.2012 136.031 69.6619C136.031 71.1226 136.532 72.3633 137.534 73.384Z"
              fill="white"
            />
            <path
              d="M161.599 74.572H163.444V79.7988H161.704V76.2614H150.953V79.7988H149.213V74.572H150.821C151.717 73.3928 152.165 71.7297 152.165 69.5827V63.0623H161.599V74.572ZM152.929 74.572H159.86V64.7518H153.904V69.5827C153.904 71.6066 153.579 73.2696 152.929 74.572Z"
              fill="white"
            />
            <path
              d="M175.667 63.0623H177.143V76.2614H175.404V66.0981L167.551 76.2614H166.075V63.0623H167.814V73.2256L175.667 63.0623Z"
              fill="white"
            />
            <path
              d="M190.15 63.0623H191.889V76.2614H190.15V70.5066H182.56V76.2614H180.821V63.0623H182.56V68.8171H190.15V63.0623Z"
              fill="white"
            />
            <path
              d="M204 63.0623V64.7518H197.306V76.2614H195.567V63.0623H204Z"
              fill="white"
            />
          </svg>
        </header>
        <div className={styles.authForm}>
          <h1>Логин</h1>
          <input className={styles.input} placeholder="Логин" />
          <input className={styles.input} placeholder="Пароль" />
          <label className={styles.recoverPassword}>Забыли пароль?</label>
          <button
            onClick={() => router.push("dashboard")}
            className={styles.button}
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};