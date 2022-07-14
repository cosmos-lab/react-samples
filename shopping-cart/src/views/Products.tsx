import css from "classnames";

import { connect } from "react-redux";
import { Component, ReactNode, useEffect } from "react";
import { fetchItems } from "../services/Product";

class Products extends Component<any> {
  componentDidMount() {
    console.log('Hi')
    const {
      props: { dispatch },
    } = this;
    dispatch(fetchItems());
  }

  render(): ReactNode {
    const {
      props: { className },
    } = this;
    return <div className={css(className)}></div>;
  }
}

const mapStateToProps = (state: any) => {
  const { product } = state;
  return {
    product,
  };
};

export default connect(mapStateToProps)(Products);
