import { ReactNode } from "react";
import styless from "./Card.module.css";

interface Props {
  children?: ReactNode;
}

function Card({ children }: Props): JSX.Element {
  return <div className={styless.card}>{children}</div>;
}

export default Card;
