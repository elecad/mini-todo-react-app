import "./Input.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ ...props }: Props): JSX.Element {
  return <input {...props}></input>;
}

export default Input;
