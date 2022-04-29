import React from "react";
import Task from "./Task";


// HTML que representa o título do componente
// 1.3 - é passado a prop HANDLETASKCLICK na função TASKS 
const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {

    return (
        // Fazendo o mapeamento das tasks
        <>
            {/* 1.4 - A prop HANDLETASKCLICK é acionada no mapeamento pq vai saber que está "clicada" e 
            vai chamar a TASK em específico */}
            {/* 2.0 - Chamando a Prop HANDLETASKDELETION para deletar item e declarar na função (const) */}
            {tasks.map((task) => (
                <Task task = {task} handleTaskClick={handleTaskClick}  handleTaskDeletion={handleTaskDeletion}/>
            ))}
        </>
    );
   
};

export default Tasks;
