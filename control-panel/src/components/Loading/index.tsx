import css from "classnames";
import "./styles.scss";

function Loading(props: any) {
  const { className, count, style } = props;
  return (
    <div className={className} style={style}>
      <div className={css("loadingRow", "br1")}></div>
      {(!count || count > 1) && <div className={css("loadingRow", "w80 mt2 br1")}></div>}
      {(!count || count > 2) && <div className={css("loadingRow", "w40 mt2 br1")}></div>}
    </div>
  );
}

export default Loading;
