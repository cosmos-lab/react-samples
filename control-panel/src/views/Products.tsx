import css from "classnames";

import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchItems } from "../services/Product";

import Button from "../components/Form/Button";

function Products(props: any) {
  const { product, className, dispatch } = props;

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className={css(className)}>
      {product.list.map((movie: any) => {
        return (
          <div
            key={`movie-${movie.id}`}
            className="bb borderSecondary pv3 flex items-center"
          >
            <div className="b heading flex-auto">{movie.name}</div>
            <div className="textSecondary pr4">{movie.year}</div>
            <Button className="bgButtonSecondary pv1">+</Button>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  const { product } = state;
  return {
    product,
  };
};

export default connect(mapStateToProps)(Products);
