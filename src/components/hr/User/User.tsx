import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { ArrowBack } from "../../pages/Test/Svg/ArrowBack";
import { Column } from "./Column/Column";
import styles from "./styles.module.css";
import { Cross } from "./Svg";
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
  var store = require("store");
  const dataTable = store.get("table");

  const [title, setTitle] = useState("");
  const [columns, setColumns] = useState({});
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
  const [modal, setModal] = useState(false);
  useEffect(() => {
    setColumns(dataTable.data);
  }, []);
  return (
    <div className={styles.root}>
      {modal && (
        <div
          style={{
            position: "absolute",
            zIndex: "9999",
            left: "0px",
            top: "0px",
            height: "100vh",
            width: "100vw",
            background: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: "425px",
              height: "412px",
              background: "#FFFFFF",
              boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.16)",
              borderRadius: "8px",
              padding: 32,
              display: "flex",
              gap: 16,
              flexDirection: "column",
            }}
          >
            <div>
              <div className={styles.headModal}>
                <div>Добавление задачи</div>
                <div>
                  <Cross />
                </div>
              </div>
            </div>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Заголовок"
              className={styles.inputModal}
            />
            <textarea
              style={{ height: "136px" }}
              placeholder="Описание"
              className={styles.inputModal}
            />
            <button
              onClick={() => {
                if (title.trim()) {
                  dataTable.data.todo.list.push(title);
                  // @ts-ignore
                  columns.todo.list.push(title);
                  store.set("table", { data: { ...dataTable.data } });
                }
                setModal(false);
              }}
              className={styles.buttonModal}
            >
              Создать
            </button>
          </div>
        </div>
      )}
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
            {Object.values(columns).map((col: any) => (
              <div
                key={col.id}
                style={{ display: "flex", flex: "1", flexDirection: "column" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginRight: "18px",
                  }}
                  className={styles.headTable}
                >
                  {col.id}
                  {col.id === "Назначены" && (
                    <div
                      style={{
                        fontFamily: "'Inter'",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "20px",
                        textAlign: "right",
                        color: "#8C64D8",
                        cursor: "pointer",
                      }}
                      onClick={() => setModal(true)}
                    >
                      Добавить задачу
                    </div>
                  )}
                </div>
                <Column id={col.id} col={col} label={col.label} />
              </div>
            ))}
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};
