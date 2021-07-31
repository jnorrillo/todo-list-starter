import React from "react";
import { TodoListItem } from "./todo-list-item";
import { TodoListForm } from "./todo-list-form";

export const TodoList = () => {

    const [todoList, setTodoList] = React.useState([{
        title: "tarea 1"
    }]);

    const handleAdd = (value) => {
        //  const newValues = [].concat(todoList, [{ title: value }]);
        //  setTodoList(newValues)

        setTodoList(items => [].concat(items, [{ title: value }]))
    }

    return (
        <div>
            <TodoListForm onAdd={handleAdd} />
            {todoList.map((todo, index) => {
                return (<TodoListItem key={index} todo={todo} />);}
            )}
            
        </div>
    )
}