import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom"; // 2.4 - Configurando rotas das pages //2.6 - Implementando rotas 
import axios from 'axios'; // 4.1 - Fazendo requisição HTTP

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails"; // 3.3 - Importando TaskDetails

import "./App.css";

// Lista de Tarefas
const App = () => {

  // let message = " Hello World!";
  const [tasks, setTasks] = useState([
    // Lista de Objetos
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },

    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
  ]);

  // 4.2 - HOOK que executa bloco toda hora que uma variável muda
  useEffect(() => {
    // console.log("Elemento foi renderizado pela primeira vez.");

    // 4.3 - Fazendo que a requisição seja assíncrona (retorne algo)
    const fetchTasks = async () => {
      
      // 4.4 - Montando HTTP com Axios
      const {data} = await axios.get ("https://jsonplaceholder.cypress.io/todos?_limit=10");

      // 4.6 - Retornando os dados da API na tela
      setTasks (data);
    };

    // 4.5 - Chamando a requisição
    fetchTasks();
  }, []);

  // 1 - Função para completar uma tarefa
  const handleTaskClick = (taskId) => {

    // 1.1 - Mapeamento de cada Task
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });

    setTasks(newTasks);
  };

  //Função que adiciona no useStates da TASK
  const handleTaskAddition = (taskTitle) => {

    //Const newtesks = TUDO que está em const TASKS, dps especifica o quê (id, titulo, etc)
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(), //Vai gerar um UUID aleatório
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  // 1.7 - Função para REMOVER task
  const handleTaskDeletion = (taskId) => {

    // 1.8 - Se task for diferente de ID de TASK, ADICIONE.
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  // HTML do Container que renderiza as Tarefas - PARTE PRINCIPAL 2
  return (
    // 2.5 - O que era apenas componente (<>,</>) se tornou <Router></Router>. obs: reiniciar o server
    <Router>
      <div className="container">
        
        {/* Elemento PAI que renderiza FILHO (Tasks.js) */}
        <Header />

        {/* 2.7 - Fragmentando rota da tela menu */}
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />

              {/* 1.2 - Ao clicar na task, o handleAddClick é passado */}
              {/* 1.9 - Passando a Prop de handleTaskDeletion */}
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />

        {/* 3.2 - Direcionando para os componentes de detalhes da tarefa */}
        {/* 3.4 - Passando no Path o que está no import (:taskTitle) */}
        <Route path="/:taskTitle" exact component = {TaskDetails}  />       

      </div>
    </Router>
  );
};

export default App;
