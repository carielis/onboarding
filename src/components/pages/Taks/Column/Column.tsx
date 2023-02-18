import { Droppable, resetServerContext } from "react-beautiful-dnd";
import { Fulled } from "../Components/Fulled";
import styles from "../styles.module.css";
export const Column = ({ col: { list, id, label } }: any) => {
  return (
    <Droppable droppableId={label}>
      {(provided) => (
        <div
          className={styles.table}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {list.map((text, index) => (
            <Fulled key={text} text={text} index={index} />
          ))}
        </div>
      )}
    </Droppable>
  );
};
