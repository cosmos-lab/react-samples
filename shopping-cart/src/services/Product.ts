import { setProductList } from "../state/Product";

export function fetchItems() {
  return async (dispatch: any) => {
    const response = await fetch(
      "/api/movies"
    );
    const json = await response.json();
    dispatch(setProductList(json));
  };
}
