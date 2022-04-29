import React from 'react';
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom"; // 3.5 - Importando do RRD para fazer navegação


import './Task.css';

// A TELA PRINCIPAL É AQUI

// 2.1 - Declarando HANDLETASKDELETION em função TASK
const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {

    // 3.6 - Implementando HOOK 
    const history = useHistory();  
    
    // 3.7 - Linkando template para o título da task
    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`);
    };

    // 1.5 - Usando estilo condicional para CASO seja completado, será estilizado.
    return (
        <div className="task-container" style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}>

            {/* 1.6 - Evento (onClick) que realizará o preenchimento caso a tarefa seja completada */}
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            {/* 2.2 - Passando para onClick a função de deletar */}
            <div className="buttons-container" >
                <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}>
                    < CgClose /> 
                </button>

                {/* 2.3 - Informações da Task */}
                {/* 3.8 - Chamando HOOK de history para evento onClick */}
                <button className="see-task-details-button" onClick={handleTaskDetailsClick}>
                    < CgInfo /> 
                </button>
            </div>
        </div>
    );
};
 
export default Task;