import css from "classnames";
import logo from "../static/logo.svg";
import { connect } from "react-redux";
import { setLogin } from "../state/Auth";

function Header(props: any) {
  const {
    auth: { isLoggedIn, user },
    className,
    dispatch
  } = props;

  return (
    <div className={css("flex-center justify-between", className)}>
      {isLoggedIn && (
        <>
          <div>
            <img src={logo} className="App-logo" alt="logo" height="50" />
          </div>
          <div>
            <span>Hello, {user.name}</span>
            <span className="ml2 link" onClick={()=>dispatch(setLogin(false))}>Logout</span>
          </div>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  const { auth } = state;
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Header);
