import { NextPage } from "next";
import React from "react";

type HeaderProps = {
  logout: () => void;
};

export const Header: NextPage<HeaderProps> = ({ logout }) => {
  const fullName = typeof window !== 'undefined' && localStorage.getItem("userName") || "";
  const userName = fullName?.split(" ")[0] || "...";

  return (
    <div className="container-header">
      <img src="/public/assets/images/logo.svg" alt="Logo FIAP" className="logo" />
      <button type="button">Adicionar tarefa</button>
      <div className="mobile">
        <span>Olá {userName}</span>
        <img src="/public/assets/exit-mobile" alt="Sair" onClick={logout} />
      </div>
      <div className="desktop">
        <span>Olá {userName}</span>
        <img src="/public/assets/exit-desktop" alt="Sair" onClick={logout} />
      </div>
    </div>
  );
};
