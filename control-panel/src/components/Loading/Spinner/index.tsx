import css from "classnames";

import "./styles.scss";
function Spinner(props: any) {
  return <div className={css("spinner", props.className)}></div>;
}

export default Spinner;
