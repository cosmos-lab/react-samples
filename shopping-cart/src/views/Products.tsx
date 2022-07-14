import css from "classnames";

import { connect } from "react-redux";
import { Component, ReactNode, useEffect } from "react";
import { fetchItems } from "../services/Product";
import Button from "../components/Form/Button";

class Products extends Component<any> {
  componentDidMount() {
    const {
      props: { dispatch },
    } = this;
    dispatch(fetchItems());
  }

  render(): ReactNode {
    const {
      props: { product, className },
    } = this;
    return (
      <div className={css(className)}>
        {product.list.map((movie: any) => {
          return (
            <div key={`movie-${movie.id}`} className="bb borderSecondary pv3 flex items-center">
              <div className="b heading flex-auto">{movie.name}</div>
              <div className="textSecondary pr4">{movie.year}</div>
              <Button className="bgButtonPrimary pv1">+</Button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { product } = state;
  return {
    product,
  };
};

export default connect(mapStateToProps)(Products);
