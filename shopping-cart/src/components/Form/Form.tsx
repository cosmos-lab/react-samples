import css from "classnames";

type Props = {
  children: any;
  onSubmit: (e: any) => void;
  style?: any;
  className?: any;
};

export function Form(props: Props) {
  const { children, onSubmit, className, style } = props;
  return (
    <form
      className={css(className)}
      style={{ marginBlockEnd: 0, ...style }}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
      noValidate
    >
      {children}
    </form>
  );
}
export default Form;
