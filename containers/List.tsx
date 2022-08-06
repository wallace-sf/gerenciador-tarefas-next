import { NextPage } from "next";
import React from "react";
import { Task } from "../types/Task";

type ListProps = {
  tasks: Task[];
  getFilteredList: () => void;
};

export const Item: NextPage<ListProps> = ({ tasks, getFilteredList }) => {
  return (
    <div
      className={"container-listagem" + tasks?.length ? "" : "vazia"}
    >
      {" "}
    </div>
  );
};
