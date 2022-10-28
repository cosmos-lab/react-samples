import { Component, createPortal, createRef } from "@components/Component";
import "@styles/style.scss";
import css from "classnames";

type Props = {
  children: Array<any>;
  onRef?: (refMenu: Menu) => void;
  vshift?: number;
  hshift?: number;
  height?: number;
  align?: string;
  autoclose?: boolean;
  classLabel?: any;
  classBody?: any;
  classActive?: any;
  style?: any;
};

class Menu extends Component<Props> {
  state: any = { position: null };
  ref = createRef<any>();
  refActiveElement: any;
  closeListener: any;

  render(props: Props) {
    const {
      ref,
      state: { position },
    } = this;

    const { classLabel, classActive, classBody, children, autoclose = true, style } = props;

    return (
      <>
        <div
          ref={ref}
          onClick={(e: Event) => {
            if (position) {
              this.close();
              return;
            }
            if (ref.current) {
              const rect = ref.current.getBoundingClientRect();
              this.setState({
                position: {
                  left: rect.x,
                  top: rect.y,
                  anchorWidth: rect.width,
                  vshift: rect.height + (props.vshift || 0),
                  hshift: rect.width + (props.hshift || 0),
                  align: props.align,
                  height: props.height,
                },
              });
            }

            e.stopPropagation();
          }}
          class={css(classLabel, {
            [classActive]: position,
          })}
          style={style}
        >
          {children[0].children}
        </div>
        {position && (
          <>
            {createPortal(
              <div
                class="fixed left0 right0 top0 bottom0 zmax"
                onClick={(e) => {
                  e.stopPropagation();
                  this.close();
                }}
              ></div>,
              document.getElementById("portals") as HTMLElement
            )}
            {createPortal(
              <MenuBody
                position={position}
                class={classBody}
                onClick={(e) => {
                  if (autoclose === false) {
                    e.stopPropagation();
                    return;
                  }
                  this.close();
                }}
                onComponentDidMount={(dom) => {
                  this.setPosition(dom);
                }}
              >
                {children[1]}
              </MenuBody>,
              document.getElementById("portals") as HTMLElement
            )}
          </>
        )}
      </>
    );
  }

  setPosition(dom: any) {
    const {
      state: { position },
    } = this;

    if (!position) {
      return;
    }
    setPosition(dom, position);
    window.requestAnimationFrame(() => {
      this.setPosition(dom);
    });
  }

  onMount() {
    this.closeListener = (e: any) => {
      const refActiveElement = document.activeElement?.tagName.toLowerCase();
      if (
        (e.keyCode && e.keyCode !== 27) ||
        refActiveElement == "input" ||
        this.refActiveElement == "input"
      ) {
        this.refActiveElement = refActiveElement;
        return;
      }
      this.close();
    };

    window.addEventListener("resize", this.closeListener);
    document.addEventListener("keydown", this.closeListener);
  }

  onUnmount() {
    window.removeEventListener("resize", this.closeListener);
    document.removeEventListener("keydown", this.closeListener);
  }

  close() {
    this.set({ position: null });
  }
}

type BodyProps = {
  children: any;
  position: any;
  onClick: (e: any) => void;
  class: any;
};

function MenuBody(props: BodyProps) {
  const ref = createRef<any>();
  const { onClick } = props;
  return (
    <div onClick={onClick} ref={ref} class={css(props.class, "absolute overflow-y-auto zmax")}>
      {props.children.children}
    </div>
  );
}

function setPosition(dom: any, position: any) {
  let left = position.left;
  let top = position.top;
  let bottom = null;
  let overlap = 0;

  if (left + dom.offsetWidth >= window.innerWidth || position.align == "right") {
    left -= dom.offsetWidth - (position.hshift ? position.hshift : 0);
  }

  if (position.align == "center") {
    left = position.left - dom.offsetWidth / 2 + position.anchorWidth / 2;
  }

  if (left <= 20) {
    left = 20;
    position.left = left;
  }

  if (left + dom.offsetWidth >= window.innerWidth) {
    dom.style.right = `${20}px`;
  }

  if (position.top + position.vshift + dom.offsetHeight >= window.innerHeight) {
    if (position.top < window.innerHeight / 2) {
      bottom = 20;
      top += position.vshift;
    } else {
      top -= dom.offsetHeight;
      if (top < 0) {
        top = 20;
        bottom = window.innerHeight - position.top;
      }
      overlap = -1;
    }
  } else if (position.vshift) {
    top += position.vshift;
  }

  dom.style.left = `${left}px`;
  dom.style.top = `${top - overlap}px`;
  if (bottom !== null) {
    dom.style.bottom = `${bottom + overlap}px`;
  }
}

export default Menu;
