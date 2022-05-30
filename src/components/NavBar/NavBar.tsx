import styles from "./NavBar.module.css";

interface Props {
  title: string;
}

function NavBar({ title }: Props): JSX.Element {
  return <nav className={[styles.navBar, "mb3"].join(" ")}>{title}</nav>;
}

export default NavBar;
