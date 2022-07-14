import "./styles/style.scss";
import { useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { setLogin } from "./state/Auth";

import Button from "./components/Form/Button";
import Header from "./views/Header";
import Products from "./views/Products";
import ProductForm from "./views/ProductForm";
import { addItem, fetchItems } from "./services/Product";

function App(props:any) {
  
  const {dispatch} = props;
  const {
    auth: { isLoggedIn },
    product,
  } = useSelector((state: any) => state);

  const [editing, editItem] = useState({ id: 0, name: "", year: "" });

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
          <Header className="bb borderSecondary ph4" />
          <div className="flex flex-column flex-auto">
            <div className="flex justify-between items-center ph4 pt3">
              <div className="b">Movies {product.list.length}</div>
              <Button
                onClick={() =>
                  editItem({ id: product.list.length + 1, name: "", year: "" })
                }
                className="bgButtonPrimary ph3 pv2"
              >
                Add Movie +
              </Button>
            </div>
            {editing.id != 0 && <ProductForm data={editing} onSave={async (item:any)=>{
              await addItem(item);
              dispatch(fetchItems());
            }}/>}
            <Products className="flex-auto ph4" />
          </div>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  const { product } = state;
  return {
    product,
  };
};

export default connect(mapStateToProps)(App);

