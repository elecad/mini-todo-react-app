import React from "react";

import Container from "./components/UI/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import FormAdd from "./components/FormAdd/FormAdd";
import TaskCard from "./components/TaskCard/TaskCard";

function App(): JSX.Element {
  return (
    <Container>
      <NavBar title="ДелCheck" />
      <FormAdd />

      <TaskCard
        id={+new Date()}
        header="Тестовый заголовок"
        description="Тут какая-то интересная надпись, ГАВ"
        checked={true}
      ></TaskCard>
    </Container>
  );
}

export default App;
