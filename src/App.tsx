import React, { useState } from "react";

import Container from "./components/UI/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import FormAdd from "./components/FormAdd/FormAdd";
import TaskCard from "./components/TaskCard/TaskCard";
import Task from "./model/Task";
import useLocalStorage from "./hooks/useLocalStorage";

function App(): JSX.Element {
  const [tasks, setTasks] = useLocalStorage();

  const addTask = (header: string, description: string) => {
    setTasks([
      ...tasks,
      {
        id: +new Date(),
        checked: false,
        description: description.trim(),
        header: header.trim(),
      },
    ]);
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((el) => el.id !== id));
  };

  const toggleCheckTask = (id: number) => {
    const i = tasks.findIndex((el) => el.id === id);
    if (i >= 0) {
      const copy = [...tasks];
      copy[i].checked = !copy[i].checked;
      setTasks(copy);
    }
  };

  return (
    <Container>
      <NavBar title="ДелCheck" />
      <FormAdd addTask={addTask} />

      {tasks.map((task) => {
        return (
          <TaskCard
            id={task.id}
            header={task.header}
            description={task.description}
            checked={task.checked}
            key={task.id}
            removeTask={removeTask}
            toggleCheckTask={toggleCheckTask}
          ></TaskCard>
        );
      })}
    </Container>
  );
}

export default App;
