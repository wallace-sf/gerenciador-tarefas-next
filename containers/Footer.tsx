import React from "react";

export const Footer = () => {
  return <div className="container-footer">
    <button type="button">
      <img src="/add.svg" alt="Adicionar tarefa" />
      <span>Adicionar Tarefa</span>
    </button>
    <span>
    © Copyright {new Date().getFullYear()}. Todos os direitos reservados.
    </span>
  </div>
};
