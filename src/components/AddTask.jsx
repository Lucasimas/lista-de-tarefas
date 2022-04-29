import React, { useState } from 'react';
import "./AddTask.css";
import Button from './Button'

// [1] depois de declarar o handleTaskAdition no App, passar para a const de adicionar em "AddTask" e vai chamar o "Button"
const AddTask = ({handleTaskAddition}) => {

    // CONST para pegar e guardar o valor (state) e string vazia como padrão "('')" 
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    // [1.1] - FUNÇÃO que lida com a ação do usuário clicando em "Adicionar"
    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData(""); //Esvaziar depois que adicionar
    }

    return ( 
        <div className="add-task-container">
            <input onChange={handleInputChange} value={inputData} className="add-task-input" type="text" />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
            
        </div>

    );
}
 
export default AddTask;