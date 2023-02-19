import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { ArrowBack } from "../../pages/Test/Svg/ArrowBack";
import { Column } from "./Column/Column";
import styles from "./styles.module.css";
import { UserPic } from "./UserPic";
export const User = () => {
  const [tab, setTab] = useState(2);
  const mock = {
    todo: {
      label: "todo",
      id: "Назначены",
      list: [
        "Найти офис",
        "Получить пропуск",
        "Познакомиться с ментором",
        "Посетить экскурсию по офису",
      ],
    },
    inprogess: {
      label: "inprogess",
      id: "В процессе",
      list: [
        "Указать пожелания к рабочему месту",
        "Сдать тест профессиональный",
      ],
    },
    approved: {
      label: "approved",
      id: "Проверка",
      list: [],
    },
    completed: {
      label: "completed",
      id: "Выполнено",
      list: [
        "Знакомство с корпоративной культурой",
        "Изучение первых документов",
      ],
    },
  };
  const [columns, setColumns] = useState(mock);
  const onDragEnd = ({ source, destination }: DropResult) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    // Set start and end variables
    // @ts-ignore
    const start = columns[source.droppableId];
    // @ts-ignore
    const end = columns[destination.droppableId];
    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start?.list?.filter?.(
        (_: any, idx: number) => idx !== source.index
      );

      // Then insert the item at the right location
      newList?.splice?.(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        label: start?.label,
        list: newList,
        id: start.id,
      };

      // Update the state
      setColumns((state) => ({ ...state, [newCol.label]: newCol }));
      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      );

      // Create a new start column
      const newStartCol = {
        label: start.label,
        list: newStartList,
        id: start.id,
      };

      // Make a new end list array
      const newEndList = end.list;

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);

      // Create a new end column
      const newEndCol = {
        label: end.label,
        list: newEndList,
        id: end.id,
      };

      // Update the state
      setColumns((state) => ({
        ...state,
        [newStartCol.label]: newStartCol,
        [newEndCol.label]: newEndCol,
      }));
      return null;
    }
  };
  return (
    <div className={styles.root}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ArrowBack color="black" />
        Обратно к сотрудникам
      </div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            paddingTop: "12px",
          }}
        >
          <UserPic />
          <div
            style={{
              fontFamily: "'Inter'",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "32px",
              width: "186px",
            }}
          >
            Серёгин Марк Алексеевич
          </div>
          <div>
            <div className={styles.little}>Отдел</div>
            <div className={styles.medium}>Дизайн</div>
          </div>
          <div>
            <div className={styles.little}>Должность</div>
            <div className={styles.medium}>Старший дизайнер</div>
          </div>
          <div>
            <div className={styles.little}>40%</div>
            <div className={styles.progress}>
              <div
                style={{
                  background: "#1EC025",
                  height: "6px",
                  width: "40%",
                  borderRadius: "32px",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "16px", marginTop: "32px" }}>
          <div onClick={() => setTab(2)} className={styles.tab}>
            <div style={{ display: "flex", gap: 8 }}>День 1 (10.02.2022)</div>
            {tab === 2 && <div className={styles.selectedTab} />}
          </div>
          <div onClick={() => setTab(3)} className={styles.tab}>
            <div style={{ display: "flex", gap: 8 }}>День 2 (11.02.2022)</div>
            {tab === 3 && <div className={styles.selectedTab} />}
          </div>
          <div onClick={() => setTab(4)} className={styles.tab}>
            <div style={{ display: "flex", gap: 8 }}>День 3 (13.02.2022)</div>
            {tab === 4 && <div className={styles.selectedTab} />}
          </div>
          <div onClick={() => setTab(5)} className={styles.tab}>
            <div style={{ display: "flex", gap: 8 }}>День 4 (14.02.2022)</div>
            {tab === 5 && <div className={styles.selectedTab} />}
          </div>
          <div onClick={() => setTab(6)} className={styles.tab}>
            <div style={{ display: "flex", gap: 8 }}>День 5 (15.02.2022)</div>
            {tab === 6 && <div className={styles.selectedTab} />}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            marginTop: "16px",
          }}
        >
          <div className={styles.headerText}>Оформление документов</div>
          <div className={styles.medium} style={{ width: "920px" }}>
            Сегодня вам нужно выполнить Постановка задачи — точная формулировка
            условий задачи с описанием входной и выходной информации. Входная
            информация по задаче — данные, поступающие на вход задачи и
            используемые для её решения
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <DragDropContext onDragEnd={onDragEnd}>
            {Object.values(columns).map((col) => (
              <div
                key={col.id}
                style={{ display: "flex", flex: "1", flexDirection: "column" }}
              >
                <div className={styles.headTable}>{col.id}</div>
                <Column id={col.id} col={col} label={col.label} />
              </div>
            ))}
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};
