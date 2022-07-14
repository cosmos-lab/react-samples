import { setProductList } from "../state/Product";

export function fetchItems() {
  return async (dispatch: any) => {
    const response = await fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json"
    );
    const json = await response.json();
    dispatch(setProductList(json));
    return json;
  };
}
