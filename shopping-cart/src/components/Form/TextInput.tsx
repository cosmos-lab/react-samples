import css from "classnames";

type Props = {
  value: any;
  type?: string;
  inline?: boolean;
  maxlength?: number;
  readonly?: boolean;
  onValue: (value: string) => void;
  error?: string;
  placeholder?: string;
  autofocus?: any;
  style?: any;
  className?: any;
};

function TextInput(props: Props) {
  const {
    type,
    value,
    inline,
    onValue,
    maxlength,
    error,
    readonly,
    placeholder,
    autofocus,
    className,
    style,
  } = props;

  if (type == "textarea") {
    return (
      <>
        {error && <div className="textError b small i mb2">{error}</div>}
        <textarea
          placeholder={placeholder}
          value={value}
          className={css(className, "input", { borderError: error })}
          maxLength={maxlength}
          readOnly={readonly}
          style={style}
          onInput={(e: any) => {
            onValue((e.target as HTMLInputElement).value);
          }}
        >
          {value}
        </textarea>
      </>
    );
  }

  return (
    <>
      {error && <div className="textError b small i mt2">{error}</div>}
      <input
        autoFocus={autofocus}
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        className={css(className, {
          borderError: error,
          input: !inline,
          inputLine: inline,
        })}
        maxLength={maxlength}
        readOnly={readonly}
        style={style}
        onInput={(e: any) => {
          onValue((e.target as HTMLInputElement).value);
        }}
      />
    </>
  );
}

export default TextInput;
