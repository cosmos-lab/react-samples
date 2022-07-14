import "./styles/style.scss";
import { useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { setLogin } from "./state/Auth";
import { editItem, fetchItems } from "./services/Product";

import Button from "./components/Form/Button";
import Header from "./views/Header";
import Products from "./views/Products";
import ProductForm from "./views/ProductForm";
import Loading from "./components/Loading";

function App(props: any) {
  const { dispatch } = props;
  const {
    auth: { isLoggedIn },
    product,
  } = useSelector((state: any) => state);

  const [editing, setEditItem] = useState(getBlankitem());
  const [isEditing, setEditing] = useState(false);

  return (
    <div
      className="flex flex-column h100 justify-around theme-1 mhauto"
      style={{ maxWidth: "1024px" }}
    >
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
            {!product.isLoading && (
              <div className="flex justify-between items-center ph4 pt3">
                <div className="b">Movies {product.list.length}</div>
                <Button
                  onClick={() => {
                    setEditItem(getBlankitem());
                    setEditing(true);
                  }}
                  className="bgButtonPrimary ph3 pv2"
                >
                  Add Movie +
                </Button>
              </div>
            )}

            {product.isLoading && <Loading className="mt3 mb3 pt3" count={1} />}

            {isEditing && (
              <ProductForm
                key={`movie-form-${editing.id}`}
                data={editing}
                onSave={async (item: any) => {
                  await editItem(item);
                  dispatch(fetchItems());
                  setEditing(false);
                }}
                onCancel={() => setEditing(false)}
                className="bgSecondary pa4 mh4 mt3"
              />
            )}

            <Products
              className="flex-auto ph4"
              onEdit={(movie: any) => {
                setEditItem(movie);
                setEditing(true);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}

function getBlankitem() {
  return { id: 0, name: "", year: "" };
}

const mapStateToProps = (state: any) => {
  const { product } = state;
  return {
    product,
  };
};

export default connect(mapStateToProps)(App);
