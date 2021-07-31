import React from "react";
import { TodoListItem } from "./todo-list-item";
import { TodoListForm } from "./todo-list-form";
import styles from "./todo.module.scss";
import { v4 as uuid } from "uuid";

export const TodoList = () => {

    // getter y setter
    const [todoList, setTodoList] = React.useState([{
        id: uuid(),
        title: "tarea 1",
        done: true,
    },
    {
        id: uuid(),
        title: "tarea 2",
        done: false,
    }]);

    const handleAdd = (value) => {
        //  const newValues = [].concat(todoList, [{ title: value }]);
        //  setTodoList(newValues)

        setTodoList(items => [].concat(items, [{ id: uuid(), title: value, done: false }]));
    };

    const handleDelete = (item) => {
        setTodoList(items => items.filter(it => it.id !== item.id));
    }

    const handleMarkAsDone = (item, isDone) => {
        setTodoList(items => items.map(it => {
            if (it.id === item.id) {
                return {
                    ...it,
                    done: isDone,
                };
            }
            return it;
        }));
    }

    return (
        <div>
            <TodoListForm onAdd={handleAdd} />
            <div className={styles.todoWrapper}>
                {todoList.map((todo, index) => {
                    return (<TodoListItem key={todo.id} todo={todo} onDelete={handleDelete} onMarkAsDone={handleMarkAsDone}  />);}
                )}
            </div>
        </div>
    )
}