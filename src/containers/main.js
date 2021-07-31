import React from "react";
import { Album } from "./albums/album";
import { TodoList } from "./todo/todo-list";

export const Main = () => {
    return  (
        <div>
           <Album albumId={1} />
           {/* <TodoList /> */}
        </div>
    )
}

