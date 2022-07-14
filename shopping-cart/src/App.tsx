import logo from "./static/logo.svg";
import "./styles/style.scss";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "./state/Auth";
import Products from "./views/Products";
import Button from "./components/Form/Button";
import Header from "./views/Header";

function App() {
  const auth = useSelector((state: any) => state.auth);
  const { isLoggedIn, user } = auth;

  const dispatch = useDispatch();
  return (
    <div className="flex flex-column h100 justify-around theme-1">
      {!isLoggedIn && (
        <div className="tc">
          <Button
            onClick={() => dispatch(setLogin(true))}
            className="bgButtonPrimary pv2 ph4"
          >
            Login
          </Button>
        </div>
      )}

      {isLoggedIn && (
        <>
          <Header className="bb borderSecondary ph3" />
          <Products className="flex-auto ph3" />
        </>
      )}
    </div>
  );
}

export default App;
