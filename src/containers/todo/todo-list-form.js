import React from "react";

// React hooks
export const TodoListForm = ({ onAdd }) => {

    const [value, setValue] = React.useState("");
    const handleTextChange = ({ target: { value }}) => {
        setValue(value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd && onAdd(value)
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleTextChange} value={value} />
            <button type="submit" >Enviar</button>
        </form>
    );
};