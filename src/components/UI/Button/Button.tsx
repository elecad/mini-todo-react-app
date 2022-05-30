import { ButtonHTMLAttributes } from "react";

import "./Button.css";

function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return <button {...props}>{children}</button>;
}

export default Button;
