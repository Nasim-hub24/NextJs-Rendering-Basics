
import React from 'react';

const Todospage = async() => {

    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();

    return (
        <div>
            <h1>
                todos length is {todos.length};
            </h1>
        </div>
    );
};

export default Todospage;