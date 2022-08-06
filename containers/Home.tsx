import { NextPage } from "next";
import React, { useState } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Filter } from "./Filter";
import { AccessTokenProps } from "../types/AccessTokenProps";
import { Task } from "../types/Task";

export const Home: NextPage<AccessTokenProps> = ({ setAccessToken }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const logout = (): void => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("userMail");
    setAccessToken("");
  };

  return (
    <>
      <Header logout={logout} />
      <Filter />
      <Footer />
    </>
  );
};
