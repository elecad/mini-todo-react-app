import "./TaskCard.css";

import Task from "../../model/Task";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

interface Props extends Task {
  removeTask: (id: number) => void;
  toggleCheckTask: (id: number) => void;
}

function TaskCard({
  header,
  description,
  checked,
  id,
  removeTask,
  toggleCheckTask,
}: Props): JSX.Element {
  return (
    <Card>
      <div className="d-flex">
        <div className="d-flex align-center" style={{ marginRight: "10px" }}>
          <Input
            type="checkbox"
            style={{ width: "20px", margin: "5px" }}
            checked={checked}
            onChange={(e) => {
              toggleCheckTask(id);
            }}
          ></Input>
        </div>
        <div>
          <div className="header mb2">{header}</div>
          <div className="caption mb2">{description}</div>
          <div>Дата: {new Date(id).toLocaleString()}</div>
        </div>
        <div
          className="d-flex justify-end align-center"
          style={{ marginLeft: "auto" }}
        >
          <Button
            style={{ backgroundColor: "red" }}
            onClick={() => removeTask(id)}
          >
            Удалить
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default TaskCard;
