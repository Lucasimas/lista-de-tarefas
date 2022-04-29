import React from "react";
import { useParams, useHistory } from "react-router-dom";

// 2.9 - Reutilizando o botão
import Button from "./Button";

import './TaskDetails.css';

// 2.8 - Construindo a "tela" de detalhes
const TaskDetails = () => {

  // 3.5 - Passando parâmetro do título da task (parâmetros da URL usando "Hook")
  const params = useParams();

  // 3.9 - Implementando função do botão "Voltar"
  const history = useHistory();

  // 4.0 - Montando funcionalidade 
  const handleBackButtonClick = () => {
    history.goBack();
  };
  

  return (
    <>
      {/* 3.0 - Inserindo botão */}
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>

      {/* 3.1 - Adicionando container onde vai o texto dos detalhes */}
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          O Lorem Ipsum é um texto modelo da indústria tipográfica e de
          impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
          estas indústrias desde o ano de 1500, quando uma misturou os
          caracteres de um texto para criar um espécime de livro.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
