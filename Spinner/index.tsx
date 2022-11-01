import css from "classnames";

import "./styles.scss";
function Spinner(props: any) {
  return <div class={css("spinner", props.className)}></div>;
}

export default Spinner;
