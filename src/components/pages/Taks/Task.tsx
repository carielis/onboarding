import { useState } from "react";
import {
  DragDropContext,
  DropResult,
  resetServerContext,
} from "react-beautiful-dnd";
import { Column } from "./Column/Column";
import {
  Card,
  CardCompleteTask,
  CardReadyTask,
  CardWithHelper,
} from "./Components/Card";
import { Fulled } from "./Components/Fulled";
import styles from "./styles.module.css";

export const Task = () => {
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

  const [tab, setTab] = useState(1);
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
      <div className={styles.title}>Задачи</div>
      <div className={styles.containerCard}>
        <Card />
        <CardReadyTask />
        <CardCompleteTask />
        <CardWithHelper />
      </div>
      <div style={{ display: "flex", gap: "24px" }}>
        <Tab tab={tab} isTab={1} setTab={() => setTab(1)} />
        <Tab tab={tab} isTab={2} setTab={() => setTab(2)} />
        <Tab tab={tab} isTab={3} setTab={() => setTab(3)} />
        <Tab tab={tab} isTab={4} setTab={() => setTab(4)} />
        <Tab tab={tab} isTab={5} setTab={() => setTab(5)} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginTop: 24,
        }}
      >
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
  );
};

const Tab = ({ tab, setTab, isTab }: any) => {
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => setTab(2)}
      className={styles.tab}
    >
      <div style={{ display: "flex", gap: 8, paddingBottom: 4 }}>
        День 1 (10.02.2022)
      </div>
      {tab === isTab && <div className={styles.selectedTab} />}
    </div>
  );
};

/*

 <div style={{ display: "flex", flex: "1", flexDirection: "column" }}>
          <div className={styles.headTable}>Назначены</div>
          <div className={styles.table}>
            <Fulled />
            <Fulled />
            <Fulled />
          </div>
        </div>
*/
