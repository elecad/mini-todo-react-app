import React, { ReactNode, useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";

interface Props {
  children?: ReactNode;
  addTask: (header: string, description: string) => void;
}

function FormAdd({ children, addTask }: Props): JSX.Element {
  const [header, setHeader] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const setFormState = (e: React.FormEvent) => {
    e.preventDefault();
    if (header.trim() && description.trim()) {
      addTask(header.trim(), description.trim());
      setHeader("");
      setDescription("");
    }
  };

  return (
    <Card>
      <div className={"header mb3"}>Добавить задание:</div>
      <form onSubmit={setFormState} method="POST">
        <Input
          type="text"
          placeholder="Заголовок"
          value={header}
          onChange={(e) => {
            setHeader(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="Описание"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <div className="d-flex align-center justify-end">
          <Button type="submit">Добавить</Button>
        </div>
      </form>
    </Card>
  );
}

export default FormAdd;
