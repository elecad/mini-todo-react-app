import React from "react";

import styles from "./Container.module.css";

interface Props {
  children?: React.ReactNode;
}

function Container({ children }: Props): JSX.Element {
  return (
    <div className={styles.cMain}>
      {" "}
      <div className={styles.cContent}> {children}</div>
    </div>
  );
}

export default Container;
