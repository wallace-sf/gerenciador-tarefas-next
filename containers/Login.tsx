import React from "react";

export const Login: React.FC = () => {
  return (
    <div className="container-login">
      <img src="/assets/images/logo.svg" alt="Logo Fiap" className="logo" />
      <form>
        <div className="input-block">
          <img src="/assets/images/mail.svg" alt="Informe seu login" />
          <input type="text" placeholder="Login" />
        </div>
        <div className="input-block">
          <img src="/assets/images/lock.svg" alt="Informe sua senha" />
          <input type="password" placeholder="Senha" />
        </div>
        <button type="button">Login</button>
      </form>
    </div>
  );
};
