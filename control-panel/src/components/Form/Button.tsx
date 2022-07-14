import css from "classnames";
import Spinner from "../Loading/Spinner";

type Props = {
  children: any;
  onClick?: (e: any) => void;
  isLoading?: boolean;
  style?: any;
  className?: any;
};

function Button(props: Props) {
  const { children, onClick, isLoading, className, style } = props;
  return (
    <>
      <button
        className={css(className, "pointer relative z0")}
        style={style}
        onClick={(e) => {
          if (isLoading) {
            e.preventDefault();
            return;
          }
          onClick && onClick(e);
        }}
      >
        {children}
        {isLoading && (
          <div
            className="absolute left0 right0 top0 bottom0 z0 flex flex-column"
            style={{
              background:'inherit'
            }}
          >
            <Spinner className="mauto" />
          </div>
        )}
      </button>
    </>
  );
}

export default Button;