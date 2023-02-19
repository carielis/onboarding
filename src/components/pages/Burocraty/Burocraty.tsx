import { useState } from "react";
import styles from "./styles.module.css";
import { AdvancedSalary } from "./Svg/AdvancedSalary";
import { Bolnicnii } from "./Svg/Bolnichnii";
import { Komandirovki } from "./Svg/Comandirovki";
import { Leave } from "./Svg/Leave";
import { Otpysk } from "./Svg/Otpysk";
import { Salary } from "./Svg/Salary";
import { Commandary } from "./Tabs/Commandary";
export const Burocraty = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Кадровые вопросы</div>
      <div className={styles.tabSelect}>
        <div onClick={() => setTab(1)} className={styles.tab}>
          <div style={{ display: "flex", gap: 8 }}>
            <Otpysk />
            Отпуск
          </div>
          {tab === 1 && <div className={styles.selectedTab} />}
        </div>
        <div onClick={() => setTab(2)} className={styles.tab}>
          <div style={{ display: "flex", gap: 8 }}>
            <Bolnicnii />
            Больничный
          </div>
          {tab === 2 && <div className={styles.selectedTab} />}
        </div>
        <div onClick={() => setTab(3)} className={styles.tab}>
          <div style={{ display: "flex", gap: 8 }}>
            <Salary /> Зарплата
          </div>
          {tab === 3 && <div className={styles.selectedTab} />}
        </div>
        <div onClick={() => setTab(4)} className={styles.tab}>
          <div style={{ display: "flex", gap: 8 }}>
            <AdvancedSalary />
            Примеии
          </div>
          {tab === 4 && <div className={styles.selectedTab} />}
        </div>
        <div onClick={() => setTab(5)} className={styles.tab}>
          <div style={{ display: "flex", gap: 8 }}>
            <Komandirovki />
            Командировки
          </div>
          {tab === 5 && <div className={styles.selectedTab} />}
        </div>
      </div>
      <div>
        {" "}
        <Commandary data={mock[tab]} />
      </div>
    </div>
  );
};
const mock: any = {
  1: {
    head: "Оформление отпуска",
    desc: [
      "Оформление отпуска Использовать ежегодный оплачиваемый отпуск возможно после 6 месяцев работы в компании, после чего нужно внести себя в график отпусков и оповестить об этом HR-менеджера",
      "Перед выходом в отпуск необходимо написать заявление заранее – не позднее, чем за две недели до предполагаемого периода отдыха, оплата отпуска производится не позднее чем за три дня до его начала",
      "Шаблон заявления нужно распечатать, заполнить и передать HR-менеджеру",
    ],
  },
  2: {
    head: "Выход на больничный",
    desc: [
      "При болезни необходимо уведомить непосредственного руководителя в первый день отсутствия на работе. Офромить и закрыть больничный лист нужно в лечебном учреждении.",
      "Выйти на работу можно на следующий рабочий день от даты закрытия больничного листа. ",
      "Шаблон заявления нужно распечатать, заполнить и передать HR-менеджеру",
    ],
  },
  3: {
    head: "Зарплата",
    desc: [
      "Заработная плата начисляется 2 раза в месяц, аванс выплачивается до 30 числа того же месяца, зарплата — до 15 числа следующего — не позднее 15 дней после завершения очередной половины месяца",
      "При возникновении вопросов о начислении зарплаты обращаться к сотруднику бухгалтерии",
    ],
  },

  4: {
    head: "Получение премии",
    desc: [
      "Премиальное вознаграждение выдается нерегулярно и оформлется отдельным приказом",
      "Если коллектив успешно завершает рабочий квартал, то сотрудникам могут выплатить премии. Разовое квартальное премирование вполне может стать постоянным. Для этого понадобится стабильно добиваться достижения или превышения ключевых показателей в работе",
    ],
  },
  5: {
    head: "Закрытие командировки",
    desc: [
      "Чтобы отчитаться за командировку, говоря формальным языком, необходимо закрыть долги по подотчету, сдать авансовые отчеты с приложением к ним документов, подтверждающих расходы.",
      "Сначала нужно скачать документ. Дальше будет пример отчёта дизайнера за командировку, но в целом процесс одинаковый для всех и отличается только на этапе заполнения формы на этапе загрузки заполненных документов.",
    ],
  },
};
