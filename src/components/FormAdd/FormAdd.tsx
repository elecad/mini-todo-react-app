import { ReactNode } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";

interface Props {
  children?: ReactNode;
}

function FormAdd({ children }: Props): JSX.Element {
  return (
    <Card>
      <div className={"header mb3"}>Добавить задание:</div>
      <form>
        <Input type="text" placeholder="Заголовок" />
        <Input type="text" placeholder="Описание" />
        <div className="d-flex align-center justify-end">
          <Button>Добавить</Button>
        </div>
      </form>
    </Card>
  );
}

export default FormAdd;
