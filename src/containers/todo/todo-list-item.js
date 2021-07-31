import React from "react";
import styles from "./todo.module.scss";
import classNames from "classnames";

export const TodoListItem = ({ todo, onDelete, onMarkAsDone }) => {

    // un closure que retorna el manejador del evento click
    const handleDelete = (item) => {
        return () => {
            onDelete && onDelete(item);
        };
    };

    const handleSelect = (item) => {
        return () => {
            onMarkAsDone && onMarkAsDone(item, !item.done);
        };
    };


    return (
        <div className={styles.todoItem}>
            <input type="checkbox" checked={todo.done} onChange={handleSelect(todo)} />
            <div  className={classNames(styles.title, { [styles.done]: todo.done })}>{todo.title}</div>
            <input type="button" value="Eliminar" onClick={handleDelete(todo)} />
        </div>
    );
};